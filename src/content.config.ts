import { defineCollection } from "astro:content";
import { z } from "astro:schema";
import { glob } from "astro/loaders";

const services = defineCollection({
  // Cambiamos servicios -> services
  loader: glob({ pattern: "*.md", base: "./src/content/services" }), // Cambiamos la carpeta base
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { services }; // Exportamos como services
