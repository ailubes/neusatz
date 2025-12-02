import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;           // Page title (will add " | Neusatz" suffix)
  description: string;     // Meta description (max 160 chars)
  path: string;            // Current path without language prefix (e.g., "/projects")
  lang: 'ua' | 'en' | 'de'; // Current language
  image?: string;          // Optional OG image URL (defaults to hero image)
  type?: string;           // og:type (default: "website")
  publishedTime?: string;  // For articles
  modifiedTime?: string;   // For articles
  schema?: object;         // Optional JSON-LD structured data
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  lang,
  image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kosa_Tiligul_Progresivka.jpg/2560px-Kosa_Tiligul_Progresivka.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  schema,
}) => {
  const baseUrl = 'https://neusatz.online';
  const fullTitle = `${title} | Neusatz`;

  // Map language codes for hreflang (ua → uk for ISO 639-1)
  const hreflangMap: Record<'ua' | 'en' | 'de', string> = {
    ua: 'uk',
    en: 'en',
    de: 'de',
  };

  // Map language codes for og:locale
  const localeMap: Record<'ua' | 'en' | 'de', string> = {
    ua: 'uk_UA',
    en: 'en_US',
    de: 'de_DE',
  };

  // Build canonical URL
  const canonicalUrl = `${baseUrl}/${lang}${path}`;

  // Build hreflang URLs
  const languages: Array<'ua' | 'en' | 'de'> = ['ua', 'en', 'de'];
  const hreflangLinks = languages.map((language) => ({
    rel: 'alternate',
    hreflang: hreflangMap[language],
    href: `${baseUrl}/${language}${path}`,
  }));

  // Add x-default to Ukrainian version
  hreflangLinks.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${baseUrl}/ua${path}`,
  });

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={hreflangMap[lang]} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Links */}
      {hreflangLinks.map((link) => (
        <link
          key={link.hreflang}
          rel={link.rel}
          hrefLang={link.hreflang}
          href={link.href}
        />
      ))}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={localeMap[lang]} />
      <meta property="og:site_name" content="Neusatz" />

      {/* Article-specific Open Graph tags */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Contact Information */}
      <meta property="og:email" content="ngoneusatz@gmail.com" />

      {/* Social Media Links */}
      <link rel="me" href="https://facebook.com/neusatz.ngo" />
    </Helmet>
  );
};

export default SEO;
