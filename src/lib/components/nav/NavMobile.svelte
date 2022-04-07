<script>
	export let showNavMobile = true;
	export let buttons = [
		// { content: 'About', href: '/' },
		{ content: 'Blog', href: '/' },
		{ content: 'Resume', href: '/resume.pdf' },
		// { content: 'Resume', href: '/resume.pdf' },
		{ content: 'Contact', href: '/contact' }
	];
</script>

{#if showNavMobile}
	<div class="h-[60px] grid grid-cols-3 grid-rows-1 justify-around gap-2 text-md divide-x border-red-500">
		{#each buttons as { content, href }}
			<div class="border-gray-500 self-center text-center h">
				<a {href} class="hover:underline cursor-pointer pt-4">
					{content}
				</a>
			</div>
		{/each}
	</div>
{/if}
