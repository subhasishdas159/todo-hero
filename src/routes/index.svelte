<script>
	import { todos } from '../stores';
	import Nav from '@comp/Nav.svelte';
	let newTodo;
	// $: console.log('$todos', $todos);
</script>

<div class="mt-6 mb-28 px-6">
	<div class="form-control">
		<form class="input-group w-full max-w-md mb-8 mx-auto">
			<input
				type="text"
				placeholder="add new todo"
				class="input input-bordered w-full focus:outline-none shadow focus:shadow-inner focus:ring-1"
				bind:value={newTodo}
			/>
			<button
				class="btn btn-square shadow"
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
				class={`card max-w-md w-full mx-auto bg-base-100 shadow mt-4 border-t ${
					todo.isDone && 'opacity-75'
				}`}
			>
				<div class="card-body">
					<div class="form-control">
						<label class="cursor-pointer label justify-start gap-4">
							<input
								type="checkbox"
								checked={todo.isDone}
								class="checkbox checkbox-primary"
								on:change={() => {
									const index = $todos.indexOf(
										$todos.filter((todoItem) => todoItem.id === todo.id)[0]
									);
									$todos[index].isDone = !todo.isDone;
								}}
							/>
							<span class={`label-text ${todo.isDone && 'line-through'}`}>{todo.text}</span>
						</label>
					</div>
					<div class="justify-end card-actions">
						<div
							class={`badge ${todo.isUrgent ? 'badge-error' : 'badge-outline'} cursor-pointer`}
							on:click={() => {
								const index = $todos.indexOf(
									$todos.filter((todoItem) => todoItem.id === todo.id)[0]
								);
								$todos[index].isUrgent = !todo.isUrgent;
							}}
						>
							isUrgent
						</div>
						<div
							class={`badge ${todo.isImportant ? 'badge-warning' : 'badge-outline'} cursor-pointer`}
							on:click={() => {
								const index = $todos.indexOf(
									$todos.filter((todoItem) => todoItem.id === todo.id)[0]
								);
								$todos[index].isImportant = !todo.isImportant;
							}}
						>
							imortant
						</div>
						<div
							class={`badge ${todo.isHard ? 'badge-info' : 'badge-outline'} cursor-pointer`}
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
