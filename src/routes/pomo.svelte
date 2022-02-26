<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { todos } from '../stores';
	import Modal from '@comp/Modal.svelte';

	let noIdGoBack = false,
		wrongIdGoBack = false;

	$: console.log('$page.params.id', $page.url.searchParams.get('id'));

	if (browser) {
		if (!$page.url.searchParams.has('id')) {
			noIdGoBack = true;
		}
		if (
			!$todos.filter((todoItem) => String(todoItem.id) === $page.url.searchParams.get('id')).length
		) {
			wrongIdGoBack = true;
		}
	}
</script>

pomo screen

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
