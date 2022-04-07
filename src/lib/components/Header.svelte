<script>
	import Name from '$lib/components/nav/Name.svelte';
	// import BurgerButton from '$lib/components/nav/BurgerButton.svelte';
	import NavDesktop from '$lib/components/nav/NavDesktop.svelte';
	export let showNavDesktop = false;
</script>

<div class="sticky top-0 flex justify-between h-10 gap-2 px-2 w-full">
	<div class="py-1 self-start">
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
