import type { Patch } from './index';

const patch: Patch = {
	name: 'Page blurred',
	description: 'Patches the EVT_PAGE_BLURRED event that fires when the user leaves the window',
	search: /this\.bind\(window,"blur",function\(\)\{[^{}]*\{[^{}]*\}[^{}]*\},\{[^}]*\}\)/,
	replace: 'undefined'
};

export default patch;
