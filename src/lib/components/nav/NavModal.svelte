<script>
	import { showNavModal } from '$lib/stores/navModal';
	import DarkModeButton from '$lib/components/nav/DarkModeButton.svelte';
	import { fade, fly } from "svelte/transition";

	export const buttons = [
		{ content: 'About', href: '/#about' },
		{ content: 'Blog', href: '/blog' },
		// { content: 'Work', href: '/work' },
		// { content: 'Resume', href: '/resume' },
		{ content: 'Contact', href: '/contact' }
	];

	export const handleClick = (e) => {
		const id = e.target.id || 'hello';
		console.log(id);
		if (!id.includes('dark')) showNavModal.set(false);
	};
</script>

{#if $showNavModal}
	<div
		on:click={handleClick}
		in:fade="{{duration: 50}}"
		out:fade="{{duration: 150}}"
		class="
        fixed top-10 w-full h-full backdrop-blur-lg transition-all z-10
        dark:text-p3-2
        "
	>
		<div class="block">
			<ul class="flex-col gap-2 flex justify-evenly mt-4 h-full text-xl mx-auto pl-4 w-full">
				{#each buttons as { content, href }}
					<li
					
					 class="text-4xl ">
						<a
						in:fade="{{duration: 200}}"
						out:fade="{{duration: 50}}"
							class="
        text-p3-7
    group-hover:text-p3-3 
    group-active:text-p3-4  
    dark:text-p3-2 
    dark:group-hover:text-p3-4 
    dark:group-active:text-gray-400  
    group-hover:scale-[1.001] 
    group-active:scale-[.9999] 
    whitespace-nowrap 
    font-light
    transition-colors
    duration-500 
    hover:duration-150 
    group-active:duration-150 
    origin-left 
	
                    "
							{href}>{content}</a
						>
					</li>
				{/each}
				<li class="h-12 w-full drop-shadow-sm ">
					<DarkModeButton classes=" shadow-pink-200 drop-shadow-sm h-10 w-10" />
				</li>
			</ul>
		</div>
	</div>
{/if}
