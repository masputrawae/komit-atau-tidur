// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

import remarkCallout from '@r4ai/remark-callout'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	base: '/',
	trailingSlash: 'always',

	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [icon()],

	markdown: {
		remarkPlugins: [remarkCallout],
		shikiConfig: {
			theme: 'gruvbox-dark-hard'
		}
	}
})
