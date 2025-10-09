'use client'
import { getWallet } from '@/app/redux/slices/walletSlice';
import React, { useEffect, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

export default function AvailableFunds() {
    const { loading, wallet, error } = useSelector((state)=> state?.wallet);
    const dispatch = useDispatch();

    const [showAmount, setShowAmount] = useState(() => {
        const storedValue = localStorage.getItem("showAmount");
        return storedValue === "true"; // convert string back to boolean
    });

    const showAmountBtn = () => {
        setShowAmount(prev => !prev);
    };
    
    const formatCurrency = (value) => typeof value === 'number' ? `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$0.00'
    const available = wallet?.availableBalance ?? 0;

    useEffect(()=> {
        dispatch(getWallet())
    }, []);
  return (
    <div className='flex justify-between items-center rounded-xl mb-5 bg-white px-3 py-1'>
        <div className=''>
            <p className='text-gray-500 text-xs font-light'>Available fund</p>
            {
                loading ? <div className="animate-spin rounded-full h-5 w-5 border-4 border-purple-700 border-t-transparent"></div>
                : <p className='text-gray-900'>{ showAmount ? formatCurrency(available) : '**********' }</p>
            }
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
