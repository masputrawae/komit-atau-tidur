import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const vault = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/Vault' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),

    description: z.string().optional(),
    image: z.string().optional(),
    cover: z.string().optional(),
    type: z.enum(['series', 'publish']).optional(),

    update: z.coerce.date().optional(),
  }),
})

export const collections = { vault }
