<script>
  import {urlFor} from '$lib/utilities/sanityClient'

  export let image
  export let maxWidth = 300
  export let alt = undefined
  export let classes = ''

  // Example image document ID: image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png
  // Structure: image-${storedImgId}-${dimensions}-${format}

  // If we split it by "-", the 3rd element are the dimensions (1350x900)
  $: dimensions = image?.asset?._ref?.split('-')[2]
  // If we split dimensions by "x", we get the width (1350) and height (900)
  $: [width, height] = dimensions.split('x').map(Number)

  $: aspectRatio = width / height

  // Once loaded, the image will transition to full opacity
  let loaded = false
</script>

{#if image}
  <img
    class="{classes}"
    loading="lazy"
    src={urlFor(image).width(maxWidth).fit('fillmax')}
    alt={alt || image.alt || ''}
    on:load={() => (loaded = true)}
  />
{/if}
