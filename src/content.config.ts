import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projects: one folder per project in src/content/projects/<slug>/
 *   fr.md  → French text      en.md → English text
 *   images (cover, gallery) sit in the same folder and are referenced as ./file.jpg
 * The folder name is the project's URL: /realisations/<slug>/ and /en/work/<slug>/
 */
const projects = defineCollection({
  loader: glob({ pattern: '*/{fr,en}.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(200),
      category: z.enum(['dev', 'design', 'photo']),
      year: z.number().int(),
      client: z.string().optional(),
      role: z.string().optional(),
      url: z.url().optional(),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(z.object({ image: image(), alt: z.string() })).default([]),
      // Shown on the home page
      featured: z.boolean().default(false),
      // Higher numbers come first among projects of the same year
      order: z.number().default(0),
      // true = hidden everywhere (work in progress)
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
