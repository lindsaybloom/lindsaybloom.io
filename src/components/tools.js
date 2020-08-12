import React from "react"
import {
  Box,
  Heading,
  Text,
  Anchor,
  ResponsiveContext
} from "grommet"
import theme from "../styles/theme"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Category = styled(Text)`
  border-bottom: 1px solid;
`

const Tools = () => {
  const tools = useStaticQuery(graphql`
    {
      allContentfulTools(sort: { fields: category, order: DESC }) {
        edges {
          node {
            category
            tools {
              name
              url
            }
          }
        }
      }
    }
  `)
  
  const size = React.useContext(ResponsiveContext);
  const sectionPaddingTop = size === "xsmall" || size === "small" ? "0" : "100px"
  const categoryPaddingTop = size === "xsmall" || size === "small" ? "medium" : "0"
  const sectionPaddingBottom = size === "xsmall" || size === "small" ? "100px" : "300px"
  const flexDirection = size === "xsmall" || size === "small" ? "column" : "row"

  return (
    <section id="tools">
      <ResponsiveContext.Consumer>
        {size =>
          <Box pad={{ bottom: sectionPaddingBottom, top: sectionPaddingTop }}>
            <Heading>Tools and Technologies I Use</Heading>
            <Box direction={flexDirection} justify="between">
              {tools.allContentfulTools.edges.map((e, i) => {
                return (
                  <Box>
                    <Category
                      size="large"
                      weight="bold"
                      margin={{ bottom: "medium", top: categoryPaddingTop }}
                    >
                      {e.node.category}
                    </Category>
                    {e.node.tools.map(t => {
                      return (
                        <>
                          {t.url ? (
                            <Anchor href={t.url}>{t.name}</Anchor>
                          ) : (
                            <Text>{t.name}</Text>
                          )}
                        </>
                      )
                    })}
                  </Box>
                )
              })}
            </Box>
          </Box>
        }
    </ResponsiveContext.Consumer>
    </section>
  )
}

export default Tools
