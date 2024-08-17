<script lang="ts">
	import Header from './lib/components/Header.svelte';
	import Main from './lib/components/Main.svelte';
	import Footer from './lib/components/Footer.svelte';

	import type { Config } from './lib/functions/config';
	import getConfig from './lib/functions/utils/getConfig';

	let config = $state<Config>(getConfig());
	let showOverlay = $state<boolean>(false);

	window.addEventListener('keydown', ({ key, altKey }): void => {
		if (!altKey) return;

		switch (key.toUpperCase()) {
			case config.keyMapping.toggleOverlay:
				showOverlay = !showOverlay;
				break;
		}
	});
</script>

<div
	class="twp fixed inset-0 z-[200] h-screen w-screen place-items-center bg-gray-900 bg-opacity-50 transition-all {showOverlay
		? 'grid'
		: 'hidden'}"
>
	<div class="w-full max-w-3xl select-none space-y-4 bg-white text-gray-900 antialiased">
		<Header />
		<Main {config} />
		<Footer />
	</div>
</div>
