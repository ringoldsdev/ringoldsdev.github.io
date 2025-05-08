import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
  type: 'content', // Ensure the collection type is explicitly set to 'content'
});

// Ensure MDX files are included in the content collection
export const collections = {
  blog,
};