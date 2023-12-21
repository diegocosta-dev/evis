import Link from 'next/link'
import Container from '../components/Container'
import Profile from '../components/Profile'
import Header from '../components/Header'
import Image from 'next/image'

import { getNotionData } from '../lib/getNotionData'

export default function Home({ posts }) {
  return (
    <Container title="Evis (Experiência Virtual Imersiva em Saúde)">
      <div className='mx-auto flex max-w-screen-xl flex-col gap-16 px-10 py-16'>
        <div className='flex flex-col-reverse justify-between lg:flex-row lg:items-center'>
          <div className='flex w-full max-w-[480px] flex-col gap-3'>
            <h1 className='text-5xl font-bold uppercase text-blue'>Evis</h1>
            <p className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper, ante ac tempor ultrices, mi mauris porttitor nisl, vitae ornare tellus
            </p>

            <Link href="/contact" className="w-fit rounded bg-blue p-[14px] text-center text-white transition-all hover:bg-ligth-blue">
              Contact Us
            </Link>
          </div>

          <div className='flex aspect-square w-full items-center justify-center lg:w-[550px]'>
            3D Logo Here
          </div>
        </div>

        <div className='flex flex-col items-center gap-8'>
          <Header title='Our team'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper, ante ac tempor ultrices, mi mauris porttitor nisl, vitae ornare tellus
          </Header>

          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
            <Profile name="Luiz Alipio" position="CEO - Chief Executive Officer" />
            <Profile name="Irina Paiva" position="CSO - Chief Science Officer" />
            <Profile name="Luis Felipe" position="CTO - Chief Technical Officer" />
            <Profile name="Leandro Alves" position="CDO - Chief Design Officer" />
          </div>
        </div>

        <div className='flex flex-col items-center gap-8'>
          <Header title='Our Partners'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper, ante ac tempor ultrices, mi mauris porttitor nisl, vitae ornare tellus
          </Header>

          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
            <Image
              src={"/no-profile.jpg"}
              width={300}
              height={300}
              alt="Partners Logo"
            />
            <Image
              src={"/no-profile.jpg"}
              width={300}
              height={300}
              alt="Partners Logo"
            />
            <Image
              src={"/no-profile.jpg"}
              width={300}
              height={300}
              alt="Partners Logo"
            />
            <Image
              src={"/no-profile.jpg"}
              width={300}
              height={300}
              alt="Partners Logo"
            />
          </div>
        </div>

        <div className='flex flex-col items-center gap-8'>
          <Header title='Blog'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper, ante ac tempor ultrices, mi mauris porttitor nisl, vitae ornare tellus
          </Header>

          <div className="flex w-full flex-col gap-16">
            {posts.length ? posts.map((post) => {
              const postImage = post.properties['Cover Image'].files[0]
              const postImageUrl = postImage?.file?.url ?? postImage?.external.url ?? '/no-profile.jpg'
              return (
                <div key={post.id} className="flex flex-col gap-10 md:flex-row">
                  {postImageUrl && (
                    <Link
                      className="w-full md:max-w-[400px]"
                      href={`/${post.properties.Slug.rich_text[0].plain_text}`}
                    >
                      <div className='overflow-hidden lg:max-w-[400px]'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={postImageUrl} 
                          alt={post.properties.Post.title[0].plain_text}
                          className='aspect-[4/3] w-full object-cover' 
                        />
                      </div>
                    </Link>
                  )}
                  <Link className="w-full" href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
                    <div className="w-full">
                      <h3 className="w-full text-xl font-medium text-gray-700">
                        {post.properties.Post.title[0].plain_text}
                      </h3>
                      <p className="text-gray-700">
                        {post.properties.Description.rich_text[0].plain_text}
                      </p>
                    </div>
                  </Link>
                </div>
              )
            }) : <p className="mb-4 text-gray-700">No posts found.</p>}
           </div>
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID);

  // Limit the number of posts to 3
  const limitedPosts = database.slice(0, 3);

  return {
    props: {
      posts: limitedPosts,
    },
  };
};