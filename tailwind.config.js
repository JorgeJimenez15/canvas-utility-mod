import { scopedPreflightStyles, isolateInsideOfContainer } from 'tailwindcss-scoped-preflight';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
		scopedPreflightStyles({
			isolationStrategy: isolateInsideOfContainer('.twp')
		})
	]
};
