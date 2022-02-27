<script>
	import { todos } from '../stores';
	import { goto } from '$app/navigation';
	import TodoInput from '@comp/TodoInput.svelte';
	import TodoProgress from '@comp/TodoProgress.svelte';
	import TodoItem from '@comp/TodoItem.svelte';
	// import Stat from '@comp/Stat.svelte';

	const moveTodo = (todo, direction) => {
		console.log('direction', todo);
		if (direction === 'down' && $todos.indexOf(todo) + 1 !== $todos.length) {
			const nextValue = $todos[$todos.indexOf(todo) + 1];
			$todos[$todos.indexOf(todo) + 1] = todo;
			$todos[$todos.indexOf(todo)] = nextValue;
		}
		if (direction === 'up' && $todos.indexOf(todo) !== 0) {
			const prevValue = $todos[$todos.indexOf(todo) - 1];
			$todos[$todos.indexOf(todo) - 1] = todo;
			$todos[$todos.indexOf(todo) + 1] = prevValue;
		}
	};
</script>

<div class="mt-6 px-6 mb-20">
	<TodoInput />
	<TodoProgress />

	<div class="flex flex-row flex-wrap justify-start max-w-5xl mx-auto">
		{#each $todos as todo (todo.id)}
			<TodoItem {todo} {moveTodo} />
		{/each}
	</div>
</div>
