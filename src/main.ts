import patch from './lib/functions/patch';
import { mount } from 'svelte';

import App from './App.svelte';
import './app.css';

patch();

window.addEventListener('load', () => {
	mount(App, {
		target: document.body
	});
});
