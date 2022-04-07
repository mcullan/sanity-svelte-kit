<script>
	export let classes = '';
	export let buttons = [
		{ content: 'Home', href: '/' },
		{ content: 'Blog', href: '/blog' },
		{ content: 'Resume', href: '/resume.pdf', target: "_blank" },
		// { content: 'Resume', href: '/resume.pdf' },
		{ content: 'Contact', href: '/contact' }
	];
</script>


<div class="{classes} flex-grow my-auto max-w-[500px] pl-16 ">
	<ul class="flex flex-cols justify-between w-full text-md md:visible">
		{#each buttons as { content, href, target }}
			<li>
				<div>
					<a  {href} {target} class="hover:underline cursor-pointer">
						{content}
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>
