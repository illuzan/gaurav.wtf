export default function FeaturedProjects() {
  return (
    <>
      <div className='flex flex-row'>
        <article className='flex-1 mt-6 overflow-hidden border rounded-lg bg-slate-100 hover:bg-slate-200/80'>
          <img
            className='transition-transform duration-500 ease-in-out rounded-t-lg rounded-b-sm hover:scale-105'
            src='/images/notionfeedback.webp'
            alt=''
          />
          <div className='flex flex-col p-4 transition-colors duration-200 ease-in-out'>
            <h3 className='font-medium text-gray-900'>Notion Feedback</h3>
            <p className='mt-1 text-gray-600'>
              Save feedback directly in notion
            </p>
            <p className='mt-2'>
              <a
                href='https://notionfeedback.xyz/'
                className='text-sky-500 hover:text-sky-600 hover:underline'
              >
                Visit Webiste
              </a>
            </p>
          </div>
        </article>
      </div>
      <div className='flex flex-col sm:flex-row sm:gap-4 '>
        <article className='flex-1 mt-6 overflow-hidden border rounded-lg bg-slate-100 hover:bg-slate-200/80'>
          <img
            className='transition-transform duration-500 ease-in-out rounded-t-lg rounded-b-sm hover:scale-105'
            src='/images/aospextended.webp'
            alt=''
          />
          <div className='flex flex-col p-4 transition-colors duration-200 ease-in-out'>
            <h3 className='font-medium text-gray-900'>AOSP Extended</h3>
            <p className='mt-1 text-gray-600'>Open Source Custom Android OS</p>
            <p className='mt-2'>
              <a
                href='https://aosp-extended.vercel.app/'
                className='text-sky-500 hover:text-sky-600 hover:underline'
              >
                Visit Webiste
              </a>
              &nbsp;·&nbsp;
              <a
                href='https://github.com/illuzan/aosp-extended'
                className='text-sky-500 hover:text-sky-600 hover:underline'
              >
                View Source
              </a>
            </p>
          </div>
        </article>
        <article className='flex-1 mt-6 overflow-hidden border rounded-lg bg-slate-100 hover:bg-slate-200/80'>
          <img
            className='transition-transform duration-500 ease-in-out rounded-t-lg rounded-b-sm hover:scale-105'
            src='/images/heybin.webp'
            alt=''
          />
          <div className='flex flex-col p-4 transition-colors duration-200 ease-in-out'>
            <h3 className='font-medium text-gray-900'>Heybin</h3>
            <p className='mt-1 text-gray-600'>
              A lightweight pastebin and URL shortener
            </p>
            <p className='mt-2'>
              <a
                href='https://heyb.in/'
                className='text-sky-500 hover:text-sky-600 hover:underline'
              >
                Visit Webiste
              </a>
              &nbsp;·&nbsp;
              <a
                href='https://github.com/illuzan/heybin'
                className='text-sky-500 hover:text-sky-600 hover:underline'
              >
                View Source
              </a>
            </p>
          </div>
        </article>
      </div>
    </>
  )
}
