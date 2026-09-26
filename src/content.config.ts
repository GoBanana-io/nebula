import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ideas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ideas' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    company: z.string().default(''),
    country: z.string().default('Egypt'),
    sector: z.string().default(''),
    stage: z.string().default(''),
    founded: z.string().default(''),
    amountRaised: z.string().default(''),
    amountSource: z.string().default(''),
    valuation: z.string().default(''),
    valuationSource: z.string().default(''),
    status: z.string().default('operating'),
    coreProblem: z.string().default(''),
    whyItWorked: z.string().default(''),
    challenges: z.string().default(''),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .default([]),
    summaryAr: z.string().default(''),
  }),
});

export const collections = { ideas };
