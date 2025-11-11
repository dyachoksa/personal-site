import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        summary: z.string(),
        date: z.iso.date(),
        tags: z.string(),
      }),
    }),

    galleries: defineCollection({
      type: "page",
      source: "galleries/**/*.md",
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        date: z.iso.date(),
        mainImage: z.string(),
        images: z.array(z.string()),
      }),
    }),

    projects: defineCollection({
      type: "data",
      source: "projects/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.url(),
        image: z.string(),
        year: z.number(),
        tags: z.array(z.string()),
      }),
    }),
  },
});
