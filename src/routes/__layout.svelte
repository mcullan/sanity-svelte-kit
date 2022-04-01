<script>
  import '../styles/tailwind.css';
  import '../styles/global.css';

	import collage from '$lib/assets/collagecrop.jpg?webp&meta&width=1960px';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	import NavModal from '$lib/components/nav/NavModal.svelte';
</script>


<div class="sticky top-0 z-50 dark:bg-p3-7  bg-p3-1 transition-colors duration-500">
  <Header />
</div>

<NavModal></NavModal>
<img
			class="
			min-h-[60px]
			max-h-[160px]
            dark:invert invert-0 saturate-100 dark:saturate-100 
            hue-rotate-0 dark:hue-rotate-180 duration-500 transition visible w-full 
			      m-auto object-cover
            "
			alt="A collage"
			src={collage.src}
		/>

<main class="mx-2 md:mx-4">
  <slot></slot>
</main>

<footer>
  <Footer></Footer>
</footer>