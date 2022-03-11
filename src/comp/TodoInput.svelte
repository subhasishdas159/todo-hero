<script>
	import { onMount } from 'svelte';
	import { sampleTodos } from '@config/sampleTodos';
	import { todos } from '../stores';

	let newTodo,
		inputPlaceholder = 'Enter your todo';

	onMount(() => {
		let placeholderInterval = setInterval(() => {
			const randomTodo = sampleTodos[Math.floor(Math.random() * sampleTodos.length)];
			typeWriter(randomTodo);
		}, 5000);
		return () => clearInterval(placeholderInterval);
	});

	function typeWriter(txt, speed = 50) {
		inputPlaceholder = '';
		let i = 0;

		function typeText() {
			if (i < txt.length) {
				inputPlaceholder += txt.charAt(i);
				i++;
				setTimeout(typeText, speed);
			}
		}

		typeText();
	}
</script>

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
			>&nbsp;
		</button>
	</form>
</div>
