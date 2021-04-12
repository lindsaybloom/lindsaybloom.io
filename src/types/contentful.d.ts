import { Document } from "@contentful/rich-text-types"

export type ContentfulAbout = {
  text: {
    json: Document
  }
}

export type ContentfulImage = {
  id: string
  file: ContentfulImageFile
}

export type ContentfulImageFile = {
  fixed: {
    base64: string
    tracedSVG: string
    aspectRatio: string
    srcWebp: string
    srcSetWebp: string
    sizes: any
  }
  fluid: {
    base64: string
    aspectRatio: string
    src: string
    srcSet: string
    srcWebp: string
    srcSetWebp: string
    sizes: any
  }
}

export type ContentfulMetadata = {
  metadata: {
    title: string
    contentfulid: string
    author: string
    language: string
    description: {
      description: string
    }
  }
}

export type ContentfulJob = {
  node: {
    description: {
      json: Document
    }
    company: string
    position: string
    website: string
    startDate: Date
    endDate: Date
  }
}

export type ContentfulProject = {
  node: {
    media: ContentfulImageFile
    name: string
    url: string
  }
}
