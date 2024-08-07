import { defineConfig, type Plugin } from 'vite';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

function tampermonkey(): Plugin {
	const headers = [
		'// ==UserScript==',
		'// @name         Canvas Utility Mod',
		'// @namespace    https://github.com/JorgeJimenez15/canvas-utility-mod',
		`// @version      ${process.env.npm_package_version}`,
		'// @description  Work-in-progress utility mod for Canvas LMS',
		'// @grant        none',
		'// @author       Jorge Jiménez',
		'// @match        https://canvas.instructure.com/*',
		'// @run-at       document-start',
		'// ==/UserScript=='
	].join('\n');
	const patch = (code: string) => `${headers}\n\n(function(window){\n${code}})(window);`;

	return {
		name: 'tampermonkey',
		apply: 'build',
		enforce: 'post',
		generateBundle(_, bundle) {
			for (const file in bundle) {
				if (bundle[file].type === 'chunk') bundle[file].code = patch(bundle[file].code);
			}
		}
	};
}

export default defineConfig({
	define: {
		VERSION: `"${process.env.npm_package_version}"`
	},
	plugins: [svelte(), cssInjectedByJsPlugin(), tampermonkey()],
	build: {
		lib: {
			entry: 'src/main.ts',
			formats: ['es']
		}
	}
});
