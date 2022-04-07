<script context="module">
  import { browser } from '$app/env'; 

  export async function load({params, fetch}) {

    if (browser) {
      console.log('running on browser')
    } else {
      console.log('running on server')
    }
    try {
      console.log('start module')
      const url = `/blog/${params.slug}.json`
      console.log(`fetch /blog/${params.slug}.json`)
      const res = await fetch(url)
      const data = await res.json()
      console.log('json received')

      if (data?.post) {
        console.log(data)
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
  const imgClasses = "mx-auto object-cover w-[2000px] h-[48px] "
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
<div class='-mx-4'>
  <SanityImage classes={imgClasses} maxWidth={1000} image={post.image} />
</div>
{/if}

<MarkdownPost markdown={post.markdown} ></MarkdownPost>
