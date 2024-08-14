<script lang="ts">
	import list from '../../functions/patches';
</script>

<h1 class="mb-4 text-xl font-bold text-gray-700">{list.length} patches loaded</h1>

<ol class="list-decimal space-y-2 pl-6">
	{#each list as patch}
		<li>
			<div>
				<h2 class="font-semibold text-gray-700">{patch.name}</h2>
				<p class="text-gray-500">{patch.description}</p>
			</div>
		</li>
	{/each}
</ol>
