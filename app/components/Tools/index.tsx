import { H1, H3 } from "~/components/Typography"
import { ContentfulTools } from "~/types"

type ToolsProps = {
  className?: string
  tools: Array<ContentfulTools>
}

export const Tools = ({ className = "", tools }: ToolsProps) => {
  return (
    <section id="tools" className={`section bg-black text-mist ${className}`}>
      <div className="section-content">
        <H1 className="text-center">Tools and technologies I use.</H1>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools?.map(tool => (
            <div key={tool.category} className="tile bg-graphite p-8">
              <H3 className="mb-5">{tool.category}</H3>
              <ul className="flex flex-col gap-2 t-body">
                {tool.toolsCollection?.items?.map(t => (
                  <li key={t.name}>
                    {t.url ? (
                      <a className="text-linkDark link-chevron" href={t.url}>
                        {t.name}
                      </a>
                    ) : (
                      <span className="text-tertiary">{t.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
