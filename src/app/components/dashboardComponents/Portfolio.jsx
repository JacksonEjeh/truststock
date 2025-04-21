import Link from 'next/link'
import React from 'react'

export default function Portfolio() {
  return (
    <div className='bg-white p-5 py-10 border-b'>
        <div className='w-[80%] mx-auto text-sm text-center'>
            <div className='flex items-center justify-center'>
                <img src="/images/box.png" alt="No data" className='h-12' />
            </div>
            <div className='text-center font-light text-sm'>
                <h1 className='font-semibold text-sm'>Start growing your wealth</h1>
                <Link href={'/dashboard/add-funds'} className='text-xs text-blue-500 underline'>Add funds now</Link>
            </div>
        </div>
    </div>
  )
}
