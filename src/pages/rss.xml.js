import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const items = await getCollection("blog");
	return rss({
		title: "My Blog",
		description: "Latest posts from my blog",
		site: context.site,
		items: items.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
