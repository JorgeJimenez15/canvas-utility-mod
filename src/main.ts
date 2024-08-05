import { mount } from 'svelte';

import App from './App.svelte';
import './app.css';

window.addEventListener('load', () => {
	mount(App, {
		target: document.body
	});
});
