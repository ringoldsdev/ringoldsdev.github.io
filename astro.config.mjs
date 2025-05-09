// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

import sectionize from "@hbsnow/rehype-sectionize";

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
		rehypePlugins: [
			rehypeHeadingIds,
			sectionize,
			[rehypeAutolinkHeadings, { behavior: "wrap" }],
		],
	},
});
