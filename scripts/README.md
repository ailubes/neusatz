# Facebook Posts Processing Script

## Overview

This directory contains scripts for processing Facebook data exports into a format suitable for the web application.

## process-facebook-posts.py

This Python script processes the raw Facebook data export and creates a cleaned, preprocessed JSON file for the web application.

### What it does:

1. **Fixes encoding issues**: Facebook exports use double-encoded UTF-8 text (Latin-1 → UTF-8). The script fixes this encoding.

2. **Extracts post content**: Parses the complex Facebook JSON structure to extract relevant post data.

3. **Filters posts**: Only includes posts with substantial text content (>50 characters).

4. **Sorts by date**: Orders posts from newest to oldest.

5. **Limits output**: Exports the 20 most recent posts.

### Usage:

```bash
python3 scripts/process-facebook-posts.py
```

### Output:

Creates `/public/data/facebook-posts.json` with the following structure:

```json
[
  {
    "id": "fb-1764590428-103",
    "timestamp": 1764590428,
    "date": "2025-12-01",
    "text": "Post content here...",
    "imageUrl": null
  }
]
```

### Requirements:

- Python 3.6+
- No external dependencies (uses only standard library)

### Notes:

- The script looks for the Facebook export at: `/data/facebook/your_facebook_activity/posts/your_posts__check_ins__photos_and_videos_1.json`
- Only external image URLs (like Giphy) are included. Local media files would need to be copied separately.
- To update the posts on the website, simply re-run this script after getting a new Facebook data export.

## Future improvements:

- Support for copying local media files to the public directory
- Support for multiple Facebook export files
- Support for video attachments
- More advanced filtering options
