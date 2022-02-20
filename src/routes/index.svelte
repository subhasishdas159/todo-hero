<script>
	import { todos } from '../stores';
	let newTodo;
	$: console.log('$todos', $todos);
</script>

<div class="max-w-6xl mx-auto">
	<div class="container mx-auto px-6">
		<div class="mt-6 mb-28">
			<div class="form-control">
				<form class="input-group w-full max-w-md mb-8">
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
								{ id: Date.now(), text: newTodo, urgent: false, important: false, hard: false },
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
			{#each $todos as todo (todo.id)}
				<div class="card max-w-md w-full bg-base-100 shadow mt-4 border-t">
					<div class="card-body">
						<p>{todo.text}</p>
						<div class="justify-end card-actions">
							<div
								class={`badge ${todo.urgent ? 'badge-error' : 'badge-outline'}`}
								on:click={() => {
									const index = $todos.indexOf(
										$todos.filter((todoItem) => todoItem.id === todo.id)[0]
									);
									$todos[index].urgent = !todo.urgent;
								}}
							>
								Urgent
							</div>
							<div
								class={`badge ${todo.important ? 'badge-warning' : 'badge-outline'}`}
								on:click={() => {
									const index = $todos.indexOf(
										$todos.filter((todoItem) => todoItem.id === todo.id)[0]
									);
									$todos[index].important = !todo.important;
								}}
							>
								imortant
							</div>
							<div
								class={`badge ${todo.hard ? 'badge-info' : 'badge-outline'}`}
								on:click={() => {
									const index = $todos.indexOf(
										$todos.filter((todoItem) => todoItem.id === todo.id)[0]
									);
									$todos[index].hard = !todo.hard;
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
</div>
