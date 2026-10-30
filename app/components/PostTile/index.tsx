import { H3, Text } from "~/components/Typography"
import { ContentfulPost } from "~/types"
import { Link } from "remix"

type PostTileProps = {
  post: ContentfulPost
}

export const PostTile = ({ post }: PostTileProps) => {
  return (
    <Link
      to={post.slug}
      className="tile group flex flex-col h-full bg-white overflow-hidden text-ink hover:no-underline transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
    >
      {post.hero && (
        <div className="aspect-video overflow-hidden bg-cloud">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            src={post.hero.url}
            alt=""
          />
        </div>
      )}
      <div className="p-6 lg:p-8 flex flex-col flex-1">
        <H3>{post?.title}</H3>
        {post?.description && (
          <Text className="mt-2 text-secondary">{post.description}</Text>
        )}
        <span className="mt-auto pt-5 t-body text-link link-chevron">
          Read more
        </span>
      </div>
    </Link>
  )
}
