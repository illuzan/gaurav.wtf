import { ChangeEvent } from 'react'
import { SearchIcon } from '~/utils/Icons'

type InputProps = {
  disabled?: boolean
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void // eslint-disable-line
}
const SearchBar = ({ disabled, value, onChange }: InputProps): JSX.Element => (
  <div className='relative w-full'>
    <input
      aria-label='Search articles'
      type='text'
      placeholder='Search articles'
      className='block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 hover::active:focus:border-blue-400 hover:active:focus:shadow-blue-200 hover:'
    />
    <SearchIcon className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300' />
  </div>
)

export default SearchBar
