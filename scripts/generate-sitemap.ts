import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface FacebookPost {
  id: string;
  timestamp: number;
  date: string;
  text: string;
  imageUrl: string | null;
}

const SITE_URL = 'https://neusatz.online';
const LANGUAGES = ['ua', 'en', 'de'];
const STATIC_PAGES = ['', 'projects', 'news', 'about', 'donate', 'community'];

function getCurrentDate(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

function generateUrl(
  loc: string,
  lastmod: string,
  changefreq: string,
  priority: string
): string {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap(): string {
  const currentDate = getCurrentDate();
  const urls: string[] = [];

  // Add static pages for all languages
  for (const lang of LANGUAGES) {
    for (const page of STATIC_PAGES) {
      const path = page === '' ? `/${lang}` : `/${lang}/${page}`;
      const priority = page === '' ? '1.0' : '0.8';

      urls.push(
        generateUrl(
          `${SITE_URL}${path}`,
          currentDate,
          'monthly',
          priority
        )
      );
    }
  }

  // Load Facebook posts
  const postsPath = join(process.cwd(), 'public', 'data', 'facebook-posts.json');
  const postsData = readFileSync(postsPath, 'utf-8');
  const posts: FacebookPost[] = JSON.parse(postsData);

  // Add individual news posts for all languages
  for (const lang of LANGUAGES) {
    for (const post of posts) {
      urls.push(
        generateUrl(
          `${SITE_URL}/${lang}/news/${post.id}`,
          currentDate,
          'weekly',
          '0.6'
        )
      );
    }
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return xml;
}

function main() {
  try {
    console.log('Generating sitemap...');

    const sitemap = generateSitemap();
    const distPath = join(process.cwd(), 'dist', 'sitemap.xml');

    writeFileSync(distPath, sitemap, 'utf-8');

    console.log(`✓ Sitemap generated successfully at ${distPath}`);

    // Count URLs
    const urlCount = (sitemap.match(/<url>/g) || []).length;
    console.log(`✓ Total URLs: ${urlCount}`);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
