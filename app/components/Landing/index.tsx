import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { SiReact, SiJavascript } from "react-icons/si"
import { BsCreditCard, BsCart3 } from "react-icons/bs"
import { Document } from "@contentful/rich-text-types"
import { Text, H1 } from "~/components/Typography"

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
  className,
}: LandingProps) => {
  return (
    <section id="landing" className={className}>
      <div className="pb-100 lg:pb-300 pt-0 lg:pt-100">
        <div className="flex flex-col lg:flex-row items-baseline justify-start">
          <Text>Hey, I'm</Text>
          <H1 className="mt-3 lg:mt-0 lg:ml-3 mb-3">Lindsay Bloom</H1>
        </div>
        <H1 className="mt-0 lg:w-3/4 mb-3">{tagline}</H1>
        <div className="lg:hidden mt-4 mb-6 flex justify-center">
          <img
            className="object-contain"
            src={imageUrl}
            alt="Lindsay's Bitmoji"
          />
        </div>
        <div className="relative flex flex-col lg:flex-row justify-between">
          <div className="flex w-full lg:w-7/12 pt-300 lg:pt-0">
            {documentToReactComponents(description.text.json)}
          </div>
          <div className="hidden lg:flex lg:absolute right-1 bottom-1/2 lg:-bottom-[90%] xl:-bottom-[150%]">
            <img
              className="object-contain"
              src={imageUrl}
              alt="Lindsay's Bitmoji"
            />
          </div>
        </div>
        <div className="landing-icons flex justify-evenly mt-6 w-full lg:w-7/12">
          <SiReact />
          <SiJavascript id="js-icon" />
          <BsCart3 id="cart-icon" />
          <BsCreditCard id="cc-icon" />
        </div>
      </div>
    </section>
  )
}
