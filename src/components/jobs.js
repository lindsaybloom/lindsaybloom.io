import React from "react"
import { Box, Heading, Tab, Tabs, Anchor } from "grommet"
import theme from "../styles/theme"

const Jobs = ({ jobs }) => {
  const reversedJobs = jobs.reverse()

  return (
    <section id="jobs">
      <Heading>Where I've Worked</Heading>
      <Tabs justify="start" alignControls="start">
        {reversedJobs.map(j => (
          <Tab title={j.node.company}>
            <Box
              direction="row"
              fill
              pad={{ vertical: "large", left: "12px" }}
              align="left"
            >
              {j.node.position} @{" "}
              <Anchor href={j.node.website}>{j.node.company}</Anchor>
            </Box>
          </Tab>
        ))}
      </Tabs>
    </section>
  )
}

export default Jobs
