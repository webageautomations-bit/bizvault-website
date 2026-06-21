import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Procurement', 'Logistics', 'Compliance', 'Trade Insights', 'Industry']),
    pubDate: z.coerce.date(),
    readTime: z.string(),
    author: z.string().default('BizVault Editorial'),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
