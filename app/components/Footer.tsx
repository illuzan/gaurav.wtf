import { Link } from '@remix-run/react'
import React from 'react'

const Footer = (): JSX.Element => (
  <div className='flex flex-col py-6 mt-8 border-t opacity-80'>
    <div className='flex justify-between'>
      <p>Built with Remix, MDX and Tailwind</p>
      <div className='space-x-4'>
        <a href=''>Twitter</a>
        <a href=''>GitHub</a>
      </div>
    </div>
    {/* <div className='py-4'>
      <p className='text-center opacity-50'>
        &copy; Gaurav Singh {new Date().getFullYear()}
      </p>
    </div> */}
  </div>
)
export default Footer
