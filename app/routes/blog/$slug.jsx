import { useParams } from '@remix-run/react'
import React from 'react'
// import { allPosts } from 'contentlayer/generated'
export default function Post() {
  const { slug } = useParams()
  console.log(slug)
  return (
    <div>Bruh</div>
  )
}
