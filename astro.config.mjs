// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import remarkCallout from '@r4ai/remark-callout'
import pagefind from 'astro-pagefind'

// https://astro.build/config
export default defineConfig({
  site: 'https://masputrawae.github.io',
  base: '/GASPOLL/',
	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [icon({iconDir: 'src/assets/icons'}, pagefind())],

  markdown: {
    remarkPlugins: [
      remarkCallout,
    ],
  },
})
