import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { H1 } from "../Typography"
import { ContentfulAbout } from "~/types"

type AboutProps = ContentfulAbout & {
  photoUrl: string
}

export const About = ({ text, photoUrl }: AboutProps) => {
  return (
    <section id="about">
      <div className="about p-150">
        <H1>Who am I?</H1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col w-full lg:w-60">
            {documentToReactComponents(text.json)}
          </div>
          <div className="lg:self-end">
            <div className="about-photo">
              <img
                className="object-contain static"
                src={photoUrl}
                alt="Lindsay at the Santa Monica Pier"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
