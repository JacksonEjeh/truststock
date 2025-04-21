'use client'
import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export default function Balance({ showAmountBtn, showAmount }) {
    
  return (
    <div className='bg-white p-5 border-b'>
        <div className='mb-3 flex items-center justify-between'>
            <div>
                <p className='text-gray-500 text-sm font-light'>Available to invest</p>
                <p className='text-gray-900 text-2xl font-semibold'>{ showAmount ? '$10,000.00' : '**********' }</p>
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
            <p className='text-gray-900 text-sm'>{ showAmount ? '$7,000.00' : '*****' }</p>
        </div>
        <div className='flex items-center justify-between border-b pb-3'>
            <p className='text-gray-500 text-sm font-light'>Pending payments</p>
            <p className='text-gray-900 text-sm'>{ showAmount ? '$500.00' : '*****' }</p>
        </div>
        <div className='flex items-center justify-between  pt-3'>
            <p className='text-gray-900 text-sm font-light'>Total value</p>
            <p className='text-gray-900 text-sm'>{ showAmount ? '$17,500.00' : '*****' }</p>
        </div>
    </div>
  )
}
