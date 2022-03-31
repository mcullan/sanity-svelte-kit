<script>
	import { onMount } from 'svelte';

	// this should be a store
	let showMobileMenu = false;
	let showBurger = false;

	const handleMobileIconClick = () => {
		showMobileMenu = !showMobileMenu;
	};

	const mediaQueryHandler = (e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
			showBurger = false;
		} else {
			showBurger = true;
		}
	};

	onMount(() => {
		if (window.innerWidth < 767) {
			showBurger = true;
		}

		const mediaListener = window.matchMedia('(max-width: 767px)');
		mediaListener.addEventListener('change', mediaQueryHandler);
	});

	export let buttons = [
		{ content: 'About', href: '/resume.pdf' },
		{ content: 'Blog', href: '/blog' },
		// { content: 'Work', href: '/work' },
		// { content: 'Resume', href: '/resume' },
		{ content: 'Contact', href: '/contact' }
	];
	export let classes = '';
</script>

{#if !showBurger}
	<div class="{classes} ">
		<ul class="flex flex-cols justify-between w-full text-sm md:visible">
			{#each buttons as { content, href }}
			<li>
				<div>
				<a {href} class="hover:underline cursor-pointer">
					{content}
				</a>
				</div>
			</li>
			{/each}
		</ul>
	</div>
{/if}
