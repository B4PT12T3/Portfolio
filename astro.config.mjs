// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public URL of the site being built.
// GitHub Actions sets it per branch (main → morvillebaptiste.fr, dev → test.morvillebaptiste.fr).
const SITE_URL = process.env.SITE_URL || 'https://morvillebaptiste.fr';

export default defineConfig({
  site: SITE_URL,
  // Every page is built as /page/index.html, so URLs end with a slash (works out of the box on Apache/LWS).
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Keep HTML-aware whitespace handling (Astro 7 defaults to 'jsx', which removes spaces between inline tags).
  compressHTML: true,

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      // French lives at the root (/), English under /en/
      prefixDefaultLocale: false,
    },
  },

  env: {
    schema: {
      // "production" = real site (indexed by Google). Anything else = test site (noindex + "test" badge).
      SITE_ENV: envField.enum({
        context: 'server',
        access: 'public',
        values: ['production', 'development'],
        default: 'development',
      }),
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
