import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ContentfulPost } from "~/types"
import { SEO } from "../SEO"
import { H1, Text } from "../Typography"

type PostProps = {
  post: ContentfulPost
}

function getFormattedDate(dateString: string) {
  const date = new Date(dateString)
  const year = date.getFullYear()

  let month = (1 + date.getMonth()).toString()
  month = month.length > 1 ? month : "0" + month

  let day = date.getDate().toString()
  day = day.length > 1 ? day : "0" + day

  return month + "/" + day + "/" + year
}

export const Post = ({ post }: PostProps) => {
  return (
    <article className="post py-3 text-grayLightest" id={post?.slug}>
      <SEO
        hero={post?.hero}
        title={post?.title}
        description={post?.description}
      />
      {post.hero && <img src={post?.hero?.url} />}
      <Text className="mb-2">{getFormattedDate(post.date)}</Text>
      <H1 className="py-3">{post.title}</H1>
      {documentToReactComponents(post?.body?.json)}
    </article>
  )
}
