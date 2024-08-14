import Toastify from 'toastify-js';
import { mount } from 'svelte';

import initialize from './lib/functions/patch';
import App from './App.svelte';
import './app.css';

initialize();

window.addEventListener('load', () => {
	mount(App, {
		target: document.body
	});

	Toastify({
		text: 'Welcome to Canvas Utility Mod',
		gravity: 'bottom',
		position: 'right',
		className: 'twp'
	}).showToast();
});
