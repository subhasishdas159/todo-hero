<script>
	import { onMount } from 'svelte';
	import { prefetchRoutes } from '$app/navigation';

	onMount(() => {
		prefetchRoutes();
	});
</script>

<div class="text-3xl text-center mt-8">Hello Stat screen</div>
