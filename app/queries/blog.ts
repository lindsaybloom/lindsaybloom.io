export const POSTS_QUERY = `
  query blogPosts {
    blogPostCollection{
      items {
        slug
        title
        body {
          json
        }
        description
        date
        hero {
          url
          width
          height
        }
      }
    }
  }`

export const POST_QUERY = (slug: string) => `
  query blogPost {
    blogPostCollection(
      where: { slug: "${slug}" }
    ) {
      items {
        slug
        title
        body {
          json
        }
        description
        date
        hero {
          url
          width
          height
        }
      }
    }
  }`
