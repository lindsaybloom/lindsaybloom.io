import React from "react"
import { H1, Text } from "~/components/Typography"
import { ContentfulPost } from "~/types"
import { Link } from "remix"

type PostTileProps = {
  post: ContentfulPost
}

export const PostTile = ({ post }: PostTileProps) => {
  return (
    <>
      {post.hero ? (
        <div className="flex flex-col lg:flex-row mb-6">
          <div className="w-full m-auto">
            <img className="object-contain" src={post.hero.url} />
          </div>
          <Link to={post.slug} className="lg:pl-3">
            <H1 className="mb-3">{post?.title}</H1>
            <Text>{post?.description}</Text>
          </Link>
        </div>
      ) : (
        <Link to={post.slug} className="mb-6">
          <H1 className="mb-3">{post?.title}</H1>
          <Text>{post?.description}</Text>
        </Link>
      )}
    </>
  )
}
