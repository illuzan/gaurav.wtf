import { LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import Title from '~/components/Title'
import SearchBar from '~/components/SearchBar'
// import { Post } from '.contentlayer/generated/types'
import allPosts from '.contentlayer/generated/Post/_index.json'

const Description =
  'I write about development, design, React, CSS, animation and more!'

export const loader = async (args: LoaderArgs) => {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
  return posts
}

export default function Blog() {
  const posts = useLoaderData<typeof loader>()

  return (
    <div className=''>
      <Title title='Blog' description={Description}>
        <SearchBar />
      </Title>

      {posts.length <= 0 ? (
        <div className='my-48 text-center'>
          <p>No Blog Found</p>
        </div>
      ) : (
        posts.map((post, idx) => (
          <div className='mb-16' key={idx}>
            <article className='mb-16'>
              <Link to={`${post.slug}`}>
                <img
                  className='mb-4 border border-gray-300 rounded-lg'
                  // src={post.image}
                  src='/images/gaurav.webp'
                  alt=''
                />
                <h3 className='mb-2 text-xl font-bold text-gray-700 sm:text-2xl'>
                  {post.title}
                </h3>
              </Link>
              <p className='mb-2 opacity-70 sm:text-lg'>{post.summary}</p>
              <p className='text-sm opacity-50'>
                Published on {post.publishedAt} · {post.readingTime.minutes} min
                read
              </p>
            </article>
          </div>
        ))
      )}
    </div>
  )
}
