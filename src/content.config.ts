import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: rssSchema.extend({
		tags: z.array(z.string()).optional(),
	}),
});

const tags = defineCollection({
	schema: z.object({
		title: z.string(),
		layout: z.string(),
		tags: z.array(z.string()),
		date: z.string(),
		image: z.string().optional(),
	}),
});

// Ensure MDX files are included in the content collection
export const collections = {
	blog,
	tags,
};
