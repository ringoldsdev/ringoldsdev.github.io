import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
	schema: rssSchema,
	type: "content", // Ensure the collection type is explicitly set to 'content'
});

// Ensure MDX files are included in the content collection
export const collections = {
	blog,
};
