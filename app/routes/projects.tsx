import { json, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Star } from 'phosphor-react'
import Title from '~/components/Title'
import FeaturedProjects from '~/components/FeaturedProjects'

type Repo = {
  name: string
  endpoint: string
  url: string
  stars: number
  description: string
}

const GITHUB_ENDPOINT = (repository: string) => {
  return `https://api.github.com/repos/illuzan/${repository}`
}

const repository = [
  {
    name: 'aosp-extended-api',
    endpoint: GITHUB_ENDPOINT('aosp-extended-api'),
    url: 'https://github.com/illuzan/aosp-extended-api',
  },
  {
    name: 'url-shortener',
    endpoint: GITHUB_ENDPOINT('url-shortener'),
    url: 'https://www.littleurl.online/',
  },
  {
    name: 'AdaptGen',
    endpoint: GITHUB_ENDPOINT('AdaptGen'),
    url: 'https://github.com/illuzan/AdaptGen',
  },
  {
    name: 'music-player',
    endpoint: GITHUB_ENDPOINT('music-player'),
    url: 'https://github.com/illuzan/music-player',
  },
]

export async function loader(args: LoaderArgs) {
  async function getData(repo: Repo) {
    const response = await fetch(repo.endpoint)
    const data = await response.json()
    repo.stars = data.stargazers_count
    repo.description = data.description
    return repo
  }
  const data = await Promise.all(repository.map(getData))

  return json(data, {
    status: 200,
    headers: {
      'cache-control':
        'public, max-age=300, s-maxage=86400, stale-while-revalidate=31540000',
    },
  })
}

const title = 'Projects'
const description = 'A selection of personal and open source projects.'

export default function Projects() {
  let data = useLoaderData<typeof loader>()

  return (
    <>
      <Title title={title} description={description} />
      <FeaturedProjects />{' '}
      <div className='grid grid-cols-1 gap-5 mt-8 content sm:grid-cols-2 sm:gap-8 lg:max-w-screen-md-8'>
        {data.map((repo) => {
          return (
            <a
              href={repo.url}
              className='block p-4 border rounded-md shadow-sm '
              target='_blank'
              key={repo.name}
            >
              <div className='flex items-center justify-between mb-1'>
                <h3 className='text-xl font-bold'>{repo.name}</h3>
                <div className='flex'>
                  <p className='flex items-center opacity-80 space-x-0.5'>
                    <Star size={18} weight='bold' />
                    <span className='mt-0.5'>{repo.stars}</span>
                  </p>
                </div>
              </div>
              <p className='opacity-75 text-'>{repo.description}</p>
            </a>
          )
        })}
      </div>
    </>
  )
}
