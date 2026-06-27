import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  const sortedPosts = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "Yo0's Blog",
    description: "Yo0 的個人部落格。",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags?.filter(Boolean),
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>zh-TW</language>`,
  });
}
