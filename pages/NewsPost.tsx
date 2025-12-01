import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getPostById, getPaginatedPosts, FacebookPost } from '../services/facebookPostsService';
import { Calendar, ArrowLeft, Facebook, Link2, ChevronLeft, ChevronRight } from 'lucide-react';

const DEFAULT_POST_IMAGE = '/images/posts/default-post.jpg';

const NewsPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const [post, setPost] = useState<FacebookPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Navigation state for prev/next posts
  const [prevPost, setPrevPost] = useState<FacebookPost | null>(null);
  const [nextPost, setNextPost] = useState<FacebookPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setLoading(true);
      setNotFound(false);

      try {
        // Fetch the current post
        const fetchedPost = await getPostById(postId);

        if (!fetchedPost) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        setPost(fetchedPost);

        // Fetch all posts to find prev/next and related posts
        const allPostsData = await getPaginatedPosts(1, 100); // Get up to 100 posts
        const allPosts = allPostsData.posts;

        // Find the current post index
        const currentIndex = allPosts.findIndex(p => p.id === postId);

        if (currentIndex !== -1) {
          // Set previous and next posts
          if (currentIndex > 0) {
            setNextPost(allPosts[currentIndex - 1]); // Newer post
          } else {
            setNextPost(null);
          }

          if (currentIndex < allPosts.length - 1) {
            setPrevPost(allPosts[currentIndex + 1]); // Older post
          } else {
            setPrevPost(null);
          }

          // Get related posts (3-4 recent posts excluding current)
          const related = allPosts
            .filter(p => p.id !== postId)
            .slice(0, 4);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  // Convert URLs in text to clickable links
  const linkifyText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 underline break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Format text with paragraphs
  const formatText = (text: string) => {
    const paragraphs = text.split('\n\n').filter(p => p.trim());

    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0 leading-relaxed">
        {linkifyText(paragraph)}
      </p>
    ));
  };

  // Copy link to clipboard
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  // Share on Facebook
  const handleFacebookShare = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  // Navigate to prev/next post
  const handleNavigatePost = (postId: string) => {
    navigate(`/${language}/news/${postId}`);
  };

  // Get image URL with fallback
  const getImageUrl = (imageUrl: string | null) => {
    return imageUrl || DEFAULT_POST_IMAGE;
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-stone-600">{t.news.loading}</p>
          </div>
        </div>
      </div>
    );
  }

  // 404 Not Found state
  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">📄</span>
            </div>
            <h1 className="text-3xl font-bold text-stone-900 mb-4">{t.news.postNotFound}</h1>
            <p className="text-lg text-stone-600 mb-8">
              {t.news.postNotFoundText}
            </p>
            <button
              onClick={() => navigate(`/${language}/news`)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <ArrowLeft size={20} />
              {t.news.backToNews}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(`/${language}/news`)}
          className="inline-flex items-center gap-2 text-stone-600 hover:text-primary-600 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">{t.news.backToNews}</span>
        </button>
      </div>

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image - always shows (with fallback) */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-lg animate-fade-in">
          <img
            src={getImageUrl(post.imageUrl)}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-stone-500 mb-6">
          <Calendar size={20} />
          <time className="text-lg">
            {new Date(post.timestamp * 1000).toLocaleDateString(
              language === 'ua' ? 'uk-UA' : language === 'de' ? 'de-DE' : 'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </time>
        </div>

        {/* Post Content */}
        <div className="bg-white/90 rounded-2xl p-8 md:p-12 shadow-sm border border-amber-200 mb-8">
          <div className="prose prose-lg max-w-none text-stone-700">
            {formatText(post.text)}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-stone-600 font-medium">{t.news.share}:</span>
          <button
            onClick={handleFacebookShare}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            title="Share on Facebook"
          >
            <Facebook size={18} />
            Facebook
          </button>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-4 py-2 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition-colors relative"
            title={t.news.copyLink}
          >
            <Link2 size={18} />
            {copySuccess ? t.news.copied : t.news.copyLink}
          </button>
        </div>

        {/* Previous/Next Navigation */}
        {(prevPost || nextPost) && (
          <div className="flex justify-between items-center gap-4 mb-16 pb-8 border-b border-amber-200">
            <div className="flex-1">
              {prevPost && (
                <button
                  onClick={() => handleNavigatePost(prevPost.id)}
                  className="flex items-center gap-2 text-stone-600 hover:text-primary-600 transition-colors group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-stone-400 uppercase">{t.news.olderPost}</div>
                    <div className="font-medium line-clamp-1">
                      {prevPost.text.substring(0, 60)}...
                    </div>
                  </div>
                </button>
              )}
            </div>
            <div className="flex-1 text-right">
              {nextPost && (
                <button
                  onClick={() => handleNavigatePost(nextPost.id)}
                  className="flex items-center justify-end gap-2 text-stone-600 hover:text-primary-600 transition-colors group"
                >
                  <div className="text-right">
                    <div className="text-xs text-stone-400 uppercase">{t.news.newerPost}</div>
                    <div className="font-medium line-clamp-1">
                      {nextPost.text.substring(0, 60)}...
                    </div>
                  </div>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">{t.news.relatedPosts}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <NavLink
                  key={relatedPost.id}
                  to={`/${language}/news/${relatedPost.id}`}
                  className="group bg-white/90 rounded-xl shadow-sm border border-amber-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Image - always shows (with fallback) */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={getImageUrl(relatedPost.imageUrl)}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Date */}
                    <div className="flex items-center text-stone-400 text-xs mb-2 gap-1.5">
                      <Calendar size={12} />
                      <span>
                        {new Date(relatedPost.timestamp * 1000).toLocaleDateString(
                          language === 'ua' ? 'uk-UA' : language === 'de' ? 'de-DE' : 'en-US',
                          { year: 'numeric', month: 'long', day: 'numeric' }
                        )}
                      </span>
                    </div>

                    {/* Text Excerpt */}
                    <p className="text-stone-700 text-sm leading-relaxed line-clamp-3">
                      {relatedPost.text.substring(0, 120)}...
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default NewsPost;
