<script>
	import { todos } from '../stores';
</script>

<ul class="menu bg-white menu-horizontal rounded-box shadow-lg border">
	<li
		on:click={() => {
			const notDone = $todos.filter((todoItem) => !todoItem.isDone);
			$todos = notDone;
		}}
	>
		<span
			class="active:bg-success hover:bg-green-100 hover:text-neutral active:text-white mobileOnly:hover:bg-white mobileOnly:hover:text-neutral mobileOnly:focus:bg-green-300 mobileOnly:active:bg-success mobileOnly:active:text-white"
		>
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
			const notDone = $todos.filter((todoItem) => !todoItem.isDone);
			$todos = notDone;
		}}
	>
		<span
			class="active:bg-error hover:bg-red-100 hover:text-neutral active:text-white mobileOnly:hover:bg-white mobileOnly:hover:text-neutral mobileOnly:focus:bg-red-300 mobileOnly:active:bg-error mobileOnly:active:text-white"
		>
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
		<span
			class="active:bg-info hover:bg-blue-100 hover:text-neutral active:text-white mobileOnly:hover:bg-white mobileOnly:hover:text-neutral mobileOnly:focus:bg-blue-300 mobileOnly:active:bg-info mobileOnly:active:text-white"
		>
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
