import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-100'>
        <Nav dash={true} />
        <FadeInSection>
            <div className='pt-20'>
                <div className='px-5'>
                    <div className='mb-10'>
                        <Link href={'/dashboard'} className='text-gray-500 text-xs font-light'>Dashboard /</Link>
                        <p className='font-semibold text-lg'>Portfolio</p>
                    </div>
                </div>
                <div className='w-[80%] mx-auto text-sm text-center h-screen'>
                    <div className='flex items-center justify-center'>
                        <img src="/images/box.png" alt="No data" className='h-14' />
                    </div>
                    <div className='text-center font-light pb-14 text-sm'>No data to show</div>
                </div>
            </div>
        </FadeInSection>
        <Footer />
    </div>
  )
}
