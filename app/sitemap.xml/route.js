import { fetchSiteMapEntries } from '@/lib/StoryBlok';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
  // Fetch the homepage, articles, and other pages from Storyblok
  const { homepage, pages, articles } = await fetchSiteMapEntries();

  // Create a sitemap stream
  const sitemap = new SitemapStream({ hostname: 'https://www.stretchibiza.com' });

  // Add homepage
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });

  // Add pages URLs
  pages.forEach(page => {
    sitemap.write({ url: `/pages/${page.slug}`, changefreq: 'weekly', priority: 0.8 });
  });

  // Add articles URLs
  articles.forEach(article => {
    sitemap.write({ url: `/articles/${article.slug}`, changefreq: 'weekly', priority: 0.6 });
  });

  // End the stream
  sitemap.end();

  // Convert the stream to a string
  const sitemapOutput = await streamToPromise(Readable.from(sitemap)).then(data => data.toString());

  // Return the XML response
  return new Response(sitemapOutput, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
