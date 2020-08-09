import React from "react"
import { Box, Heading, Tab, Tabs, Anchor, Text, Paragraph } from "grommet"
import theme from "../styles/theme"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function getDate(date) {
  const numMonth = date.substring(0, 2)
  const monthInt = parseInt(numMonth, 10)
  const month = months[monthInt - 1]
  const year = date.substring(5, 9)
  return `${month}, ${year}`
}
const JobDescription = styled(Paragraph)`
  max-width: none;
`

const Jobs = ({ jobs }) => {
  const reversedJobs = jobs.reverse()

  return (
    <section id="jobs">
      <Box pad={{ bottom: "300px" }}>
        <Heading>Where I've Worked</Heading>
        <Tabs justify="start" alignControls="start">
          {reversedJobs.map(j => (
            <Tab title={j.node.company}>
              <Box
                direction="row"
                fill
                pad={{ vertical: "large", left: "12px" }}
                align="left"
                justify="between"
              >
                <Text weight="bold">
                  {j.node.position} @
                  <Anchor href={j.node.website}>{j.node.company}</Anchor>
                </Text>
                <Text weight="bold">
                  {getDate(j.node.startDate)} -{" "}
                  {j.node.endDate ? getDate(j.node.endDate) : "Present"}
                </Text>
              </Box>
              <JobDescription>
                {documentToReactComponents(j.node.description.json)}
              </JobDescription>
            </Tab>
          ))}
        </Tabs>
      </Box>
    </section>
  )
}

export default Jobs
