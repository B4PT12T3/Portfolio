import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'> & { slug: string; lang: Lang };

/** All published projects in one language, newest first. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const entries = await getCollection('projects', (entry) => !entry.data.draft);
  return entries
    .map((entry) => {
      const [slug, entryLang] = entry.id.split('/');
      return { ...entry, slug, lang: entryLang as Lang };
    })
    .filter((p) => p.lang === lang)
    .sort((a, b) => b.data.year - a.data.year || b.data.order - a.data.order || a.slug.localeCompare(b.slug));
}

/** Slugs that exist in one language but not the other — reported at build time. */
export async function checkTranslations() {
  const entries = await getCollection('projects', (entry) => !entry.data.draft);
  const byLang: Record<string, Set<string>> = { fr: new Set(), en: new Set() };
  for (const e of entries) {
    const [slug, lang] = e.id.split('/');
    byLang[lang]?.add(slug);
  }
  const missing: string[] = [];
  for (const slug of byLang.fr) if (!byLang.en.has(slug)) missing.push(`${slug}/en.md`);
  for (const slug of byLang.en) if (!byLang.fr.has(slug)) missing.push(`${slug}/fr.md`);
  return missing;
}
