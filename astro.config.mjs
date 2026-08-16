// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://migapanthis.github.io',
	base: '/emilia-travel',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Inter',
			cssVariable: '--font-inter',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/inter-variable.woff2'],
						weight: '100 900',
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/inter-italic-variable.woff2'],
						weight: '100 900',
						style: 'italic',
						display: 'swap',
					},
				],
			},
		},
	],
});
