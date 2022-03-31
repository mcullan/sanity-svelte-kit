<script>
	import { onMount } from 'svelte';
	import BurgerButton from '$lib/components/nav/BurgerButton.svelte';
    import { showNavModal, showDarkModeButton } from "$lib/stores/navModal";

	// this could be a store
	let showBurger = false;
    export let classes = "";
	const handleMobileIconClick = () => {
        showNavModal.update(value => !value)
	};

	const mediaQueryHandler = (e) => {
		if (!e.matches) {
			showBurger = false;
			showDarkModeButton.set(true);
		} else {
			showBurger = true;
			showDarkModeButton.set(false);
		}
	};

	onMount(() => {
		if (window.innerWidth < 767) {
			showBurger = true;
		}

		const mediaListener = window.matchMedia('(max-width: 767px)');
		mediaListener.addEventListener('change', mediaQueryHandler);
	});

</script>

{#if showBurger}
	<BurgerButton  classes="h-7 w-7 {classes}" onClick={handleMobileIconClick} />
{/if}
