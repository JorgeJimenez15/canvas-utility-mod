<script lang="ts">
	import Home from './sections/Home.svelte';
	import Quiz from './sections/Quiz.svelte';
	import Patch from './sections/Patch.svelte';
	import Config from './sections/Config.svelte';
	import sections from '../data/sections.json';

	let currentSection = $state<string>('home');
	const updateSection = (id: string): void => {
		currentSection = id;
	};
</script>

<main class="mx-4 flex h-64 flex-col">
	<ul class="mb-4 flex gap-2">
		{#each sections as section}
			<li>
				<button
					type="button"
					class="w-16 border-b-2 pb-2 text-red-300 transition-colors *:mx-auto *:size-6 hover:text-red-400 {currentSection ===
					section.id
						? 'border-red-300 hover:border-red-400'
						: 'border-transparent'}"
					onclick={() => updateSection(section.id)}>{@html section.icon}</button
				>
			</li>
		{/each}
	</ul>

	<div class="grow space-y-4 overflow-y-auto text-gray-700">
		{#if currentSection === 'home'}
			<Home />
		{:else if currentSection === 'quiz'}
			<Quiz />
		{:else if currentSection === 'patch'}
			<Patch />
		{:else if currentSection === 'config'}
			<Config />
		{/if}
	</div>
</main>
