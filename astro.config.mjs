// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import remarkCallout from '@r4ai/remark-callout'
import pagefind from 'astro-pagefind'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://masputrawae.github.io',
  base: '/komit-atau-tidur/',
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [icon({iconDir: 'src/assets/icons'}), pagefind(), sitemap()],

  markdown: {
    remarkPlugins: [
      remarkCallout,
    ],
  },
})