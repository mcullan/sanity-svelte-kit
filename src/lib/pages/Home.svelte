
<script>
    import AboutSection from '$lib/components/AboutSection.svelte';
    import PostsGrid from '$lib/PostsGrid.svelte';
    export let posts;

</script>

<div class="mt-4">
  <AboutSection></AboutSection>
</div>
  
<h2>Blog</h2>
  <PostsGrid {posts} />
  