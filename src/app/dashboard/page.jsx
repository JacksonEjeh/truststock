'use client'
import React, { useState } from 'react'
import Nav from '../components/dashboardComponents/Nav'
import { TfiReload } from "react-icons/tfi";
import Faq from '../components/Faq';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Link from 'next/link';
import Footer from '../components/dashboardComponents/Footer';
import FadeInSection from '../components/FadeInSection';

export default function page() {
    const [showAmount, setShowAmount] = useState(false);
    const showAmountBtn = () => {
        setShowAmount(!showAmount);
    }
  return (
    <div className='bg-gray-100'>
        <Nav dash={true} />
        <FadeInSection>
        <div className='pt-20'>
            <div className='px-5'>
                <div className='mb-5'>
                    <p className='text-gray-500 text-xs font-light'>Dashboard /</p>
                    <p className='font-semibold text-lg'>Overview</p>
                </div>
                <div className='grid grid-cols-3'>
                    <div>
                        <button className='border-b-2 border-purple-800 text-sm px-2 py-1 w-full font-light'>Balance</button>
                    </div>
                    <div>
                        <button className='border-b-2 focus:border-purple-800 text-gray-400 font-light focus:text-black text-sm px-2 py-1 w-full'>Returns</button>
                    </div>
                    <div>
                        <button className='border-b-2 focus:border-purple-800 text-gray-400 font-light focus:text-black text-sm px-2 py-1 w-full'>Portfolio</button>
                    </div>
                </div>
            </div>
            <div className='bg-white p-5 border-b'>
                <div className='mb-3 flex items-center justify-between'>
                    <div>
                        <p className='text-gray-500 text-sm font-light'>Available to invest</p>
                        <p className='text-gray-900 text-2xl font-bold'>{ showAmount ? '$10,000.00' : '**********' }</p>
                    </div>
                    <div>
                        {
                            showAmount ? (
                                <button onClick={showAmountBtn} className='bg-gray-200 rounded-full p-1'>
                                    <IoMdEyeOff className='text-2xl' />
                                </button>
                            ):(
                                <button onClick={showAmountBtn} className='bg-gray-200 rounded-full p-1'>
                                    <IoMdEye className='text-2xl' />
                                </button>
                            )
                        }
                    </div>
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <p className='text-gray-500 text-sm font-light'>Invested funds</p>
                    <p className='text-gray-900 text-sm font-semibold'>{ showAmount ? '$7,000.00' : '*****' }</p>
                </div>
                <div className='flex items-center justify-between border-b pb-3'>
                    <p className='text-gray-500 text-sm font-light'>Pending payments</p>
                    <p className='text-gray-900 text-sm font-semibold'>{ showAmount ? '$500.00' : '*****' }</p>
                </div>
                <div className='flex items-center justify-between  pt-3'>
                    <p className='text-gray-900 text-sm font-light'>Total value</p>
                    <p className='text-gray-900 text-sm font-semibold'>{ showAmount ? '$17,500.00' : '*****' }</p>
                </div>
            </div>
            <div className='p-5'>
                <div className='grid grid-cols-2 gap-5'>
                    <Link href={'/dashboard/invest'}>
                        <button className='bg-purple-800 text-white w-full py-2 border-2 border-purple-800 font-semibold text-sm rounded-full'>Invest now</button>
                    </Link>
                    <Link href={'/dashboard/add-funds'}>
                        <button className='border-purple-800 border-2 text-purple-800 font-semibold w-full py-2 text-sm rounded-full'>Add funds</button>
                    </Link>
                </div>
            </div>
            <div className='p-5 bg-white'>
                <div className='flex items-center justify-between mb-3'>
                    <p className='text-sm font-semibold'>Last Transactions</p>
                    <TfiReload className='text-gray-400 text-sm hover:text-gray-600' />
                </div>
                <div className='border rounded-lg p-3 flex items-center justify-between mb-2'>
                    <div>
                        <small>2025.03.02 17:43:03</small>
                        <p>Account deposit</p>
                        <small className='text-green-500'>Confirmed</small>
                    </div>
                    <div>
                        <p className='text-green-500 text-sm'>+$500.00</p>
                    </div>
                </div>
                <FadeInSection>
                    <div className='border rounded-lg p-3 flex items-center justify-between mb-2'>
                        <div>
                            <small>2025.03.02 17:43:03</small>
                            <p>Account deposit</p>
                            <small className='text-red-500'>Rejected</small>
                        </div>
                        <div>
                            <p className='text-red-500 text-sm'>+$300.00</p>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='border rounded-lg p-3 flex items-center justify-between mb-2'>
                        <div>
                            <small>2025.03.02 17:43:03</small>
                            <p>Account deposit</p>
                            <small className='text-yellow-500'>Pending</small>
                        </div>
                        <div>
                            <p className='text-yellow-500 text-sm'>+$430.00</p>
                        </div>
                    </div>
                </FadeInSection>
            </div>
            {/* <Faq /> */}
            <Footer />
        </div>
        </FadeInSection>
    </div>
  )
}
