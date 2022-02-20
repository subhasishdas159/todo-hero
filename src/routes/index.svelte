<script>
	import { todos } from '../stores';
	let newTodo;
	$: console.log('$todos', $todos);
</script>

<div class="max-w-6xl mx-auto">
	<div class="container mx-auto px-6">
		<div class="mt-6">
			<div class="form-control">
				<form class="input-group">
					<input
						type="text"
						placeholder="add new todo"
						class="input input-bordered"
						bind:value={newTodo}
					/>
					<button
						class="btn btn-square"
						type="submit"
						on:click|preventDefault={() =>
							($todos = [{ id: Date.now(), text: newTodo }, ...$todos])}
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
				{todo.text}
			{/each}
		</div>
	</div>
</div>
