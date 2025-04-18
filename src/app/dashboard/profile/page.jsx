import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='bg-gray-100'>
            <Nav dash={true} />
            <div className='pt-20'>
                <div className='px-5'>
                    <div className='mb-10'>
                        <Link href={'/dashboard'} className='text-gray-500 text-xs font-light'>Dashboard /</Link>
                        <p className='font-semibold text-lg'>Profile</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
  }
