import { z, defineCollection } from "astro:content";

const Projects = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      projectImage1md: z.object({
        src: image(), // Image source can be URL or local file path
        alt: z.string(), // Alt text for the image
      }),
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
