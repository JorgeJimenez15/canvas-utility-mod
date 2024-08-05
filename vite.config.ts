import { defineConfig } from 'vite';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
	plugins: [svelte(), cssInjectedByJsPlugin()],
	build: {
		lib: {
			entry: 'src/main.ts',
			name: 'canvas-utility-mod',
			formats: ['es']
		}
	}
});
