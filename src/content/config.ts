import { z, defineCollection } from "astro:content";

const Projects = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

const Posts = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    sortOrder: z.number(),
    publishDate: z.date(),
  }),
});

export const collections = {
  projects: Projects,
  posts: Posts,
};
