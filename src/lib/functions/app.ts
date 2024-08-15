import { mount } from 'svelte';

import App from '../../App.svelte';
import '../../app.css';

const app = (): void => {
	window.addEventListener('load', (): void => {
		mount(App, {
			target: document.body
		});
	});
};

export default app;
