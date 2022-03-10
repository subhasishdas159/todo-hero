<script>
	import { todos } from '../stores';
	import { goto } from '$app/navigation';

	export let todo = {},
		moveTodo;
</script>

<div
	class={`card max-w-md w-full mx-auto bg-base-100 shadow mt-1 border-t ${
		todo.isDone && 'opacity-70'
	}`}
>
	<div class="card-body pb-3 pt-1 pl-2 pr-4">
		<div class="form-control">
			<div
				class="absolute top-1 right-1 p-0 z-20 text-success"
				on:click|stopPropagation={() => {
					goto(`/pomo?id=${todo.id}`);
				}}
			>
				<svg
					class="w-8 h-8"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
			<label class="cursor-pointer label justify-start gap-3">
				<input
					type="checkbox"
					checked={todo.isDone}
					class="checkbox checkbox-primary block w-6 h-6 flex-shrink-0"
					on:change={() => {
						const index = $todos.indexOf($todos.filter((todoItem) => todoItem.id === todo.id)[0]);
						$todos[index].isDone = !todo.isDone;
					}}
				/>
				<span class={`label-text ${todo.isDone && 'line-through'} mr-6`}>{todo.text}</span>
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
				class={`badge border-error ${
					todo.isUrgent ? 'badge-error' : 'badge-outline'
				} cursor-pointer py-4 px-2`}
				on:click={() => {
					const index = $todos.indexOf($todos.filter((todoItem) => todoItem.id === todo.id)[0]);
					$todos[index].isUrgent = !todo.isUrgent;
				}}
			>
				now!
			</div>
			<div
				class={`badge border-warning ${
					todo.isImportant ? 'badge-warning' : 'badge-outline'
				} cursor-pointer py-4 px-2`}
				on:click={() => {
					const index = $todos.indexOf($todos.filter((todoItem) => todoItem.id === todo.id)[0]);
					$todos[index].isImportant = !todo.isImportant;
				}}
			>
				imp
			</div>
			<div
				class={`badge border-info ${
					todo.isHard ? 'badge-info' : 'badge-outline'
				} cursor-pointer py-4 px-2`}
				on:click={() => {
					const index = $todos.indexOf($todos.filter((todoItem) => todoItem.id === todo.id)[0]);
					$todos[index].isHard = !todo.isHard;
				}}
			>
				hard
			</div>
		</div>
	</div>
</div>
