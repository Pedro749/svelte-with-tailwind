import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		adapter: adapter()
	},

	preprocess: [vitePreprocess({})]
};

export default config;
