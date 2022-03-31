<script context="module">
  	import { theme } from '$lib/stores/theme';
	import { showNavModal } from '$lib/stores/navModal';
  export async function load({fetch}) {
    try {
      const res = await fetch('/blog/all.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import Home from '$lib/pages/Home.svelte';
  export let posts;


</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Home {$theme} {posts}></Home>
