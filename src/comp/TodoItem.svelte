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
					class="btn btn-sm btn-secondary bg-pink-300 px-1 mobileOnly:hover:bg-pink-300 mobileOnly:hover:border-secondary"
					on:click={() => moveTodo(todo, 'up')}
				>
					<svg
						class="w-6 h-6"
						fill="white"
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
					class="btn btn-sm btn-secondary bg-pink-300 px-1 mobileOnly:hover:bg-pink-300 mobileOnly:hover:border-secondary"
					on:click={() => moveTodo(todo, 'down')}
				>
					<svg
						class="w-6 h-6"
						fill="white"
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
					todo.isUrgent ? 'badge-error shadow-inner text-white' : 'badge-outline text-gray-400'
				} cursor-pointer py-4 px-2`}
				on:click={() => {
					const index = $todos.indexOf($todos.filter((todoItem) => todoItem.id === todo.id)[0]);
					$todos[index].isUrgent = !todo.isUrgent;
				}}
			>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
			<div
				class={`badge border-warning ${
					todo.isImportant ? 'badge-warning shadow-inner text-white' : 'badge-outline text-gray-400'
				} cursor-pointer py-4 px-2`}
				on:click={() => {
					const index = $todos.indexOf($todos.filter((todoItem) => todoItem.id === todo.id)[0]);
					$todos[index].isImportant = !todo.isImportant;
				}}
			>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					/></svg
				>
			</div>
			<div
				class={`badge border-info ${
					todo.isHard ? 'badge-info shadow-inner text-white' : 'badge-outline text-gray-400'
				} cursor-pointer py-4 px-2`}
				on:click={() => {
					const index = $todos.indexOf($todos.filter((todoItem) => todoItem.id === todo.id)[0]);
					$todos[index].isHard = !todo.isHard;
				}}
			>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 512 512"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M227.227 21.777c-1.845 0-3.704.05-5.567.157-15.314.875-30.76 5.305-39.494 10.863l-.008 73.15c2.884-.094 5.777-.147 8.676-.142 23.382.036 47.104 3.286 68.47 9.513l.01-87.507c-7.034-3.518-19.178-6.03-32.087-6.033zm80.74 9.16c-11.925.15-23.077 2.364-29.967 5.596l-.008 77.602v7.658c38.486 15.67 64.814 42.48 58.735 78.764l-.96 5.73-5.562 1.674c-17.45 5.253-34.872 9.703-52.225 13.335V246.53c25.562-.704 51.327-2.687 77.145-6.098l.02-197.928c-8.284-5.563-23.508-10.243-38.842-11.328-2.792-.198-5.584-.273-8.336-.238zM143.223 46.294c-1.176-.015-2.374-.01-3.588.02-4.175.1-8.533.468-12.903 1.152-15.67 2.454-31.477 8.565-40.406 15.402l-.01 72.955c18.808-15.81 46.704-25.143 77.15-28.54l.007-57.966c-4.82-1.752-12.018-2.916-20.25-3.023zm258.394 3.46c-10.804.117-20.722 1.93-27.043 4.655l-.02 183.182c25.074-4.02 50.16-9.412 75.122-16.358l1.99-158.447c-8.352-5.9-23.648-11.025-39.05-12.553-3.698-.366-7.398-.517-11-.478zm-222.775 74.202c-53.72.702-101.407 20.365-97.887 66.6 15.836-3.918 30.84-5.893 44.94-6.1 34.84-.51 64.213 9.704 87.318 27.613 34.608-3.11 69.852-10 105.412-20.314.14-41.287-74.098-68.657-139.783-67.8zm-48.877 78.65c-1.296-.003-2.603.012-3.92.045-17.256.436-36.45 4.03-57.566 11.037 5.79 53.808 26.325 106.41 58.5 143.346 6.226 7.15 12.856 13.712 19.875 19.615 29.303 9.282 69.26 12.917 110.534 12.14 3.777-55.805-8.717-108.357-36.193-142.74-21.265-26.61-51.064-43.39-91.232-43.444zm129.326 22.282c-9.358 1.637-18.69 3.016-27.995 4.15 1.54 1.74 3.043 3.52 4.502 5.346 3.146 3.937 6.094 8.062 8.873 12.334 9.916.144 19.868.125 29.857-.106H259.29v-21.723zm191.817 15.343c-65.406 17.826-131.462 25.41-195.85 25.315 16.998 35.144 23.828 78.093 21.013 122.6 42.482-2.08 85.03-8.23 118.187-15.983 26.693-32.78 47.37-77.118 56.65-131.932zM400.51 389.9c-38.334 9.145-87.95 16.056-136.873 17.454-47.67 1.36-94.336-2.228-129.448-15.262l-.01 78.93c27.187 12.568 76.414 20.205 127.318 20.298 51.224.094 104.214-7.173 139-20.773l.012-80.647z"
					/></svg
				>
			</div>
		</div>
	</div>
</div>
