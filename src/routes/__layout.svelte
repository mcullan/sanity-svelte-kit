<script>
	import '$lib/../styles/tailwind.css';
	import '$lib/../styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NavMobile from '$lib/components/nav/NavMobile.svelte';
	export let wrapperWidth;
</script>

<div bind:clientWidth={wrapperWidth} class="relative min-h-[100vh]">
	<div class="sticky top-0 z-50 dark:bg-p3-7  bg-p3-1 transition-colors duration-500">
		<Header showNavDesktop={wrapperWidth >= 640} />
	</div>
	<div class="pb-[3rem]">
		<HeaderImage />
		<main class="mx-2 md:mx-4">
			<slot />
		</main>

		<footer class="pb-3">
			<Footer />
		</footer>
	</div>

	{#if wrapperWidth < 640}
		<div
			class="dark:bg-p3-7  bg-p3-1 transition-colors duration-500 fixed bottom-0 w-full h-[60px]"
		>
			<NavMobile />
		</div>
	{/if}
</div>
