<script>
	import Name from '$lib/components/nav/Name.svelte';
	// import BurgerButton from '$lib/components/nav/BurgerButton.svelte';
	import NavDesktop from '$lib/components/nav/NavDesktop.svelte';
	export let showNavDesktop = false;
</script>

<div class="sticky justify-between top-0 flex h-10 gap-2 px-2 w-full ">
	<div class="py-1 justify-self-end ">
		<a class="" href="/index">
			<Name />
		</a>
	</div>
	{#if showNavDesktop}
		<NavDesktop />
	<!-- {:else}
	<div class='w-8 my-auto'>
		<BurgerButton />
	</div> -->
	{/if}
</div>
