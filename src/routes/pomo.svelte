<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { todos } from '../stores';
	import Modal from '@ui/Modal.svelte';
	import { onMount } from 'svelte';
	import { prefetchRoutes } from '$app/navigation';

	onMount(() => {
		prefetchRoutes();
	});

	let noIdGoBack = false,
		urlIsOkay = false,
		wrongIdGoBack = false;

	$: console.log('$page.params.id', $page.url.searchParams.get('id'));

	if (browser) {
		if (!$page.url.searchParams.has('id')) {
			noIdGoBack = true;
		} else if (
			!$todos.filter((todoItem) => String(todoItem.id) === $page.url.searchParams.get('id')).length
		) {
			wrongIdGoBack = true;
		} else {
			urlIsOkay = true;
		}
	}
</script>

<div class="mx-auto h-6 w-6 mt-8" on:click={() => goto('/')}>
	<svg
		class="w-full h-full"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M10 19l-7-7m0 0l7-7m-7 7h18"
		/></svg
	>
</div>

{#if urlIsOkay}
	{$todos.filter((todoItem) => String(todoItem.id) === $page.url.searchParams.get('id'))[0]?.text}
{:else}
	Todo was selected incorrectly
{/if}

<Modal
	bind:show={noIdGoBack}
	onConfirm={() => goto('/')}
	error
	btnLabel="Go Back"
	header="No todo id in url"
	text="Please go to todos screen and select a todo"
/>
<Modal
	bind:show={wrongIdGoBack}
	onConfirm={() => goto('/')}
	error
	btnLabel="Go Back"
	header="Wrong todo id in url"
	text="Please go to todos screen and select a todo"
/>
