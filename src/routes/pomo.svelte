<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { todos } from '../stores';
	import Modal from '@ui/Modal.svelte';
	import { onMount } from 'svelte';
	import { prefetchRoutes } from '$app/navigation';

	const WORK_TIME = 25 * 60;
	const BREAK_TIME = 5 * 60;

	onMount(() => {
		prefetchRoutes();
	});

	let noIdGoBack = false,
		urlIsOkay = false,
		timeRemaining = null,
		currentTimer = WORK_TIME,
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

	let pomoInterval;
	function startTimer(duration) {
		var timer = duration,
			minutes,
			seconds;
		pomoInterval = setInterval(function () {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;

			timeRemaining = minutes + ':' + seconds;

			if (--timer < 0) {
				if (currentTimer === WORK_TIME) {
					timer = BREAK_TIME;
					currentTimer = BREAK_TIME;
				} else {
					timer = WORK_TIME;
					currentTimer = WORK_TIME;
				}
				// clearInterval(pomoInterval);
			}
		}, 1000);
	}

	const stopTimer = () => {
		timeRemaining = false;
		clearInterval(pomoInterval);
	};

	$: console.log('timeRemaining', timeRemaining);
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
	<div class="mx-6">
		<div class="bg-white max-w-xl mx-auto container rounded-box shadow-md px-4 py-6 text-center">
			<h3 class="text-3xl text-blue-700">
				{$todos.filter((todoItem) => String(todoItem.id) === $page.url.searchParams.get('id'))[0]
					?.text}
			</h3>
			<div class="mt-8">
				{#if timeRemaining === null}
					<p>Not started yet</p>
				{:else if timeRemaining === false}
					<p>Stopped</p>
				{:else}
					{timeRemaining}
				{/if}
			</div>
			<div class="flex justify-center">
				<button
					class="btn btn-primary mt-8 mobileOnly:hover:bg-primary"
					on:click={() => {
						if (timeRemaining !== null && timeRemaining !== false) {
							stopTimer();
						} else {
							startTimer(WORK_TIME);
						}
					}}>{timeRemaining !== null && timeRemaining !== false ? 'Stop' : 'Start'}</button
				>
			</div>
		</div>
	</div>
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
