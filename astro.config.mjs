// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

import remarkCallout from '@r4ai/remark-callout'
import brainDbAstro, { generateSlug } from '@braindb/astro'
import pagefind from 'astro-pagefind'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	base: '/komit-atau-tidur/',
	trailingSlash: 'always',

	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }],
		service: passthroughImageService()
	},
	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [
		brainDbAstro({
			root: 'src/content/Vault',
			source: '/',
			remarkWikiLink: true,
			git: false,
			url: (filePath, frontmatter) => {
				const slug = frontmatter.slug ? String(frontmatter.slug) : generateSlug(filePath)
				const cleanSlug = slug.replace(/^\/+/, '')
				return `/komit-atau-tidur/${cleanSlug}/`
			}
		}),
		icon(),
		pagefind(),
		sitemap()
	],

	markdown: {
		remarkPlugins: [remarkCallout],
		shikiConfig: {
			theme: 'gruvbox-dark-hard'
		}
	}
})
