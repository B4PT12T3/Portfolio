import type { APIRoute } from 'astro';
import { SITE_ENV } from 'astro:env/server';

// The real site is open to search engines; the test site is fully blocked.
export const GET: APIRoute = ({ site }) => {
  const body =
    SITE_ENV === 'production'
      ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`
      : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
