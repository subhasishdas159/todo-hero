<script>
	import { todos } from '../stores';
	import Modal from '@ui/Modal.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let askToDelete = false;
	let askToSort = false;

	console.log('$page.url.pathname', $page.url.pathname);

	const onDelete = () => {
		const notDone = $todos.filter((todoItem) => !todoItem.isDone);
		$todos = notDone;
		askToDelete = false;
	};

	const onSort = () => {
		const hard = $todos.filter((todoItem) => todoItem.isHard);
		const notHard = $todos.filter((todoItem) => !todoItem.isHard);
		const important = [...hard, ...notHard].filter((todoItem) => todoItem.isImportant);
		const notImportant = [...hard, ...notHard].filter((todoItem) => !todoItem.isImportant);
		const urgent = [...important, ...notImportant].filter((todoItem) => todoItem.isUrgent);
		const notUrgent = [...important, ...notImportant].filter((todoItem) => !todoItem.isUrgent);
		const done = [...urgent, ...notUrgent].filter((todoItem) => todoItem.isDone);
		const notDone = [...urgent, ...notUrgent].filter((todoItem) => !todoItem.isDone);
		$todos = [...notDone, ...done];
		askToSort = false;
	};
</script>

<ul
	class="menu bg-white menu-horizontal rounded-box shadow-lg border fixed bottom-4 left-1/2 -translate-x-1/2 z-[99]"
>
	<li
		on:click={() => {
			if ($page.url.pathname !== '/') {
				goto('/');
			} else {
				goto('/stat');
			}
		}}
	>
		<span
			class="active:bg-success hover:bg-blue-100 text-success hover:text-success active:text-white mobileOnly:hover:bg-white mobileOnly text-success:hover:text-success mobileOnly:focus:bg-blue-300 mobileOnly:active:bg-success mobileOnly:active:text-white"
		>
			{#if $page.url.pathname === '/'}
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
					/></svg
				>
			{:else}
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
					/></svg
				>
			{/if}
		</span>
	</li>
	<li on:click={() => (askToSort = true)}>
		<span
			class="active:bg-info hover:bg-blue-100 text-info hover:text-info active:text-white mobileOnly:hover:bg-white mobileOnly text-info:hover:text-info mobileOnly:focus:bg-blue-300 mobileOnly:active:bg-info mobileOnly:active:text-white"
		>
			<svg
				class="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
				/></svg
			>
		</span>
	</li>
	<li on:click={() => (askToDelete = true)}>
		<span
			class="active:bg-error hover:bg-red-100 text-error hover:text-error active:text-white mobileOnly:hover:bg-white mobileOnly text-error:hover:text-error mobileOnly:focus:bg-red-300 mobileOnly:active:bg-error mobileOnly:active:text-white"
		>
			<svg
				class="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</span>
	</li>
</ul>

<Modal
	bind:show={askToDelete}
	onConfirm={onDelete}
	error
	btnLabel="Delete"
	header="Delete Completed?"
	text="Clicking delete will delete all completed todos. Continue?"
/>
<Modal
	bind:show={askToSort}
	onConfirm={onSort}
	btnLabel="Sort"
	header="Sort Todos?"
	text="Clicking sort will sort all todos automatically based on priorities specified. Continue?"
/>
