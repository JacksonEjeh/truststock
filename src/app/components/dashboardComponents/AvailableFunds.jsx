'use client'
import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export default function AvailableFunds() {
    const [showAmount, setShowAmount] = useState(false);
    const showAmountBtn = () => {
        setShowAmount(!showAmount);
    }
  return (
    <div className='flex justify-between items-center rounded-xl mb-5 bg-white px-3 py-1'>
        <div className=''>
            <p className='text-gray-500 text-xs font-light'>Available fund</p>
            <p className='text-gray-900'>{ showAmount ? '$10,990.00' : '**********' }</p>
        </div>
        <div>
            {
                showAmount ? (
                    <button onClick={showAmountBtn} className='bg-gray-100 rounded-full p-1'>
                        <IoMdEyeOff className='text-xl' />
                    </button>
                ):(
                    <button onClick={showAmountBtn} className='bg-gray-100 rounded-full p-1'>
                        <IoMdEye className='text-xl' />
                    </button>
                )
            }
        </div>
    </div>
  )
}
