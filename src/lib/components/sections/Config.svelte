<script lang="ts"></script>

<div class="grid grid-cols-2 gap-4 pr-4">
	<div>
		<h1 class="mb-3 text-xl font-bold">Hotkeys</h1>
	</div>

	<div>
		<h1 class="mb-3 text-xl font-bold">Notifications</h1>

		<ul class="space-y-2">
			<li class="text-red-400 transition-colors hover:text-red-500">Messages</li>
			<li class="text-red-400 transition-colors hover:text-red-500">Server messages</li>
			<li class="text-red-400 transition-colors hover:text-red-500">Patches applied</li>
		</ul>
	</div>

	<div>
		<h1 class="mb-3 text-xl font-bold">Connectivity</h1>

		<ul class="space-y-2">
			<li>
				<h2 class="mb-1 font-semibold">Server URL</h2>
				<div class="flex w-full gap-2">
					<input type="text" class="grow bg-gray-100 px-4 py-2 text-sm" />
					<button
						type="button"
						class="bg-red-400 px-4 py-2 text-sm text-gray-100 transition-colors hover:bg-red-500"
						>Update</button
					>
				</div>
				<span class="text-xs">Only use servers you trust. Your canvas session will be shared.</span>
			</li>
		</ul>
	</div>

	<div>
		<h1 class="mb-3 text-xl font-bold">Global</h1>

		<button
			type="button"
			class="w-full bg-red-400 px-4 py-2 text-sm text-gray-100 transition-colors hover:bg-red-500"
			onclick={() => {}}>Restore default settings</button
		>
	</div>
</div>
