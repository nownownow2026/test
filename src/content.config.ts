// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const day = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/day' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    readMoreLink: z.boolean().optional()
  })
});

export const collections = { day };
