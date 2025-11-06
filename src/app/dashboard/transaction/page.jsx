import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import Transactions from '@/app/components/dashboardComponents/Transactions'
import FadeInSection from '@/app/components/FadeInSection'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-100 h-screen overflow-y-auto'>
        <Nav dash={true} />
        <FadeInSection>
            <div className='pt-20'>
                <div className='px-5'>
                    <div className='mb-5'>
                        <Link href={'/dashboard'} className='text-gray-500 text-xs font-light'>Dashboard /</Link>
                        <p className='font-semibold text-lg'>Transactions</p>
                    </div>
                    <div className='pb-20'>
                        <Transactions />
                    </div>
                </div>
            </div>
        </FadeInSection>
        <Footer />
    </div>
  )
}
