// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import remarkCallout from '@r4ai/remark-callout'
import pagefind from 'astro-pagefind'

import sitemap from '@astrojs/sitemap'
import brainDbAstro, { generateSlug } from '@braindb/astro'
import remarkRemoveHeading from './src/assets/utils/remarkH1'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	base: '/komit-atau-tidur/',
	build: {
		inlineStylesheets: 'never'
	},
	integrations: [
		brainDbAstro({
			root: 'src/content/docs',
			source: '/',
			remarkWikiLink: true,
			git: false,
			url: (filePath, frontmatter) => {
				const slug = frontmatter.slug ? String(frontmatter.slug) : generateSlug(filePath)
				const cleanSlug = slug.replace(/^\/+/, '')
				return `/komit-atau-tidur/${cleanSlug}/`
			}
		}),
		icon({ iconDir: 'src/assets/icons' }),
		pagefind(),
		sitemap()
	],
	markdown: {
		remarkPlugins: [remarkCallout, [remarkRemoveHeading, { depth: 1 }]]
	},
	vite: {
		plugins: [tailwindcss()]
	}
})
