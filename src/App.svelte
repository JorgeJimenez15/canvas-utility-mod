<script lang="ts">
	import Header from './lib/components/Header.svelte';
	import Main from './lib/components/Main.svelte';
	import Footer from './lib/components/Footer.svelte';

	let showOverlay = $state(false);

	window.addEventListener('keydown', ({ key, altKey }): void => {
		if (!altKey || key !== 'r') return;
		showOverlay = !showOverlay;
	});
</script>

<div
	class="twp fixed inset-0 z-[200] h-screen w-screen place-items-center bg-gray-900 bg-opacity-50 transition-all duration-500 {showOverlay
		? 'grid'
		: 'hidden'}"
>
	<div class="w-full max-w-3xl select-none space-y-4 bg-white text-gray-900 antialiased">
		<Header />
		<Main />
		<Footer />
	</div>
</div>
