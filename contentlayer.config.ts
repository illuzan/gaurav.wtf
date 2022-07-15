import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

const getSlug = (document) => document._raw.sourceFileName.replace(/\.mdx$/, '')

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (document) => getSlug(document),
  },
  image: {
    type: 'string',
    resolve: (document) => `/blog/${getSlug(document)}/image.png`,
  },
  og: {
    type: 'string',
    resolve: (document) => `/blog/${getSlug(document)}/og.png`,
  },
  readingTime: {
    type: 'json',
    resolve: (document) => readingTime(document.body.raw),
  },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    updatedAt: { type: 'string', required: false },
    tags: { type: 'json', required: false },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'data/blog',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
})
