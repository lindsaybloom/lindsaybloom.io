export const HOME_QUERY = `
  query HomeQuery {
    aboutText: contentTypeRichTextCollection(where: { name: "who-am-i" }){
      items{
        text{
          json
        }
      }
    }
    aboutImage: photoCollection(where: { id: "who-am-i-photo" }){
      items{
        file{
          url
        }
      }
    }
    landingTagline: shortTextCollection(where: { name: "landing-tagline"}){
      items{
        text
      }
    }
    landingDescription: contentTypeRichTextCollection(where: { name: "landing-description" }){
      items{
        text{
          json
        }
      }
    }
    landingImage: iconCollection(where: { id: "bitmoji" }){
      items{
        file{
          url
        }
      }
    }
    tools: toolsCollection{
      items{
        category
        toolsCollection{
          items{
            name
            url
          }
        }
      }
    }
    jobs: jobCollection(order: startDate_ASC) {
      items {
        company
        position
        startDate
        endDate
        description {
          json
        }
        website
      }
    }
  }
`
