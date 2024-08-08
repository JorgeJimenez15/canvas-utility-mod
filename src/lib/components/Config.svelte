<script lang="ts">
	function resetHotkeys() {
		confirm('Are you sure you want to reset the hotkeys to default values?');
	}
</script>

<div>
	<h1 class="mb-4 text-xl font-bold text-gray-700">Hotkeys</h1>

	<button
		class="bg-red-400 px-4 py-2 text-sm text-gray-100 transition-colors duration-500 hover:bg-red-500"
		onclick={resetHotkeys}>Reset</button
	>
</div>
