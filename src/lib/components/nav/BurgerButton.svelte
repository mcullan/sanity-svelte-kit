<script>
	export let clicked = false;
	export let handleClick = () => {clicked = !clicked};
</script>

<div>
	<input class="hidden" type="checkbox" name="btnControl" id="btnControl" />
	<label on:click={handleClick} for="btnControl" class="group cursor-pointer">
		<svg
			fill="none"
			class="
			stroke-p3-6 group-hover:stroke-p3-4 group-active:stroke-gray-800 
			dark:stroke-p3-5 dark:group-hover:brightness-105
			group-active:scale-[0.98] transition-all select-none 
			fill-transparent group-hover:scale-[1.02]"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="square"
				stroke-linejoin="round"
				stroke-width="1.5"
				stroke-dasharray="1 "
				d="M4 6h 6 M14 6h 6 M4 12h 16 M4 18h 16
				"
			/></svg
		>
	</label>
</div>


<!-- 
<div class="{classes}">
	<input class="hidden" type="checkbox" name="btnControl" id="btnControl" />
	<label  for="btnControl" class="group cursor-pointer">
		<svg
			fill="none"
			class="
			stroke-p3-6 group-hover:stroke-p3-4 group-active:stroke-gray-800 
			dark:stroke-p3-5 dark:group-hover:brightness-105
			group-active:scale-[0.98] transition-all select-none 
			fill-transparent group-hover:scale-[1.02]"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="square"
				stroke-linejoin="round"
				stroke-width="1.5"
				stroke-dasharray="1 "
				d="M4 6h 6 M14 6h 6 M4 12h 16 M4 18h 16
				"
			/></svg
		>
	</label>
</div> -->
