'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Nav from '../components/dashboardComponents/Nav';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GoDotFill } from 'react-icons/go';


export default function page() {

  return (
    <div className='h-screen flex items-center justify-center'>
      <nav className='p-4 bg-white z-20 flex items-center justify-between fixed top-0 left-0 right-0'>
        <Link href={'/'} className="text-black font-bold text-lg flex items-end">TRUSTSTOCK<span className="text-purple-800 "><GoDotFill /></span></Link>
          <div className='flex items-center'>
              <p className='text-sm'>EN</p>
              <RiArrowDropDownLine className='text-xl'/>
          </div>
      </nav>
      <div>
        <div>
          <h1 className='text-2xl mb-5 font-bold text-center'>Welcome back</h1>
          <div className='w-screen px-4'>
            <label className="input input-bordered flex items-center gap-2 mb-5 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input type="password" className="grow" placeholder='Password' />
            </label>
          </div>
          <div className='px-4 flex justify-between items-center my-3'>
            <p className='text-xs text-purple-800'>Reset password</p>
            <Link href={'/sign-up'} className='text-xs text-purple-800'>Create account</Link>
          </div>
          <Link href={'/dashboard'} >
          <div className='px-4'>
            <button className='text-white bg-purple-800 w-full py-3 rounded-full'>Sign in</button>
          </div>
          </Link>
        </div>
      </div>
      <footer className='fixed bottom-0 left-0 right-0 p-4'>
        <p className='text-center text-xs text-gray-500'>&copy;2023 Truststock. All rights reserved.</p>
      </footer>
    </div>
  )
}
