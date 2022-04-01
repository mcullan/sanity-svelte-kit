<script context="module">
	import { showNavModal } from '$lib/stores/navModal';
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
	import Home from '$lib/pages/Home.svelte';
	export let posts;
</script>

<Home {posts} />
