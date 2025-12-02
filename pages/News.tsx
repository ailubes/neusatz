import React, { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getPaginatedPosts, searchPosts, truncateText, FacebookPost } from '../services/facebookPostsService';
import { Search, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const POSTS_PER_PAGE = 8; // 4x2 grid
const DEFAULT_POST_IMAGE = '/images/posts/default-post.jpg';

const News: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const [allPosts, setAllPosts] = useState<FacebookPost[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<FacebookPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);

  // Get current page from URL (default to 1)
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Load all posts on mount (for search functionality)
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        // Fetch a large number to get all posts for search
        const response = await fetch('/data/facebook-posts.json');
        if (response.ok) {
          const posts: FacebookPost[] = await response.json();
          setAllPosts(posts);
          setTotalPosts(posts.length);
        }
      } catch (error) {
        console.error('Failed to load all posts:', error);
      }
    };

    fetchAllPosts();
  }, []);

  // Load paginated posts based on current page and search term
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        if (searchTerm.trim()) {
          // Filter locally from all posts
          const filtered = searchPosts(allPosts, searchTerm);
          const total = filtered.length;
          const pages = Math.ceil(total / POSTS_PER_PAGE);

          // Reset to page 1 if current page is out of bounds
          const validPage = Math.max(1, Math.min(currentPage, pages || 1));
          const startIndex = (validPage - 1) * POSTS_PER_PAGE;
          const endIndex = startIndex + POSTS_PER_PAGE;

          setDisplayedPosts(filtered.slice(startIndex, endIndex));
          setTotalPages(pages);
          setTotalPosts(total);
        } else {
          // Load paginated posts from service
          const result = await getPaginatedPosts(currentPage, POSTS_PER_PAGE);
          setDisplayedPosts(result.posts);
          setTotalPages(result.totalPages);
          setTotalPosts(result.totalPosts);
        }
      } catch (error) {
        console.error('Failed to load posts:', error);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if allPosts is loaded (or if no search term)
    if (allPosts.length > 0 || !searchTerm.trim()) {
      fetchPosts();
    }
  }, [currentPage, searchTerm, allPosts]);

  // Handle search term change (reset to page 1)
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (currentPage !== 1) {
      setSearchParams({ page: '1' });
    }
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get image URL with fallback
  const getImageUrl = (imageUrl: string | null) => {
    return imageUrl || DEFAULT_POST_IMAGE;
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisible = 7; // Max page numbers to show

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Near the start
        pages.push(2, 3, 4, 'ellipsis', totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push('ellipsis', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // In the middle
        pages.push('ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages);
      }
    }

    return pages;
  };

  // Format results text with placeholders
  const formatResultsText = () => {
    if (searchTerm) {
      const resultsText = t.news.showingResults
        .replace('{count}', displayedPosts.length.toString())
        .replace('{total}', totalPosts.toString());
      const queryText = t.news.forQuery.replace('{query}', searchTerm);
      return `${resultsText} ${queryText}`;
    }
    return t.news.showingResults
      .replace('{count}', displayedPosts.length.toString())
      .replace('{total}', totalPosts.toString());
  };

  // Format page indicator
  const formatPageOf = () => {
    return t.news.pageOf
      .replace('{current}', currentPage.toString())
      .replace('{total}', totalPages.toString());
  };

  return (
    <div className="py-16 bg-gradient-to-b from-stone-50 to-amber-50 min-h-screen">
      <SEO
        title={t.seo.news.title}
        description={t.seo.news.description}
        path="/news"
        lang={language}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">{t.news.title}</h1>
          <p className="text-lg text-stone-600">{t.news.subtitle}</p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder={t.news.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/90"
            />
            <Search className="absolute left-3 top-2.5 text-stone-400" size={18} />
          </div>
        </div>

        {/* Results Count */}
        {!loading && totalPosts > 0 && (
          <div className="text-center mb-8">
            <p className="text-sm text-stone-600">
              {formatResultsText()}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-stone-600">{t.news.loading}</p>
          </div>
        )}

        {/* Posts Grid - 4 columns */}
        {!loading && displayedPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {displayedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/90 rounded-xl shadow-sm border border-amber-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image - always shows (with fallback) */}
                <div className="relative h-40 overflow-hidden shrink-0">
                  <img
                    src={getImageUrl(post.imageUrl)}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-grow flex flex-col">
                  {/* Date */}
                  <div className="flex items-center text-stone-400 text-xs mb-2 gap-1.5">
                    <Calendar size={12} />
                    <span>
                      {new Date(post.timestamp * 1000).toLocaleDateString(
                        language === 'ua' ? 'uk-UA' : language === 'de' ? 'de-DE' : 'en-US',
                        { year: 'numeric', month: 'long', day: 'numeric' }
                      )}
                    </span>
                  </div>

                  {/* Text Excerpt */}
                  <p className="text-stone-700 text-sm leading-relaxed flex-grow line-clamp-4">
                    {truncateText(post.text, 120)}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-3 pt-3 border-t border-amber-100">
                    <NavLink
                      to={`/${language}/news/${post.id}`}
                      className="text-primary-600 font-medium text-xs hover:text-primary-800 transition-colors inline-block"
                    >
                      {t.news.readMore} →
                    </NavLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* No Results State */}
        {!loading && displayedPosts.length === 0 && (
          <div className="text-center py-20 bg-white/90 rounded-xl border border-amber-100 border-dashed">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-300">
              <Search size={32} />
            </div>
            <h3 className="text-lg font-medium text-stone-900 mb-2">
              {t.news.noResults}
            </h3>
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && displayedPosts.length > 0 && totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Page Info */}
            <div className="text-sm text-stone-600">
              {formatPageOf()}
            </div>

            {/* Pagination Buttons */}
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`
                  flex items-center gap-1 px-3 py-2 rounded-lg border transition-all
                  ${currentPage === 1
                    ? 'border-stone-200 text-stone-300 cursor-not-allowed bg-stone-50'
                    : 'border-amber-200 text-stone-700 hover:bg-primary-50 hover:border-primary-300 bg-white'
                  }
                `}
                aria-label={t.news.previous}
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">{t.news.previous}</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {getPageNumbers().map((pageNum, index) => {
                  if (pageNum === 'ellipsis') {
                    return (
                      <span
                        key={`ellipsis-${index}`}
                        className="px-2 py-2 text-stone-400"
                      >
                        ...
                      </span>
                    );
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`
                        px-3 py-2 rounded-lg border transition-all min-w-[40px] sm:min-w-[44px]
                        ${currentPage === pageNum
                          ? 'bg-primary-600 text-white border-primary-600 font-medium shadow-sm'
                          : 'bg-white border-amber-200 text-stone-700 hover:bg-primary-50 hover:border-primary-300'
                        }
                      `}
                      aria-label={`Go to page ${pageNum}`}
                      aria-current={currentPage === pageNum ? 'page' : undefined}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`
                  flex items-center gap-1 px-3 py-2 rounded-lg border transition-all
                  ${currentPage === totalPages
                    ? 'border-stone-200 text-stone-300 cursor-not-allowed bg-stone-50'
                    : 'border-amber-200 text-stone-700 hover:bg-primary-50 hover:border-primary-300 bg-white'
                  }
                `}
                aria-label={t.news.next}
              >
                <span className="hidden sm:inline">{t.news.next}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
