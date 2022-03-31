<script context="module">
  import { marked } from 'marked';
  export async function load({page, fetch}) {
    try {
      const url = `/blog/${page.params.slug}.json`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
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
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import AuthorCard from '$lib/AuthorCard.svelte'
  import SanityImage from '$lib/SanityImage.svelte'
  import MarkdownPost from '$lib/MarkdownPost.svelte'
  import Circle from '../../lib/Circle.svelte';
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

{#each post.authors || [] as author}
  <AuthorCard {author} />
{/each}

<hr />

{#if post.image}
  <SanityImage image={post.image} />
{/if}

  <!-- {marked.parse(post.body[0].children[0].text)} -->

<MarkdownPost markdown={post.markdown} ></MarkdownPost>

  <!-- 
<PortableText
  blocks={post.body}
  serializers={{
    types: {
      code: Code,
      image: ImageBlock,
      authorReference: AuthorBlock
    },
    marks: {
      link: Link
    }
  }}
/> -->
