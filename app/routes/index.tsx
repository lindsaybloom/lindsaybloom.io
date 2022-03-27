import { Layout } from "~/components/Layout"
import { useLoaderData, LoaderFunction } from "remix"
import { HOME_QUERY } from "~/queries/home"
import { sendGraphQLRequest } from "remix-graphql/index.server"
import { gqlEndpointNoToken, CDA_TOKEN } from "~/utils/gql"
import { About } from "~/components/About"
import { Landing } from "~/components/Landing"
import { Tools } from "~/components/Tools"
import { Jobs } from "~/components/Jobs"
import { Contact } from "~/components/Contact"
import { json, ActionFunction } from "remix"

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  console.log(JSON.stringify(form))

  return json({ formData: form })
}

export const loader: LoaderFunction = args =>
  sendGraphQLRequest({
    args,
    endpoint: gqlEndpointNoToken,
    headers: { authorization: `Bearer ${CDA_TOKEN}` },
    query: HOME_QUERY,
    variables: args.params,
  })

export default function Index() {
  const queryResult = useLoaderData()
  const aboutText = queryResult.data.aboutText.items[0].text
  const photoUrl = queryResult.data.aboutImage.items[0].file.url
  const landingTagline = queryResult.data.landingTagline.items[0].text
  const landingDescription = queryResult.data.landingDescription.items[0]
  const landingImageUrl = queryResult.data.landingImage.items[0].file.url
  const tools = queryResult.data.tools.items
  const jobs = queryResult.data.jobs.items

  return (
    <div>
      <Layout>
        <Landing
          className="my-12"
          tagline={landingTagline}
          description={landingDescription}
          imageUrl={landingImageUrl}
        />
        <About text={aboutText} photoUrl={photoUrl} />
        <Tools className="my-12" tools={tools} />
        <Jobs className="my-12" jobs={jobs} />
        <Contact />
      </Layout>
    </div>
  )
}
