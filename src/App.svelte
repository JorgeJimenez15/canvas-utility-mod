<script lang="ts">
	import Header from './lib/components/Header.svelte';
	import Footer from './lib/components/Footer.svelte';
</script>

<div
	class="fixed inset-0 z-[200] grid h-screen w-screen place-items-center bg-gray-900 bg-opacity-50"
>
	<div class="max-w-3xl select-none space-y-4 bg-white text-gray-900 antialiased">
		<Header />
		<main>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestiae ipsa ex voluptatem
			rem vero, enim voluptatibus nobis aliquam fugiat tenetur voluptates hic. Explicabo rem
			inventore voluptas, error non sed!
		</main>
		<Footer />
	</div>
</div>
