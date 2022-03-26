import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction,
  LoaderFunction,
} from "remix"
import type { MetaFunction } from "remix"
import styles from "./tailwind.css"
import globalStyles from "./styles/tailwind.css"
import { sendGraphQLRequest } from "remix-graphql/index.server"
import { gqlEndpointNoToken, CDA_TOKEN } from "~/utils/gql"
import { META_QUERY } from "~/queries/meta"
import config from "~/config"
import logoIcon from "../assets/LB_Logo.png"

export const loader: LoaderFunction = args =>
  sendGraphQLRequest({
    args,
    endpoint: gqlEndpointNoToken,
    headers: { authorization: `Bearer ${CDA_TOKEN}` },
    query: META_QUERY,
    variables: args.params,
  })

export const meta: MetaFunction = ({ data }) => {
  console.log(data)
  const metadata = data.data.metadata.items[0]

  return {
    charset: "utf-8",
    title: metadata.title,
    viewport: "width=device-width,initial-scale=1",
    description: metadata.description,
    keywords: config.siteKeywords,
    "google-site-verification": config.googleVerification,
    "og:title": metadata.title,
    "og:description": metadata.description,
    "og:type": "website",
    "og:url": config.siteUrl,
    "og:site_name": metadata.title,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:locale": config.siteLanguage,
    "twitter:card": "summary",
    "twitter:url": config.siteUrl,
    "twitter:site": config.twitterHandle,
    "twitter:creator": config.twitterHandle,
    "twitter:title": metadata.title,
    "twitter:description": metadata.description,
    "twitter:image:alt": metadata.title,
    "msapplication-TileImage": logoIcon,
  }
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: globalStyles },
  { rel: "canonical", href: "https://lindsaybloom.io" },
  {
    rel: "",
    href: "https://www.twilik.com/assets/retainable/rss-embed/retainable.css",
  },
]

export default function App() {
  return (
    <html className="font-mono bg-grayDarkest text-grayLightest" lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
