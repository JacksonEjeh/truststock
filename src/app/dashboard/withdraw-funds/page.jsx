import AvailableFunds from '@/app/components/dashboardComponents/AvailableFunds'
import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection'
import Link from 'next/link'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

export default function page() {
  return (
    <div className='bg-gray-100'>
        <Nav dash={true} />
        <FadeInSection>
            <div className='pt-20'>
                <div className='px-5 pb-14'>
                    <div className='mb-5'>
                        <Link href={'/dashboard'} className='text-gray-500 text-xs font-light'>Dashboard /</Link>
                        <p className='font-semibold text-lg'>Withdraw funds</p>
                    </div>
                    <div className="p-4 bg-purple-500/20 rounded-lg flex gap-2 mb-5">
                        <div>
                            <RiErrorWarningFill className="text-purple-500 text-2xl" />
                        </div>
                        <p className="font-light text-xs">Withdrawal requests are processed within 24 hours. Minimum withdrawal amount is $100. if you have any further question about withdrawal of funds, please reference our <Link href={'/dashboard/help'} className='text-blue-500'>FAQ section</Link></p>
                    </div>
                    <div className='border-b border-gray-200 mb-5'>
                        <AvailableFunds />
                    </div>
                    <div>
                        <input type="text" className='rounded w-full py-3 px-4 outline-none focus:shadow text-sm font-light mb-5' placeholder='Amount to withdraw' />
                        <select className=" select rounded w-full py-3 px-4 outline-none focus:shadow text-sm font-light mb-5">
                            <option value={'BTC'}>BTC</option>
                            <option value="LTC">LTC</option>
                            <option value="USDT">USDT TRC20</option>
                        </select>
                        <input type="text" className='rounded w-full py-3 px-4 outline-none focus:shadow text-sm font-light mb-10' placeholder='Crypto wallet' />
                        <button className='w-full py-3 bg-purple-800 text-white text-sm rounded'>Withdraw funds</button>
                    </div>
                </div>
            </div>
        </FadeInSection>
        <Footer />
    </div>
  )
}
