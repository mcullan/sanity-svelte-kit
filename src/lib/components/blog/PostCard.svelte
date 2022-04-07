<script>
	import SanityImage from '$lib/components/SanityImage.svelte';
	export let post;
	export let invertClasses =
		'dark:invert invert-0 brightness-100 dark:brightness-[.6] contrast-100 dark:contrast-[3] hue-rotate-0 dark:hue-rotate-180';
	const _invertClasses = post.imgDark ? invertClasses : '';
	const imgClasses = 'mx-auto object-cover w-[120%] h-[80px]'
</script>

<article>
	<div
		class="
  w-full
  md:max-w-[400px]
  h-[140px]
  text-xs
  md:w-54
  dark:bg-transparent
  border-2
  overflow-hidden
  rounded-[8px]
  hover:scale-[.99]
  scale-100
  group"
	>
		{#if post.image}
			<div
				class="
    h-[80px]
    w-full
    m-auto
    rounded-[8px]
    object-cover
    "
			>
				<SanityImage classes={imgClasses} image={post.image} maxWidth={600} />
			</div>
		{/if}
		<div class="my-auto">
			<h2 class="px-2  my-auto font-mono text-sm py-1 text-p3-6 dark:text-p3-1 duration-500 transition-colors">
				<a  sveltekit:prefetch href="/blog/{post.slug.current}">{post.title}</a>
			</h2>
		</div>
	</div>
</article>
