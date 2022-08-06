type TitleProps = {
  title: string
  description?: string
  children?: JSX.Element
}

const Title = ({ title, description, children }: TitleProps): JSX.Element => (
  <div className='mb-12'>
    <h1 className='mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:mb-4'>
      {title}
    </h1>
    {description && (
      <p className='text-base font-medium mb-7 sm:text-lg opacity-80'>
        {description}
      </p>
    )}
    {children}
  </div>
)

export default Title
