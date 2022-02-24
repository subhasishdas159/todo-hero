<script>
	import { todos } from '../stores';
	import Nav from '@comp/Nav.svelte';
	import { onMount } from 'svelte';

	let newTodo,
		inputPlaceholder = 'Enter your todo';
	const sampleTodos = [
		'Ex. Make vanilla pudding...',
		'Ex. Buy a horse...',
		'Ex. Invite someone at office...',
		'Ex. Race with a turtle...',
		'Ex. Forget to breathe...',
		'Ex. Dance hip hop with music...',
		'Ex. Wear a tie...',
		'Ex. Go for a swim...',
		'Ex. Code a website...',
		'Ex. Imitate a parrot...',
		'Ex. Say yes to a cat...',
		"Ex. Snatch away a kid's toy..."
	];

	onMount(() => {
		let placeholderInterval = setInterval(() => {
			if (inputPlaceholder === 'Enter your todo') {
				inputPlaceholder = sampleTodos[Math.floor(Math.random() * sampleTodos.length)];
			} else {
				inputPlaceholder = 'Enter your todo';
			}
		}, 2000);
		return () => clearInterval(placeholderInterval);
	});

	const moveTodo = (todo, direction) => {
		console.log('direction', todo);
		if (direction === 'down' && $todos.indexOf(todo) + 1 !== $todos.length) {
			const nextValue = $todos[$todos.indexOf(todo) + 1];
			$todos[$todos.indexOf(todo) + 1] = todo;
			$todos[$todos.indexOf(todo)] = nextValue;
		} else {
			const prevValue = $todos[$todos.indexOf(todo) - 1];
			$todos[$todos.indexOf(todo) - 1] = todo;
			$todos[$todos.indexOf(todo)] = prevValue;
		}
	};
</script>

<div class="mt-6 mb-28 px-6">
	<div class="form-control">
		<form class="input-group w-full max-w-md mb-6 mx-auto">
			<input
				type="text"
				placeholder={inputPlaceholder}
				class="input input-bordered w-full focus:outline-none shadow focus:shadow-inner focus:ring-1"
				bind:value={newTodo}
			/>
			<button
				class="btn btn-square shadow btn-primary"
				type="submit"
				on:click|preventDefault={() => {
					if (!newTodo) return;
					$todos = [
						{
							id: Date.now(),
							text: newTodo,
							isUrgent: false,
							isImportant: false,
							isHard: false,
							isDone: false
						},
						...$todos
					];
					newTodo = '';
				}}
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/></svg
				>
			</button>
		</form>
	</div>

	<div class="flex flex-row flex-wrap justify-start max-w-5xl mx-auto">
		{#each $todos as todo (todo.id)}
			<div
				class={`card max-w-md w-full mx-auto bg-base-100 shadow mt-2 border-t ${
					todo.isDone && 'opacity-70'
				}`}
			>
				<div class="card-body pb-4 pt-2 pl-3 pr-4">
					<div class="form-control">
						<div
							class="absolute top-2 right-4 p-2 z-20"
							on:click|stopPropagation={() => {
								console.log('djfkgl');
							}}
						>
							<svg
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/></svg
							>
						</div>
						<label class="cursor-pointer label justify-start gap-3">
							<input
								type="checkbox"
								checked={todo.isDone}
								class="checkbox checkbox-primary block w-6 h-6 flex-shrink-0"
								on:change={() => (todo.isDone = !todo.isDone)}
							/>
							<span class={`label-text ${todo.isDone && 'line-through'}`}>{todo.text}</span>
						</label>
					</div>
					<div class="justify-end card-actions mt-4">
						<div class="btn-group mr-2">
							<div
								class="btn btn-sm btn-secondary px-1 mobileOnly:hover:bg-secondary mobileOnly:hover:border-secondary"
								on:click={() => moveTodo(todo, 'up')}
							>
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
										clip-rule="evenodd"
									/></svg
								>
							</div>
							<div
								class="btn btn-sm btn-secondary px-1 mobileOnly:hover:bg-secondary mobileOnly:hover:border-secondary"
								on:click={() => moveTodo(todo, 'down')}
							>
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
										clip-rule="evenodd"
									/></svg
								>
							</div>
						</div>
						<div
							class={`badge ${
								todo.isUrgent ? 'badge-error' : 'badge-outline'
							} cursor-pointer py-4 px-2`}
							on:click={() => {
								const index = $todos.indexOf(
									$todos.filter((todoItem) => todoItem.id === todo.id)[0]
								);
								$todos[index].isUrgent = !todo.isUrgent;
							}}
						>
							now!
						</div>
						<div
							class={`badge ${
								todo.isImportant ? 'badge-warning' : 'badge-outline'
							} cursor-pointer py-4 px-2`}
							on:click={() => {
								const index = $todos.indexOf(
									$todos.filter((todoItem) => todoItem.id === todo.id)[0]
								);
								$todos[index].isImportant = !todo.isImportant;
							}}
						>
							imp
						</div>
						<div
							class={`badge ${
								todo.isHard ? 'badge-info' : 'badge-outline'
							} cursor-pointer py-4 px-2`}
							on:click={() => {
								const index = $todos.indexOf(
									$todos.filter((todoItem) => todoItem.id === todo.id)[0]
								);
								$todos[index].isHard = !todo.isHard;
							}}
						>
							hard
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<Nav />
