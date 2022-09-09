import { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useParams } from '@remix-run/react'
import React from 'react'
import { useMDXComponent } from '~/hooks/useMDXComponent'
import allPosts from '.contentlayer/generated/Post/_index.json'

export const loader = async (args: LoaderArgs) => {
  const post = allPosts.find((post) => post.slug === args.params.slug)
console.log(post?.slug)
  return post
}

export default function Post() {
  const singleBlogData = useLoaderData<typeof loader>()
  const Component = useMDXComponent(singleBlogData.body.code)
  return (
    <div className='mx-auto prose-lg'>
      <Component />
    </div>
  )
}
