/**
 * Service for loading and managing Facebook posts from preprocessed JSON data.
 *
 * The posts are preprocessed from Facebook's data export format, which uses
 * double-encoded UTF-8 text. The preprocessing script handles the encoding
 * conversion and extracts the most relevant posts.
 */

export interface FacebookPost {
  id: string;
  timestamp: number;
  date: string;
  text: string;
  imageUrl: string | null;
}

/**
 * Load Facebook posts from the preprocessed JSON file.
 *
 * @param limit - Maximum number of posts to return (default: 8)
 * @returns Promise resolving to an array of FacebookPost objects
 */
export async function loadFacebookPosts(limit: number = 8): Promise<FacebookPost[]> {
  try {
    // Load the preprocessed JSON file
    const response = await fetch('/data/facebook-posts.json');

    if (!response.ok) {
      throw new Error(`Failed to load posts: ${response.statusText}`);
    }

    const posts: FacebookPost[] = await response.json();

    // Return the requested number of posts
    // Posts are already sorted by timestamp (newest first) in the preprocessed file
    return posts.slice(0, limit);
  } catch (error) {
    console.error('Error loading Facebook posts:', error);
    // Return empty array on error to prevent UI breaking
    return [];
  }
}

/**
 * Search Facebook posts by text content.
 *
 * @param posts - Array of posts to search
 * @param searchTerm - Search term to filter by
 * @returns Filtered array of posts matching the search term
 */
export function searchPosts(posts: FacebookPost[], searchTerm: string): FacebookPost[] {
  if (!searchTerm.trim()) {
    return posts;
  }

  const term = searchTerm.toLowerCase();
  return posts.filter(post =>
    post.text.toLowerCase().includes(term)
  );
}

/**
 * Truncate text to a maximum length and add ellipsis if needed.
 *
 * @param text - Text to truncate
 * @param maxLength - Maximum length (default: 150)
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Try to truncate at a word boundary
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...';
  }

  return truncated + '...';
}

/**
 * Get the total count of all Facebook posts.
 *
 * @returns Promise resolving to the total number of posts
 */
export async function getTotalPostCount(): Promise<number> {
  try {
    const response = await fetch('/data/facebook-posts.json');

    if (!response.ok) {
      throw new Error(`Failed to load posts: ${response.statusText}`);
    }

    const posts: FacebookPost[] = await response.json();
    return posts.length;
  } catch (error) {
    console.error('Error getting total post count:', error);
    return 0;
  }
}

/**
 * Get a single Facebook post by its ID.
 *
 * @param id - The post ID to search for
 * @returns Promise resolving to the post or null if not found
 */
export async function getPostById(id: string): Promise<FacebookPost | null> {
  try {
    const response = await fetch('/data/facebook-posts.json');

    if (!response.ok) {
      throw new Error(`Failed to load posts: ${response.statusText}`);
    }

    const posts: FacebookPost[] = await response.json();
    const post = posts.find(p => p.id === id);

    return post || null;
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    return null;
  }
}

/**
 * Get paginated Facebook posts.
 *
 * @param page - Page number (1-indexed)
 * @param perPage - Number of posts per page (default: 8 for 4x2 grid)
 * @returns Promise resolving to paginated posts with metadata
 */
export async function getPaginatedPosts(
  page: number,
  perPage: number = 8
): Promise<{
  posts: FacebookPost[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}> {
  try {
    const response = await fetch('/data/facebook-posts.json');

    if (!response.ok) {
      throw new Error(`Failed to load posts: ${response.statusText}`);
    }

    const allPosts: FacebookPost[] = await response.json();
    const totalPosts = allPosts.length;
    const totalPages = Math.ceil(totalPosts / perPage);

    // Ensure page number is valid
    const currentPage = Math.max(1, Math.min(page, totalPages || 1));

    // Calculate start and end indices
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    // Get posts for current page
    const posts = allPosts.slice(startIndex, endIndex);

    return {
      posts,
      totalPages,
      currentPage,
      totalPosts
    };
  } catch (error) {
    console.error('Error loading paginated posts:', error);
    // Return empty result on error
    return {
      posts: [],
      totalPages: 0,
      currentPage: page,
      totalPosts: 0
    };
  }
}
