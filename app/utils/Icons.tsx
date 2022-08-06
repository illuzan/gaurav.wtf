type IconType = {
  className: string
  alt?: string
  // 'aria-hidden'?: string
}

function GitHubIcon(props: IconType) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22'></path>
    </svg>
  )
}

function TwitterIcon(props: IconType) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
    </svg>
  )
}

function ResumeIcon(props: IconType) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z'></path>
      <path d='M14 2L14 8 20 8'></path>
      <path d='M16 13L8 13'></path>
      <path d='M16 17L8 17'></path>
      <path d='M10 9L9 9 8 9'></path>
    </svg>
  )
}

function SearchIcon(props: IconType) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      {...props}
    >
      <circle cx='11' cy='11' r='8'></circle>
      <path d='M21 21L16.65 16.65'></path>
    </svg>
  )
}

function RSSIcon(props: IconType) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M4 11a9 9 0 019 9M4 4a16 16 0 0116 16'></path>
      <circle cx='5' cy='19' r='1'></circle>
    </svg>
  )
}

export { GitHubIcon, TwitterIcon, ResumeIcon, SearchIcon, RSSIcon }
