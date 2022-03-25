import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Reactjs, Js, Cart, CreditCard } from "grommet-icons"
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
      <div className="sm:pb-100 lg:pb-300 sm:pt-0 lg:pt-100">
        <div className="flex sm:flex-col lg:flex-row items-baseline justify-start">
          <Text>Hey, I'm</Text>
          <H1 className="ml-3 mb-3">Lindsay Bloom</H1>
        </div>
        <div>
          <H1 className="mt-0">{tagline}</H1>
        </div>
        <div className="relative flex justify-between">
          <div className="flex sm:w-full lg:w-7/12 sm:pt-300 lg:pt-0">
            {documentToReactComponents(description.text.json)}
          </div>
          <div className="flex absolute right-1 sm:bottom-1/2 lg:-bottom-1/2">
            <img className="object-contain" src={imageUrl} />
          </div>
        </div>
        <div className="landing-icons flex justify-evenly mt-6 sm:w-full lg:w-7/12">
          <Reactjs />
          <Js id="js-icon" />
          <Cart id="cart-icon" />
          <CreditCard id="cc-icon" />
        </div>
      </div>
    </section>
  )
}
