
<script>
    import AboutSection from '$lib/components/AboutSection.svelte';
    import PostsGrid from '$lib/components/blog/PostsGrid.svelte';
    import Contact from '$lib/components/Contact.svelte';
   export let posts;
</script>

<div class="max-w-[800px] mt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-start">
  <AboutSection></AboutSection>
  <Contact></Contact>
</div>
  
<h2>Blog</h2>
  <PostsGrid {posts} />
  