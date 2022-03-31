<script>
  import PostCard from '$lib/PostCard.svelte'
  export let posts = []
</script>

<section>
<ul class="
			grid grid-flow-row justify-evenly gap-y-4 gap-x-4
			grid-cols-1 sm:grid-cols-2 
            py-2
			max-w-[800px]
			">
        {#each posts as post (post.slug.current)}
          <PostCard {post} />
        {/each}
      </ul>
    </section>


