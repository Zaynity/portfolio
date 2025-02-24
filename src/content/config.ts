// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    type: z.enum(['competences', 'realisations']),
  }),
});

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    imageUrl: z.string().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectCollection,
  experiences: experienceCollection,
};
