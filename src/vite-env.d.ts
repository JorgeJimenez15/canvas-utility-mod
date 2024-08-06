/// <reference types="svelte" />
/// <reference types="vite/client" />

declare const VERSION: string;

interface Window {
	ENV: {
		current_user: {
			display_name: string;
			avatar_image_url: string;
		};
	};
}
