import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { H1 } from "../Typography"
import { ContentfulAbout } from "~/types"

type AboutProps = ContentfulAbout & {
  photoUrl: string
}

export const About = ({ text, photoUrl }: AboutProps) => {
  return (
    <section id="about" className="section bg-mist">
      <div className="section-content">
        <H1 className="text-center">Who am I?</H1>
        <div className="mt-12 grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="rich-text t-intro text-secondary lg:col-span-3">
            {documentToReactComponents(text?.json)}
          </div>
          {photoUrl && (
            <div className="lg:col-span-2 flex justify-center">
              <img
                className="tile w-full max-w-sm object-cover"
                src={photoUrl}
                alt="Lindsay at the Santa Monica Pier"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
