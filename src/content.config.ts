import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts live in src/content/posts/ (committed and published).
// Drafts live in src/content/drafts/ (git-ignored): they show in `npm run dev`
// only, are never built for production and never pushed to the public repo.
const posts = defineCollection({
  loader: glob({
    pattern: ['posts/**/*.md', 'drafts/**/*.md'],
    base: './src/content',
    generateId: ({ entry }) => entry.replace(/^(posts|drafts)\//, '').replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('NineAPI'),
    tags: z.array(z.string()).default([]),
    // Mark drafts explicitly too, so a draft moved into posts/ by mistake stays unpublished.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
