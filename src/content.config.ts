import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: rssSchema,
});

// Ensure MDX files are included in the content collection
export const collections = {
	blog,
};
