/**
 * Example of how you could re-use GROQ queries across different contexts with Javascript.
 * As your schema evolves, this pattern will be useful to keep your data in sync across all surfaces.
 */
export function getPostsQuery(extraFilter) {
  return /* groq */ `*[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt < now()
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(publishedAt desc) {
    title,
    slug,
    image,
    publishedAt,
  }`
}