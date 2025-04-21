import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection'
import Link from 'next/link'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

export default function page() {
  return (
    <div className='bg-gray-100 h-[100dvh]'>
        <Nav dash={true} />
        <FadeInSection>
            <div className='pt-20'>
                <div className='px-5'>
                    <div className='mb-5'>
                        <Link href={'/dashboard'} className='text-gray-500 text-xs font-light'>Dashboard /</Link>
                        <p className='font-semibold text-lg'>Refer a friend</p>
                    </div>
                    <div className="p-4 bg-purple-500/20 rounded-lg flex gap-2 mb-5">
                        <div>
                            <RiErrorWarningFill className="text-purple-500 text-2xl" />
                        </div>
                        <div>
                            <h1 className='text-xs font-semibold mb-1'>Referral program requirements not met</h1>
                            <p className="font-light text-xs">No worries. To unlock the referral program, invest at least $500 first. This ensures your familiarity and conscious recommendation of our platform. For more information, please reference our <Link href={'/dashboard/help'} className='text-blue-500'>FAQ section</Link></p>
                        </div>
                    </div>
                    <Link href={'/dashboard/invest'}>
                        <button className='w-full text-white text-xs bg-purple-800 py-3 rounded'>Invest now</button>
                    </Link>
                </div>
            </div>
        </FadeInSection>
        <div className='fixed bottom-0 left-0 right-0'>
            <Footer />
        </div>
    </div>
  )
}
