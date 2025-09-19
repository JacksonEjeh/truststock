'use client'
import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useSelector } from 'react-redux';

export default function Returns({ showAmountBtn, showAmount }) {
    const { loading, wallet, error } = useSelector((state)=> state?.wallet);

    const formatCurrency = (value) => typeof value === 'number' ? `$${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : '$0.00'
    const total_interest = wallet?.accruedInterest ?? 0;
    const averageRoi = parseFloat(wallet?.avgROI?.$numberDecimal.toString() || "0");

    if(loading) return <div className='h-36 bg-white flex justify-center items-center'><div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-700 border-t-transparent"></div></div>

  return (
    <div className='bg-white p-5 border-b'>
        <div className='mb-3 flex items-center justify-between'>
            <div>
                <p className='text-gray-500 text-sm font-light'>Average return</p>
                <p className='text-gray-900 text-2xl font-semibold'>{ showAmount ? `${averageRoi}%` : '***' }</p>
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
            <p className='text-gray-500 text-sm font-light'>Total Interest</p>
            <p className='text-gray-900 text-sm'>{ showAmount ? formatCurrency(total_interest) : '*****' }</p>
        </div>
        <div className='flex items-center justify-between border-b pb-3'>
            <p className='text-gray-500 text-sm font-light'>Total Rewards</p>
            <p className='text-gray-900 text-sm'>{ showAmount ? '$0.00' : '*****' }</p>
        </div>
        <div className='flex items-center justify-between  pt-3'>
            <p className='text-gray-900 text-sm font-light'>Total earnings</p>
            <p className='text-gray-900 text-sm'>{ showAmount ? formatCurrency(total_interest) : '*****' }</p>
        </div>
    </div>
  )
}
