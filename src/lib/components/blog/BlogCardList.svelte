<script>
    import BlogCard from '$lib/components/blog/BlogCard.svelte';
    export let posts;
	export let directory = "blog";
</script>

<ul class="
			grid grid-flow-row justify-evenly gap-y-4 gap-x-4
			grid-cols-1 sm:grid-cols-2 
            py-2
			max-w-[800px]
			
			">
				{#each posts as post}
					<li>
						<BlogCard directory={directory} path={post.path.slice(0, -6)} data={post.meta} ></BlogCard>
					</li>
				{/each}
</ul>