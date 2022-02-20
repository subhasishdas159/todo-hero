<script>
	import '../app.css';
	import Nav from '@comp/Nav.svelte';
</script>

<div class="bg-gray-100 min-h-screen">
	<div class="fixed bottom-8 left-1/2 -translate-x-1/2 shadow-md border-top">
		<Nav />
	</div>
	<slot />
</div>
