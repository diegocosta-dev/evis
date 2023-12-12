import Container from '../components/Container'
import Link from 'next/link'
import { getNotionData } from '../lib/getNotionData'

export default function Home({ posts }) {
  return (
    <Container>
      <div className="mx-auto mb-16 max-w-2xl">
        {!posts.length && <p className="mb-4 text-gray-600">No posts found.</p>}

        {posts.map((post) => {
          const postImage = post.properties['Cover Image'].files[0]
          const postImageUrl =
            postImage?.type === 'file' ? postImage.file.url : postImage?.external.url
          return (
            <div key={post.id} className="mb-8 sm:flex">
              {postImageUrl && (
                <Link
                  className="mb-10 block w-full sm:mb-0 sm:mr-5 sm:w-1/3"
                  href={`/${post.properties.Slug.rich_text[0].plain_text}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src={postImageUrl} />
                </Link>
              )}
              <Link className="w-full" href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
                <div className="w-full">
                  <h3 className="w-full text-xl font-medium text-gray-900">
                    {post.properties.Post.title[0].plain_text}
                  </h3>
                  <p className="text-gray-700">
                    {post.properties.Description.rich_text[0].plain_text}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID)

  return {
    props: {
      posts: database,
    },
  }
}
