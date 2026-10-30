export const META_QUERY = `
  query MetaQuery {
    metadata: metadataCollection(where: { id: "lindsaybloom.io" }) {
      items {
        title
        author
        language
        description
      }
    }
  }
`
