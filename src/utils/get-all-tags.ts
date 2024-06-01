import { getCollection } from "astro:content";

export const getAllTags = async () => {
  const posts = await getCollection("blog");
  return Array.from(
    new Set(
      posts
        .map((post) => post.data.tags)
        .flat()
        .sort()
    )
  );
};
