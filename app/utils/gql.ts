export const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
export const CDA_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
export const gqlEndpointNoToken = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`
export const gqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master/explore?access_token=${CDA_TOKEN}`
