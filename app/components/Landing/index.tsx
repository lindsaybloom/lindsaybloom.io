import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document } from "@contentful/rich-text-types"
import { Link } from "remix"
import { Hero, Subhead } from "~/components/Typography"
import { buttonClassName } from "~/components/Button"

type LandingProps = {
  tagline: string
  description: {
    text: {
      json: Document
    }
  }
  imageUrl: string
  className?: string
}

export const Landing = ({
  tagline,
  description,
  imageUrl,
  className = "",
}: LandingProps) => {
  return (
    <section id="landing" className={`section bg-white ${className}`}>
      <div className="section-content flex flex-col items-center text-center fadeUp">
        <p className="t-eyebrow text-secondary">Hey, I'm</p>
        <Hero className="mt-1">Lindsay Bloom</Hero>
        {tagline && <Subhead className="mt-3 max-w-reading">{tagline}</Subhead>}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#contact" className={buttonClassName("primary")}>
            Get in touch
          </a>
          <Link to="/blog" className={buttonClassName("secondary")}>
            Read the blog
          </Link>
        </div>
        {imageUrl && (
          <img
            className="mt-12 w-56 lg:w-72 object-contain"
            src={imageUrl}
            alt="Lindsay's Bitmoji"
          />
        )}
        {description?.text?.json && (
          <div className="rich-text t-intro text-secondary mt-12 max-w-reading">
            {documentToReactComponents(description.text.json)}
          </div>
        )}
      </div>
    </section>
  )
}
