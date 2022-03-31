<script>
	import Name from '$lib/components/nav/Name.svelte';
	import NavMobile from '$lib/components/nav/NavMobile.svelte';
	import NavWide from '$lib/components/nav/NavWide.svelte';
	import DarkModeButton from '$lib/components/nav/DarkModeButton.svelte';
	import { showNavModal, showDarkModeButton } from '$lib/stores/navModal';
</script>

<div class="sticky top-0 flex justify-between h-10 gap-2 px-2 w-full">
	
	<div  class="
	justify-self-center mx-2 py-auto self-center
	basis-1/12
	md:basis-0
	 " >
		<NavMobile />
	</div>

	<div class=" py-1
	basis-10/12 md:basis-5/12

	self-start
	">
		<a  on:click={() => showNavModal.set(false)} class="" href="/">
			<Name />
		</a>
	</div>

	<NavWide classes="transition-colors\
	duration-500 dark:text-gray-100 text-gray-800 justify-self-end self-end pb-[.4rem] w-2/3 mr-2"></NavWide>

	<!-- {#if $showDarkModeButton} -->
	{#if true}
	<div class="  stroke-gray-200 justify-self-center pb-1">
		<DarkModeButton />
	</div>
	{/if}
	
</div>
