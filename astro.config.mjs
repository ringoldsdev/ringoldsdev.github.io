// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
	site: "https://ringoldsdev.github.io/",
	prefetch: true,
	integrations: [
		alpinejs({ entrypoint: "/src/entrypoint.ts" }),
		mdx(),
		partytown(),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		remarkPlugins: [[remarkToc, { heading: "contents" }]],
		rehypePlugins: [
			rehypeSlug,
			[rehypeAutolinkHeadings, { behavior: "append" }],
		],
	},
});
