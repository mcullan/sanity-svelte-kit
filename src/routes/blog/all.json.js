import { getPostsQuery } from '$lib/queries'
import {client} from '$lib/sanityClient'
import { theme } from '$lib/stores/theme'

// Fetch all valid posts & authors to display in the homepage
export async function get() {
  const data = await client.fetch(/* groq */ `{
		"posts": ${getPostsQuery()}
  }`)

  if (data) {
    console.log(theme)
    return {
      status: 200,
      body: data
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
