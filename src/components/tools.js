import React from "react"
import {
  Box,
  Heading,
  Text,
  Paragraph,
  Avatar,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  Anchor,
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
  console.log(tools.allContentfulTools.edges[0].node.category)
  return (
    <section id="tools">
      <Box pad={{ bottom: "300px", top: "100px" }}>
        <Heading>Tools and Technologies I Use</Heading>
        <Box direction="row" justify="between">
          {tools.allContentfulTools.edges.map((e, i) => {
            return (
              <Box>
                <Category
                  size="large"
                  weight="bold"
                  margin={{ bottom: "medium" }}
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
    </section>
  )
}

export default Tools
