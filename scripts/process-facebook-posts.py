#!/usr/bin/env python3
"""
Process Facebook posts JSON export and create a cleaned version for the web app.
Extracts the most recent posts with substantial content and fixes the double-encoded UTF-8 text.
"""

import json
import os
from datetime import datetime
from pathlib import Path

# Paths
INPUT_FILE = '/mnt/c/www/neusatz-ngo/data/facebook/your_facebook_activity/posts/your_posts__check_ins__photos_and_videos_1.json'
OUTPUT_DIR = '/mnt/c/www/neusatz-ngo/public/data'
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'facebook-posts.json')

def fix_encoding(text):
    """Fix Facebook's double-encoded UTF-8 text (Latin-1 -> UTF-8)"""
    try:
        # The text is encoded as UTF-8 but interpreted as Latin-1
        return text.encode('latin-1').decode('utf-8')
    except (UnicodeDecodeError, UnicodeEncodeError):
        # If fixing fails, return original
        return text

def extract_post_text(post):
    """Extract post text from the data array"""
    for item in post.get('data', []):
        if 'post' in item and item['post']:
            return fix_encoding(item['post'])
    return None

def extract_image_url(post):
    """Extract image URL from attachments (if available)"""
    attachments = post.get('attachments', [])
    for attachment in attachments:
        for att_data in attachment.get('data', []):
            # Check for media with URI
            if 'media' in att_data and 'uri' in att_data['media']:
                uri = att_data['media']['uri']

                # Handle local file paths
                if uri and not uri.startswith('http'):
                    # e.g. "your_facebook_activity/posts/media/.../122133159638731083.jpg"
                    filename = uri.split('/')[-1]
                    if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):
                        return f"/images/posts/{filename}"

                # Handle external URLs (giphy, etc)
                if uri and uri.startswith('http'):
                    return uri

            # Check for external URLs
            if 'external_context' in att_data and 'url' in att_data['external_context']:
                url = att_data['external_context']['url']
                # Filter out non-image URLs (forms, etc)
                if url and any(ext in url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif']):
                    return url
    return None

def format_date(timestamp):
    """Format timestamp to readable date string"""
    dt = datetime.fromtimestamp(timestamp)
    return dt.strftime('%Y-%m-%d')

def process_posts(min_text_length=50, max_posts=None):
    """
    Process Facebook posts and extract the most recent ones with substantial content.

    Args:
        min_text_length: Minimum character length for a post to be included
        max_posts: Maximum number of posts to include
    """
    # Load the raw Facebook data
    print(f"Loading posts from {INPUT_FILE}...")
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        raw_posts = json.load(f)

    print(f"Total posts in file: {len(raw_posts)}")

    # Process and filter posts
    processed_posts = []
    for i, post in enumerate(raw_posts):
        # Extract text
        text = extract_post_text(post)

        # Skip posts without text or with very short text
        if not text or len(text) < min_text_length:
            continue

        # Extract other fields
        timestamp = post.get('timestamp', 0)
        image_url = extract_image_url(post)

        # Create processed post object
        processed_post = {
            'id': f'fb-{timestamp}-{i}',
            'timestamp': timestamp,
            'date': format_date(timestamp),
            'text': text,
            'imageUrl': image_url
        }

        processed_posts.append(processed_post)

    # Sort by timestamp (newest first)
    processed_posts.sort(key=lambda x: x['timestamp'], reverse=True)

    # Limit to max_posts (if specified)
    if max_posts:
        processed_posts = processed_posts[:max_posts]

    print(f"Processed {len(processed_posts)} posts with substantial content")

    # Create output directory if it doesn't exist
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Write to output file
    print(f"Writing to {OUTPUT_FILE}...")
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(processed_posts, f, ensure_ascii=False, indent=2)

    print(f"✓ Successfully created {OUTPUT_FILE}")
    print(f"✓ Included {len(processed_posts)} posts")

    # Print a sample post
    if processed_posts:
        print("\nSample post (most recent):")
        sample = processed_posts[0]
        print(f"  Date: {sample['date']}")
        print(f"  Text: {sample['text'][:100]}...")
        print(f"  Image: {sample['imageUrl'] or 'None'}")

if __name__ == '__main__':
    process_posts()
