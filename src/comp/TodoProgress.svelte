<script>
	import { todos } from '../stores';

	const markAll = () => {
		$todos.forEach((todoItem) => (todoItem.isDone = true));
		$todos = $todos
	};
</script>

<div class="max-w-md mx-auto -mt-2 mb-2">
	{#if $todos.length}
		<div class="flex flex-row justify-center items-center gap-8">
			<p class="text-center">
				{$todos.filter((todoItem) => todoItem.isDone).length}/{$todos.length} Done
			</p>
			<button on:click={markAll} class="btn btn-sm btn-secondary">Mark All Done</button>
		</div>
		<progress
			class="progress progress-success w-full"
			value={($todos.filter((todoItem) => todoItem.isDone).length * 100) / $todos.length}
			max="100"
		/>
	{/if}
</div>
