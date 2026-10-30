import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "remix"
import { ContentfulPost } from "~/types"
import { SEO } from "../SEO"
import { Hero } from "../Typography"

type PostProps = {
  post: ContentfulPost
}

function getFormattedDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const Post = ({ post }: PostProps) => {
  return (
    <article className="section bg-white" id={post?.slug}>
      <SEO
        hero={post?.hero}
        title={post?.title}
        description={post?.description}
      />
      <div className="section-content-narrow">
        <Link to="/blog" className="t-caption">
          ‹ All posts
        </Link>
        <p className="t-caption text-secondary mt-8">
          {getFormattedDate(post.date)}
        </p>
        <Hero className="mt-2">{post.title}</Hero>
        {post?.description && (
          <p className="t-intro text-secondary mt-4">{post.description}</p>
        )}
      </div>
      {post.hero && (
        <div className="section-content mt-12">
          <img className="tile w-full" src={post.hero.url} alt="" />
        </div>
      )}
      <div className="section-content-narrow mt-12 rich-text t-intro">
        {documentToReactComponents(post?.body?.json)}
      </div>
    </article>
  )
}
