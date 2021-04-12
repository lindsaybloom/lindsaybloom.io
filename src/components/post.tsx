import React from "react"
import { Heading, ResponsiveContext } from "grommet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ContentfulBlogPostBySlug } from "../types/contentful"

type PostProps = {
  post: ContentfulBlogPostBySlug
}

const Post = ({ post }: PostProps) => {
  const size = React.useContext(ResponsiveContext)

  return (
    <article id="post">
      <ResponsiveContext.Consumer>
        {size => (
          <>
            <Heading>{post.title}</Heading>
            {documentToReactComponents(post.body.json)}
          </>
        )}
      </ResponsiveContext.Consumer>
    </article>
  )
}

export default Post
