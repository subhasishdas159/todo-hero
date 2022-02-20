<script>
	import { todos } from '../stores';
</script>

<ul class="menu bg-white menu-horizontal rounded-box shadow-lg border">
	<li>
		<a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/></svg
			>
		</a>
	</li>
	<li
		on:click={() => {
			const notDone = $todos.filter((todoItem) => !todoItem.isDone);
			$todos = notDone;
		}}
	>
		<span>
			<svg
				class="w-5 h-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
				/></svg
			>
		</span>
	</li>
	<li
		on:click={() => {
			const hard = $todos.filter((todoItem) => todoItem.isHard);
			const notHard = $todos.filter((todoItem) => !todoItem.isHard);
			const important = [...hard, ...notHard].filter((todoItem) => todoItem.isImportant);
			const notImportant = [...hard, ...notHard].filter((todoItem) => !todoItem.isImportant);
			const urgent = [...important, ...notImportant].filter((todoItem) => todoItem.isUrgent);
			const notUrgent = [...important, ...notImportant].filter((todoItem) => !todoItem.isUrgent);
			const done = [...urgent, ...notUrgent].filter((todoItem) => todoItem.isDone);
			const notDone = [...urgent, ...notUrgent].filter((todoItem) => !todoItem.isDone);
			$todos = [...notDone, ...done];
		}}
	>
		<span>
			<svg
				class="w-5 h-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
				/></svg
			>
		</span>
	</li>
</ul>
