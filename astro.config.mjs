// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

import remarkCallout from '@r4ai/remark-callout'
import brainDbAstro, { generateSlug } from '@braindb/astro'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	base: '/',
	trailingSlash: 'always',

	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [
		brainDbAstro({
			root: 'src/content/Vault',
			source: '/komit-atau-tidur/',
			remarkWikiLink: true,
			git: false,
			url: (filePath, frontmatter) => {
				const slug = frontmatter.slug ? String(frontmatter.slug) : generateSlug(filePath)
				const cleanSlug = slug.replace(/^\/+/, '')
				return `/komit-atau-tidur/${cleanSlug}/`
			}
		}),
		icon()
	],

	markdown: {
		remarkPlugins: [remarkCallout],
		shikiConfig: {
			theme: 'gruvbox-dark-hard'
		}
	}
})
