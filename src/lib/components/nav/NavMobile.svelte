<script>
	import DarkModeButton from "$lib/components/nav/DarkModeButton.svelte";
	const buttons = [
		{ content: 'Home', href: '/' },
		{ content: 'Blog', href: '/blog' },
		// { content: 'Resume', href: '/resume.pdf', target: '_blank' },
		{ content: 'Contact', href: '/contact' }
	];
</script>

<div
	class="h-[60px] grid grid-cols-4 grid-rows-1 justify-around gap-2 text-md divide-x"
>
	{#each buttons as { content, href, target }}
		<div class="border-gray-500 self-center text-center select-none">
			<a {target} {href} class="hover:underline cursor-pointer pt-4 text-center">
				{content}
			</a>
		</div>
	{/each}

	<div class="border-gray-500 self-center justify-self-center">
		<DarkModeButton></DarkModeButton>
	</div>

</div>
