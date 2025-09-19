'use client'
import React from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux';

export default function Balance({ showAmountBtn, showAmount }) {
    const { loading, wallet, error } = useSelector((state)=> state?.wallet);

    const formatCurrency = (value) => typeof value === 'number' ? `$${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : '$0.00'
    
    const available = wallet?.availableBalance ?? 0;
    const invested = wallet?.investedBalance ?? 0;
    const pendingDeposits = wallet?.pendingDeposits  ?? 0;
    const pendingWithdraw = wallet?.pendingWithdrawals
    const pending = pendingDeposits + pendingWithdraw  ?? 0;
    const totalValue = available + invested + pending;

    if(loading) return <div className='h-36 bg-white flex justify-center items-center'><div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-700 border-t-transparent"></div></div>
  return (
    <div className='bg-white p-5 border-b'>
        <div className='mb-3 flex items-center justify-between'>
            <div>
                <p className='text-gray-500 text-sm font-light'>Available to invest</p>
                <p className='text-gray-900 text-2xl font-semibold'>{ showAmount ? formatCurrency(available) : '**********' }</p>
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
            <p className='text-gray-900 text-sm'>{ showAmount ? formatCurrency(invested) : '*****' }</p>
        </div>
        <div className='flex items-center justify-between border-b pb-3'>
            <p className='text-gray-500 text-sm font-light'>Pending payments</p>
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className='flex items-center gap-2 bg-gray-100 p-1'>
                <p className='text-gray-900 text-sm'>{ showAmount ? formatCurrency(pending) : '*****' }</p>    
                <MdKeyboardArrowRight />
            </button> 
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='py-3'>
                        <div className='flex items-center justify-between mb-3'>
                            <p className='text-gray-500 text-sm font-light'>Pending deposit</p>
                            <p className='text-gray-900 text-sm'>{ showAmount ? formatCurrency(pendingDeposits) : '*****' }</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-500 text-sm font-light'>Pending withdrawals</p>
                            <p className='text-gray-900 text-sm'>{ showAmount ? formatCurrency(pendingWithdraw) : '*****' }</p>
                        </div>
                    </div>
                </div>
            </dialog>  
        </div>
        <div className='flex items-center justify-between  pt-3'>
            <p className='text-gray-900 text-sm font-light'>Total value</p>
            <p className='text-gray-900 text-sm'>{ showAmount ? formatCurrency(totalValue) : '*****' }</p>
        </div>
    </div>
  )
}
