<script>
	import DarkModeButton from "$lib/components/nav/DarkModeButton.svelte";

	export let classes = '';
	export let buttons = [
		{ content: 'Home', href: '/' },
		{ content: 'Blog', href: '/blog' },
		{ content: 'Resume', href: '/resume.pdf', target: "_blank" },
		// { content: 'Resume', href: '/resume.pdf' },
		{ content: 'Contact', href: '/contact' }
	];
</script>


<div class="flex {classes} flex-grow my-auto max-w-[500px] pl-16 justify-self-end" >
	<ul class="flex flex-cols justify-between w-full text-md md:visible">
		{#each buttons as { content, href, target }}
			<li>
				<div class="text-p3-5 \
				hover:text-p3-3 \
				active:text-p3-4  \
				dark:text-p3-2 \
				dark:hover:text-p3-4 \
				dark:active:text-gray-400">
					<a  {href} {target} class=" cursor-pointer">
						{content}
					</a>
				</div>
			</li>
		{/each}
	</ul>

<div class="{classes}  justify-self-end my-auto">
	<DarkModeButton></DarkModeButton>
</div>
</div>


