'use client'
import { GiSandsOfTime } from "react-icons/gi";
import React, { useEffect } from 'react'
import Link from "next/link";

 const PaymentAlert = ({
    amount,
    type,
    status
 })=> {

    if (!amount || !type || !status) return null;
    useEffect(()=>{
        if(amount) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = ""; // reset scroll
        }
        // Cleanup when component unmounts
        return () => {
        document.body.style.overflow = "";
        };
    },[amount]);
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 animate-fade-in">
        <div className='relative'>
            <div className='pt-16 px-5 absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[50dvh] w-[80vw] shadow-lg bg-white'>
                <div className="h-20 text-center">
                    <p className="text-xl mb-3">{type} REQUEST</p>
                    <p className="text-2xl font-semibold">USD <span>{amount}</span></p>
                    <small className="text-black/50">{status}</small>
                    <p className="text-sm mt-10">Request received and is being processed</p>
                    <Link href={'/dashboard'}>
                        <button className="mt-10 w-full py-3 bg-purple-800 rounded text-white text-sm">Done</button>
                    </Link>
                </div>
            </div>
            <div className='bg-yellow-400 relative h-[50dvh]'>
                <div 
                    className='flex items-center justify-center absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 border-4 border-white size-24 shadow-lg rounded-full'
                    style={{
                        backgroundColor: status === 'pending'
                        ? '#FACC15'
                        : status === 'accepted'
                        ? '#4ADE80'
                        : status === 'rejected'
                        ? '#EF4444'
                        : '#FACC15',
                    }}    
                >
                    <GiSandsOfTime className="text-white text-5xl" />
                </div>
            </div>
            <div className='bg-white h-[50dvh]'></div>
        </div>
    </div>
  )
}

export default PaymentAlert;
