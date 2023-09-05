import { z, defineCollection } from "astro:content";

const Projects = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      tags: z.array(z.string()),
      projectDescription: z.string().optional(),
      featureListTextMd1: z.string().optional(),
      featureListTextMd2: z.string().optional(),
      featureListTextMd3: z.string().optional(),
      featureListTextMd4: z.string().optional(),
      featureListTextMd5: z.string().optional(),
      featureListTextMd6: z.string().optional(),
      projectImage1md: z
        .object({
          src: image(), // Image source can be URL or local file path
          alt: z.string(), // Alt text for the image
        })
        .optional(),
      projectImage2md: z
        .object({
          src: image(), // Image source can be URL or local file path
          alt: z.string(), // Alt text for the image
        })
        .optional(),
      projectImage3md: z
        .object({
          src: image(), // Image source can be URL or local file path
          alt: z.string(), // Alt text for the image
        })
        .optional(),
      projectImage4md: z
        .object({
          src: image(), // Image source can be URL or local file path
          alt: z.string(), // Alt text for the image
        })
        .optional(),
      projectImage5md: z
        .object({
          src: image(), // Image source can be URL or local file path
          alt: z.string(), // Alt text for the image
        })
        .optional(),
      projectImage6md: z
        .object({
          src: image(), // Image source can be URL or local file path
          alt: z.string(), // Alt text for the image
        })
        .optional(),
      projectVideo: z
        .object({
          src: z.string(),
        })
        .optional(),
      subtitle1: z.string().optional(),
      description1: z.string().optional(),
      subtitle2: z.string().optional(),
      description2: z.string().optional(),
      subtitle3: z.string().optional(),
      description3: z.string().optional(),
      subtitle4: z.string().optional(),
      description4: z.string().optional(),
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
