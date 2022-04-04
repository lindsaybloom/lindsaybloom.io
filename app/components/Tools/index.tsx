import { Text, H1 } from "~/components/Typography"
import { ContentfulTools } from "~/types"

type ToolsProps = {
  className?: string
  tools: Array<ContentfulTools>
}

export const Tools = ({ className, tools }: ToolsProps) => {
  return (
    <section className={className} id="tools">
      <div className="pt-0 lg:pt-100 pb-100 lg:pb-300">
        <H1>Tools and Technologies I Use</H1>
        <div className="flex flex-col lg:flex-row justify-between">
          {tools?.map((tool, i) => (
            <div key={tool.category} className="flex flex-col">
              <div className="text-bold text-lg mb-4 mt-4 lg:mt-0 border-b border-solid">
                {tool.category}
              </div>
              {tool.toolsCollection?.items?.map(t => (
                <>
                  {t.url ? (
                    <a className="text-pinkLightest" key={t.url} href={t.url}>
                      {t.name}
                    </a>
                  ) : (
                    <Text key={t.name}>{t.name}</Text>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
