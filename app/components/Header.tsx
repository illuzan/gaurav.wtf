import React from 'react'
import { Link, NavLink } from '@remix-run/react'

import { ProjectIcon, DesignIcon, BlogIcon, LightModeIcon } from './Icons'

export default function Header() {
  return (
    <nav className='flex items-center justify-between mt-4 text-lg font-bold '>
      <Link to='/' className='text-xl text-gray-900'>
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
        <NavLink
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
        </NavLink>
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
        {/* <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive
              ? 'flex flex-row items-center px-4 py-2 space-x-1  bg-slate-200 rounded-xl'
              : 'flex flex-row px-5 py-3 space-x-1.5'
          }
        >
          <ProjectIcon className='w-6 h-6 ' fill='#0d0d0d' />
          <span>Projects</span>
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive
              ? 'flex flex-row px-5 py-3 space-x-1.5  bg-slate-200 rounded-xl'
              : 'flex flex-row px-5 py-3 space-x-1.5'
          }
        >
          <ProjectIcon className='w-6 h-6 ' fill='#0d0d0d' />
          <span>Projects</span>
        </NavLink> */}
        {/* <Link to='/projects' className='flex flex-row px-5 py-3 space-x-1'>
          <ProjectIcon className='w-6 h-6 ' fill='#0d0d0d' />
          Projects
        </Link> */}
        {/*
        <Link
          to='/blog'
          className='flex flex-row items-center px-5 py-3 space-x-1'
        >
          <BlogIcon className='w-5 h-5 ' fill='#0d0d0d' />
          Blog
        </Link> */}
        <LightModeIcon className='w-6 h-6 !ml-4' fill='#8c8c94' />
        {/* <button className='text-[#30304080]'>Drk</button> */}
      </div>
    </nav>
  )
}
