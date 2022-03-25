import { Document } from "@contentful/rich-text-types"

export type ContentfulPost = {
  slug: string
  title: string
  description: string
  body: {
    json: Document
  }
  date: string
  hero: ContentfulHero
}

export type PostsQuery = {
  data: {
    blogPostCollection: {
      items: Array<ContentfulPost>
    }
  }
}

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
  fluid: Fluid
}

export type Fluid = {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
  sizes: any
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
  description: {
    json: Document
  }
  company: string
  position: string
  website: string
  startDate: string
  endDate: string
}

export type ContentfulProject = {
  node: {
    media: ContentfulImageFile
    name: string
    url: string
  }
}

export type ContentfulBlogPost = {
  node: ContentfulBlogPostBySlug
}

export type ContentfulBlogPostBySlug = {
  slug: string
  title: string
  description: {
    description: string
  }
  body: {
    json: Document
  }
  date: string
  hero: ContentfulHero
}

export type ContentfulHero = {
  url: string
  width: number
  height: number
}

export type ContentfulTool = {
  name: string
  url: string
}

export type ContentfulTools = {
  category: string
  toolsCollection: {
    items: Array<ContentfulTool>
  }
}
