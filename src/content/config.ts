import { z, defineCollection } from "astro:content";

const Projects = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      isImg1Visible: z.boolean().optional(),
      title: z.string(),
      tags: z.array(z.string()),
      projectBlurb: z.string().optional(),
      projectDescription: z.string().optional(),
      featureListTextMd1: z.string().optional(),
      featureListTextMd2: z.string().optional(),
      featureListTextMd3: z.string().optional(),
      featureListTextMd4: z.string().optional(),
      featureListTextMd5: z.string().optional(),
      featureListTextMd6: z.string().optional(),
      projectImage1md: image().optional(),
      projectImage1mdalt: z.string().optional(),
      projectImage2md: image().optional(),
      projectImage2mdalt: z.string().optional(),
      projectImage3md: image().optional(),
      projectImage3mdalt: z.string().optional(),
      projectImage4md: image().optional(),
      projectImage4mdalt: z.string().optional(),
      projectImage5md: image().optional(),
      projectImage5mdalt: z.string().optional(),
      projectImage6md: image().optional(),
      projectImage6mdalt: z.string().optional(),

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
