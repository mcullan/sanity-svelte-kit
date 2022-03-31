<script>
  import SanityImage from './SanityImage.svelte'
  export let post
	export let invertClasses = 'dark:invert invert-0 brightness-100 dark:brightness-[.6] contrast-100 dark:contrast-[3] hue-rotate-0 dark:hue-rotate-180';
	const _invertClasses = post.imgDark ? invertClasses : '';
</script>

<article>
  <div class="
  px-2
  max-w-[400px]
  mx-auto
  text-xs
  md:w-54
  g  dark:bg-transparent
  border-2
  overflow-hidden
  rounded-[8px]
  hover:scale-[.99]
  scale-100
  group">

    
    {#if post.image}
    <div class="
    h-[80px]
  w-full
  mt-2
  max-w-md
  m-auto
  rounded-[8px] overflow-hidden
    ">
        <SanityImage image={post.image} maxWidth={600} />
    </div>
    {/if}
    <h2 class="font-mono text-sm mx-2 py-1 text-p3-6 dark:text-p3-1 duration-500 transition-colors">
      <a rel="prefetch" href="/blog/{post.slug.current}">{post.title}</a>
    </h2>
  </div>
  </article>

<style>
  article {
    display: flex;
    /* Show images first */
    flex-direction: column-reverse;
  }

  h2 {
    margin: 1rem 0 0;
  }

  h2 a {
    text-decoration: none;
  }

  .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
</style>
