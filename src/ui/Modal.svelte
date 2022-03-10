<script>
	export let onConfirm, btnLabel, show, header, text, error;
</script>

<input type="checkbox" id="my-modal" class="modal-toggle" checked={show} />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">{header}</h3>
		<p class="py-4">{text}</p>
		<div class="modal-action">
			<span for="my-modal" class="p-3" on:click={() => (show = false)}>Cancel</span>
			<button
				for="my-modal"
				class={`btn ${error ? 'btn-error text-white' : 'btn-primary'}`}
				on:click={onConfirm}>{btnLabel}</button
			>
		</div>
	</div>
</div>
