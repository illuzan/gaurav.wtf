function ProjectIcon(props) {
  return (
    <svg viewBox='0 0 256 256' {...props}>
      <path fill='none' d='M0 0H256V256H0z'></path>
      <path d='M216 72h-84.7L104 44.7A16.1 16.1 0 0092.7 40H40a16 16 0 00-16 16v144.6A15.4 15.4 0 0039.4 216h177.5a15.2 15.2 0 0015.1-15.1V88a16 16 0 00-16-16zM40 56h52.7l16 16H40z'></path>
    </svg>
  )
}

function DesignIcon(props) {
  return (
    <svg viewBox='0 0 256 256' {...props}>
      <path fill='none' d='M0 0H256V256H0z'></path>
      <path d='M216 24H72a40 40 0 00-40 40v72a24.1 24.1 0 0024 24h46.8l-6.7 46.9a3.7 3.7 0 00-.1 1.1 32 32 0 0064 0 3.7 3.7 0 00-.1-1.1l-6.7-46.9H200a24.1 24.1 0 0024-24V32a8 8 0 00-8-8zM72 40h104v40a8 8 0 0016 0V40h16v64H48V64a24.1 24.1 0 0124-24z'></path>
    </svg>
  )
}

function BlogIcon(props) {
  return (
    <svg viewBox='0 0 256 256' {...props}>
      <path fill='none' d='M0 0H256V256H0z'></path>
      <path d='M216 32v160a8 8 0 01-8 8H72a16 16 0 00-16 16h136a8 8 0 010 16H48a8 8 0 01-8-8V56a32.1 32.1 0 0132-32h136a8 8 0 018 8z'></path>
    </svg>
  )
}

function LightModeIcon(props) {
  return (
    <svg viewBox='0 0 256 256' {...props}>
      <path fill='none' d='M0 0H256V256H0z'></path>
      <circle cx='128' cy='128' r='68'></circle>
      <path d='M128 44a8 8 0 008-8V16a8 8 0 00-16 0v20a8 8 0 008 8zM57.3 68.6a8.1 8.1 0 0011.3 0 8 8 0 000-11.3L54.5 43.1a8.1 8.1 0 10-11.4 11.4zM44 128a8 8 0 00-8-8H16a8 8 0 000 16h20a8 8 0 008-8zM57.3 187.4l-14.2 14.1a8.1 8.1 0 000 11.4 8.5 8.5 0 005.7 2.3 8.3 8.3 0 005.7-2.3l14.1-14.2a8 8 0 00-11.3-11.3zM128 212a8 8 0 00-8 8v20a8 8 0 0016 0v-20a8 8 0 00-8-8zM198.7 187.4a8 8 0 00-11.3 11.3l14.1 14.2a8.3 8.3 0 005.7 2.3 8.5 8.5 0 005.7-2.3 8.1 8.1 0 000-11.4zM240 120h-20a8 8 0 000 16h20a8 8 0 000-16zM193.1 70.9a7.8 7.8 0 005.6-2.3l14.2-14.1a8.1 8.1 0 00-11.4-11.4l-14.1 14.2a8 8 0 000 11.3 7.8 7.8 0 005.7 2.3z'></path>
    </svg>
  )
}

export { ProjectIcon, DesignIcon, BlogIcon, LightModeIcon }
