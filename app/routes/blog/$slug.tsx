import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import { sendGraphQLRequest } from "remix-graphql/index.server"
import { gqlEndpointNoToken, CDA_TOKEN } from "../../utils/gql"
import { POST_QUERY } from "../../queries/blog"
import { PostsQuery } from "../../types"
import { Post } from "../../components/Post"
import { Layout } from "../../components/Layout"

export const loader: LoaderFunction = args =>
  sendGraphQLRequest({
    args,
    endpoint: gqlEndpointNoToken,
    headers: { authorization: `Bearer ${CDA_TOKEN}` },
    query: POST_QUERY(args.params.slug || ""),
    variables: args.params,
  })

export default function PostSlug() {
  const posts = useLoaderData<PostsQuery>()
  const post = posts.data.blogPostCollection.items?.[0]
  return (
    <Layout>
      <Post post={post} />
    </Layout>
  )
}
