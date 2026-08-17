import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    category: z.string(),

    status: z.enum([
      "active",
      "stable",
      "development",
      "archived",
    ]),

    technologies: z.array(z.string()),

    featured: z.boolean().default(false),

    date: z.coerce.date(),

    image: z.string().optional(),

    github: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};