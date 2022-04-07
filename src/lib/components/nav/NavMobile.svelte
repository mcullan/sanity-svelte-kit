<script>
	export let showNavMobile;
	export let buttons = [
		// { content: 'About', href: '/' },
		{ content: 'Blog', href: '/blog' },
		{ content: 'Resume', href: '/resume.pdf', target:"_blank"  },
		// { content: 'Resume', href: '/resume.pdf' },
		{ content: 'Contact', href: '/contact' }
	];
</script>

{#if showNavMobile}
	<div class="h-[60px] grid grid-cols-3 grid-rows-1 justify-around gap-2 text-md divide-x border-red-500">
		{#each buttons as { content, href, target }}
			<div class="border-gray-500 self-center text-center h">
				<a {target} {href} class="hover:underline cursor-pointer pt-4">
					{content}
				</a>
			</div>
		{/each}
	</div>
{/if}
