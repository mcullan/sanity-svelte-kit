<script lang="ts">
	import type { Theme } from '$lib/../types';
	import {setTheme, theme} from "$lib/stores/theme";
	export let isDark = false;
	export let classes = "h-5 w-6";

	$: nextTheme = ($theme === 'dark' ? 'light' : 'dark') as Theme
	$: isDark = $theme === 'dark';

	const handleClick = () => {
		setTheme(nextTheme)
	}
</script>

<div id='dark-mode-button' on:click={handleClick} class="{classes} mx-2 py-2  self-center  select-none">
	<input class="hidden" type="checkbox" name="btnControl" id="btnControl" />
	<label for="btnControl" class="group relative cursor-pointer ">
		
	
	{#if !isDark}
		<!-- Sun -->
		<svg
		id="dark-svg-sun"
			class="
			stroke-p3-3  group-hover:stroke-gray-600 group-active:stroke-gray-800 group-active:scale-90 transition-all select-none fill-transparent"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path id='dark-path-moon'
				stroke-linecap="square"
				stroke-linejoin="round"
				stroke-width="1.3"
				stroke-dasharray="1 3"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/></svg
		>
	{:else}
		<!-- Moon -->
		<svg
		id="dark-svg-moon"
			class="
			dark:stroke-p3-5 dark:group-hover:stroke-gray-100
			
			dark:group-active:stroke-gray-50 group-active:scale-95 group-hover:scale-105 duration-150 transition-all select-none fill-transparent"
			fill="none"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path id='dark-path-sun'
				stroke-linecap="square"
				stroke-linejoin="round"
				stroke-dasharray="1 4"
				stroke-width="1"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/></svg
		>
	{/if}

</label>

</div>
