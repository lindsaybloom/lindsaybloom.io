import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ContentfulJob } from "~/types"
import { Text, H1 } from "~/components/Typography"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

type JobsProps = {
  className?: string
  jobs: ContentfulJob[]
}

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

function getDate(dateString: string) {
  const date = new Date(dateString)
  const year = date.getFullYear()

  let month = (1 + date.getMonth()).toString()
  const monthInt = parseInt(month, 10)
  month = months[monthInt - 1]

  return `${month}, ${year}`
}

export const Jobs = ({ jobs, className }: JobsProps) => {
  return (
    <section className={className} id="jobs">
      <div className="pb-100 lg:pb-200">
        <H1>Where I've Worked</H1>
        <Tabs className="flex flex-col justify-start mt-6">
          <TabList className="pl-3 flex gap-3 text-pinkLightest company">
            {jobs?.map(j => (
              <Tab className="relative cursor-grab" key={j?.company}>
                {j?.company}
              </Tab>
            ))}
          </TabList>
          {jobs?.map(j => (
            <TabPanel className="job" key={j?.company} title={j?.company}>
              <div className="flex flex-col lg:flex-row py-6 pl-3 items-start justify-between">
                <Text className="">
                  {j?.position} @ <a href={j?.website}>{j?.company}</a>
                </Text>
                <Text className="text-bold">
                  {getDate(j?.startDate)} -{" "}
                  {j?.endDate ? getDate(j?.endDate) : "Present"}
                </Text>
              </div>
              {j?.description && (
                <div className="pl-3 max-w-none">
                  {documentToReactComponents(j?.description?.json)}
                </div>
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
