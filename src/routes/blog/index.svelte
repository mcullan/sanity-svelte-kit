<script context="module">
	export async function load({ fetch }) {
		try {
			const res = await fetch('/blog/all.json');
			const data = await res.json();
			return {
				props: data
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
    import PostsGrid from '$lib/components/blog/PostsGrid.svelte';
	export let posts;
    
</script>
  
<h2 class='pt-2'>Blog</h2>
  <PostsGrid {posts} />
  
