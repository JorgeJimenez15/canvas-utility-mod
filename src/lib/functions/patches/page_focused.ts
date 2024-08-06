import type { Patch } from './index';

const patch: Patch = {
	name: 'Page focused',
	description: 'Patches the EVT_PAGE_FOCUSED event that fires when the user returns to the window',
	search: /this\.bind\(window,"focus",function\(\)\{[^}]*\},\{[^}]*\}\)/,
	replace: 'undefined'
};

export default patch;
