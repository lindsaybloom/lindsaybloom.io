import { useLoaderData, LoaderFunction, json, ActionFunction } from "remix"
import { POSTS_QUERY } from "~/queries/blog"
import { PostsQuery } from "~/types"
import { sendGraphQLRequest } from "remix-graphql/index.server"
import { gqlEndpointNoToken, CDA_TOKEN } from "~/utils/gql"
import { PostTile } from "~/components/PostTile"
import { Layout } from "~/components/Layout"
import { EmailSignUp } from "~/components/EmailSignUp"

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()

  return json({ formData: form })
}

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
    <Layout className="bg-mist">
      <section className="section">
        <div className="section-content">
          <h1 className="t-hero text-center">Blog</h1>
          <p className="t-subhead text-secondary text-center mt-3">
            Notes on building for the web.
          </p>
          <ul className="mt-12 grid md:grid-cols-2 gap-5">
            {posts?.data?.blogPostCollection?.items?.map(post => (
              <li key={post.slug}>
                <PostTile post={post} />
              </li>
            ))}
          </ul>
          <EmailSignUp className="mt-12 max-w-reading mx-auto" />
        </div>
      </section>
    </Layout>
  )
}
