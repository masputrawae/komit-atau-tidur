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
});

const historyOnGit = defineCollection({
	loader: file('src/content/data/historyOnGit.json'),
	schema: z.array(
		z.object({
			hash: z.string(),
			date: z.coerce.date(),
			message: z.string(),
			author: z.object({
				name: z.string(),
				email: z.string().email(),
			}),
			committer: z.object({
				name: z.string(),
				email: z.string().email(),
			}),
			diff: z.string()
		})
	)
})

export const collections = { docs, historyOnGit }
