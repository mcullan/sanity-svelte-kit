<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/blog/${params.slug}.json`
      const res = await fetch(url)
      const data = await res.json()
      if (data?.post) {
        return {
          props: data
        }
      }
    } catch (err) {

      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import SanityImage from '$lib/components/SanityImage.svelte'
  import MarkdownPost from '$lib/components/MarkdownPost.svelte'
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>
  Published {new Date(post.publishedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })}
</p>

<hr />

{#if post.image}
  <SanityImage image={post.image} />
{/if}

<MarkdownPost markdown={post.markdown} ></MarkdownPost>
