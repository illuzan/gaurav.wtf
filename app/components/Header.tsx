import { Link, NavLink } from '@remix-run/react'
import { BlogIcon, LightModeIcon, ProjectIcon } from './Icons'

export default function Header() {
  return (
    <nav className='flex items-center justify-between mt-4 mb-16 text-lg font-medium '>
      <Link to='/' className='text-xl font-bold opacity-80 text-slate-700'>
        Gaurav Singh
      </Link>
      <div className='flex flex-row items-center space-x-1'>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            `flex flex-row  px-3 py-2 space-x-1 rounded-lg hover:bg-neutral-100 transition-all duration-300 ${
              isActive ? 'bg-[#1fb8ff] bg-opacity-10' : 'text-[#8c8c94]'
            }`
          }
        >
          {({ isActive }) =>
            isActive ? (
              <>
                <ProjectIcon className='w-6 h-6 ' fill='#1fb8ff' />
                <span className='text-[#1fb8ff]'>Projects</span>
              </>
            ) : (
              <>
                <ProjectIcon className='w-6 h-6 ' fill='#8c8c94' />
                <span className='text-[#8c8c94]'>Projects</span>
              </>
            )
          }
        </NavLink>
        {/* <NavLink
          to='/design'
          className={({ isActive }) =>
            `flex flex-row  px-3 py-2 space-x-1 rounded-lg items-center  hover:bg-neutral-100 transition-all duration-300 ${
              isActive ? 'bg-[#1fb8ff] bg-opacity-10' : 'text-[#8c8c94]'
            }`
          }
        >
          {({ isActive }) =>
            isActive ? (
              <>
                <DesignIcon className='w-6 h-6 ' fill='#1fb8ff' />
                <span className='text-[#1fb8ff]'>Design</span>
              </>
            ) : (
              <>
                <DesignIcon className='w-6 h-6 ' fill='#8c8c94' />
                <span className='text-[#8c8c94]'>Design</span>
              </>
            )
          }
        </NavLink> */}
        <NavLink
          to='/blog'
          className={({ isActive }) =>
            `flex flex-row  px-3 py-2 space-x-1 rounded-lg items-center  hover:bg-neutral-100 transition-all duration-300 ${
              isActive ? 'bg-[#1fb8ff] bg-opacity-10' : 'text-[#8c8c94]'
            }`
          }
        >
          {({ isActive }) =>
            isActive ? (
              <>
                <BlogIcon className='w-6 h-6 ' fill='#1fb8ff' />
                <span className='text-[#1fb8ff]'>Blog</span>
              </>
            ) : (
              <>
                <BlogIcon className='w-6 h-6 ' fill='#8c8c94' />
                <span className='text-[#8c8c94]'>Blog</span>
              </>
            )
          }
        </NavLink>
        <LightModeIcon className='w-6 h-6 !ml-4' fill='#8c8c94' />
      </div>
    </nav>
  )
}
