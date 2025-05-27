// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import { rehypeHeadingIds } from "@astrojs/markdown-remark";

import sectionize from "@hbsnow/rehype-sectionize";

import rehypeShiftHeading from "rehype-shift-heading";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://ringoldsdev.github.io/",
	prefetch: true,
	integrations: [
		alpinejs({ entrypoint: "/src/entrypoint.ts" }),
		mdx(),
		partytown(),
		sitemap(),
		icon(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [
			rehypeHeadingIds,
			sectionize,
			[rehypeShiftHeading, { shift: 1 }],
			// 			[
			// 				rehypeAutolinkHeadings,
			// 				{
			// 					behavior: "append",
			// 					content: {
			// 						type: Node,
			// 						value: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
			//   <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
			// </svg>
			// `,
			// 					},
			// 				},
			// 			],
		],
	},
});
