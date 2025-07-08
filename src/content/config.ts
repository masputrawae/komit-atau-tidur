import { z, defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'

import { SIDEBAR } from '../sidebar.config.ts';

const getEnum = SIDEBAR.map(item => item.id) as [string, ...string[]];

const docs = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/content/docs' }),
	schema: z.object({
		id: z.string().min(14),
		title: z.string(),
		created: z.coerce.date(),

		// Optional
		updated: z.coerce.date().optional(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
    author: z.string().optional(),

		// Optional Sidebar
		sidebar: z.object({
			order: z.number(),
			group: z.enum(getEnum)
		}).optional()
	})
})

export const collections = { docs }
