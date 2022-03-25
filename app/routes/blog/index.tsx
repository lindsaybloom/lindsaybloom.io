import { useLoaderData, LoaderFunction } from "remix"
import { POSTS_QUERY } from "~/queries/blog"
import { PostsQuery } from "~/types"
import { sendGraphQLRequest } from "remix-graphql/index.server"
import { gqlEndpointNoToken, CDA_TOKEN } from "~/utils/gql"
import { PostTile } from "~/components/PostTile"
import { Layout } from "~/components/Layout"
import { EmailSignUp } from "~/components/EmailSignUp"

export const loader: LoaderFunction = args =>
  sendGraphQLRequest({
    args,
    endpoint: gqlEndpointNoToken,
    headers: { authorization: `Bearer ${CDA_TOKEN}` },
    query: POSTS_QUERY,
    variables: args.params,
  })

export default function Posts() {
  const posts = useLoaderData<PostsQuery>()
  return (
    <Layout className="py-4 flex flex-col">
      <EmailSignUp className="mb-6 self-center" />
      <ul>
        {posts.data.blogPostCollection.items.map(post => (
          <li key={post.slug} className="mb-6">
            <PostTile post={post} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}
