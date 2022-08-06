import { HeadersFunction } from '@remix-run/node'
import { DribbbleLogo, FileText, GitBranch } from 'phosphor-react'
import FeaturedProjects from '~/components/FeaturedProjects'

export const headers: HeadersFunction = ({
  actionHeaders,
  loaderHeaders,
  parentHeaders,
}) => {
  return {
    'cache-control':
      'public, max-age=300, s-maxage=86400, stale-while-revalidate=31540000',
  }
}

const links = [
  {
    name: 'Github',
    url: 'https://github.com/illuzan',
    icon: GitBranch,
    color: 'bg-emerald-500',
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/illuzan',
    icon: DribbbleLogo,
    color: 'bg-red-500',
  },
  {
    name: 'Resume',
    url: 'https://read.cv/gauravsingh',
    icon: FileText,
    color: 'bg-sky-500',
  },
]

export default function Index() {
  return (
    <div>
      <div className='container mx-auto mt-24'>
        <div className='flex-row-reverse lg:space-x-5 lg:flex item-center lg:-mx-4'>
          <div className='flex-shrink-0 hidden mt-12 lg:ml-6 sm:block lg:px-4 lg:mt-2'>
            <img className='w-48 h-48' src='/images/gaurav.webp' alt='' />
          </div>
          <div className='flex-shrink-0 mt-12 lg:ml-6 sm:hidden lg:px-4 lg:mt-0'>
            <img className='w-24 h-24' src='/images/gaurav.webp' alt='' />
          </div>
          <div className=''>
            <h1 className='text-2xl font-bold text-gray-900 lg:text-4xl'>
              Hi there, I'm Gaurav.
            </h1>
            <div className='mt-4 text-gray-800'>
              {/* <p>
                I’m a frontend developer & designer based in Delhi, India. I enjoy
                building digital products, solving problems, and crafting
                delightful experiences.
              </p>
              <p className='mt-2'>
                I work on{' '}
                <a
                  href='https://github.com/AospExtended'
                  className='font-bold transition-colors hover:text-emerald-500'
                >
                  AOSP Extended
                </a>{' '}
                &mdash; an open source project doing all <br />
                sort of random stuff.
              </p> */}
              <p>
                I’m a frontend developer based in Delhi, India. I work on{' '}
                <a
                  href='https://github.com/AospExtended'
                  className='font-bold transition-colors hover:text-emerald-500'
                >
                  AOSP Extended
                </a>{' '}
                &mdash; an open source project doing all <br />
                sort of random stuff.
              </p>
              <p className='mt-2'>
                Let's hang out on{' '}
                <a
                  href='https://twitter.com/illuzan'
                  className='font-bold transition-colors hover:text-sky-500'
                  target='_blank'
                >
                  Twitter
                </a>
                .
              </p>
            </div>
            <div className='flex flex-wrap gap-4 mt-8 text-center'>
              {links.map((link) => (
                <a
                  className={`${link.color} focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md  py-2 px-2.5 font-medium text-white shadow-lg shadow-emerald-500/10 transition hover:${link.color}/80  sm:w-auto sm:px-3 sm:pl-2.5`}
                  href={link.url}
                  target='_blank'
                  key={link.name}
                >
                  <link.icon
                    size={20}
                    aria-hidden='true'
                    weight='bold'
                    color='#ffffff'
                  />
                  <span className='hidden sm:inline'>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h2 className='mt-20 mb-10 text-2xl font-bold text-gray-900 lg:text-4xl '>
        Featured Projects
      </h2>
      {/* <Project /> */}
      <FeaturedProjects />
    </div>
  )
}
