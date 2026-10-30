import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ContentfulJob } from "~/types"
import { H1, H3 } from "~/components/Typography"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

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

  return `${month} ${year}`
}

export const Jobs = ({ jobs, className = "" }: JobsProps) => {
  return (
    <section id="jobs" className={`section bg-white ${className}`}>
      <div className="section-content">
        <H1 className="text-center">Where I've worked.</H1>
        <Tabs className="mt-10 flex flex-col items-center">
          <TabList className="segmented">
            {jobs?.map(j => (
              <Tab
                className="segment"
                selectedClassName="segment-selected"
                key={j?.company}
              >
                {j?.company}
              </Tab>
            ))}
          </TabList>
          {jobs?.map(j => (
            <TabPanel
              className="w-full"
              selectedClassName="fadeIn"
              key={j?.company}
              title={j?.company}
            >
              <div className="tile bg-mist mt-8 p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2">
                  <H3>
                    {j?.position}{" "}
                    <span className="text-secondary font-normal">at</span>{" "}
                    <a href={j?.website}>{j?.company}</a>
                  </H3>
                  <p className="t-caption text-secondary whitespace-nowrap">
                    {getDate(j?.startDate)} –{" "}
                    {j?.endDate ? getDate(j?.endDate) : "Present"}
                  </p>
                </div>
                {j?.description && (
                  <div className="rich-text t-body text-inkSoft mt-6">
                    {documentToReactComponents(j?.description?.json)}
                  </div>
                )}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
