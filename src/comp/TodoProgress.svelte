<script>
	import { todos } from '../stores';
</script>

<div class="max-w-md mx-auto -mt-2 mb-2">
	{#if $todos.length}
		<p class="text-center">
			{$todos.filter((todoItem) => todoItem.isDone).length}/{$todos.length} Done
		</p>
		<progress
			class="progress progress-success w-full"
			value={($todos.filter((todoItem) => todoItem.isDone).length * 100) / $todos.length}
			max="100"
		/>
	{/if}
</div>
