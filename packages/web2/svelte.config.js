import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import pkg from './package.json' with { type: 'json' }

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		version: {
			name: pkg.version,
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
		}),
		paths: {
			base: '/ac6_assemble_tool',
		},
		alias: {
			'$/*': './*',
		},
	}
};

export default config;
