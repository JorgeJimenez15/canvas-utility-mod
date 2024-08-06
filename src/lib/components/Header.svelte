<script lang="ts">
	const { display_name, avatar_image_url } = window.ENV.current_user;
</script>

<header class="flex h-16 items-center justify-between bg-red-400 text-gray-100">
	<h1 class="ml-4 text-2xl font-bold">Canvas Utility Mod</h1>
	<div class="pointer-events-none flex items-center gap-4">
		<div>
			<span class="font-semibold">{display_name}</span>
		</div>
		<img src={avatar_image_url} alt="Avatar" class="size-16 bg-white" />
	</div>
</header>
