'use client'
import { IoWalletOutline } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import { IoLogoUsd } from "react-icons/io5";
import { MdNumbers } from "react-icons/md";
import React, { useEffect } from 'react'

const PaymentReceipt = ({
    amount,
    date,
    method,
    reference,
    status,
    type,
    user,
    walletAddress,
    onClose
}) => {
    if(!amount || !date || !method || !reference || !status || !type || !user) return null;
    useEffect(() => {
        const originalStyle = document.body.style.overflow;

        if (amount) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalStyle; // Restore original scroll
        }

        return () => {
            document.body.style.overflow = originalStyle; // Always restore on unmount
        };
    }, [amount]);

  return (
    <div className='fixed bg-white z-50 top-0 left-0 right-0 bottom-0 animate-fade-in'>
        <div className="h-[30vh] mb-5 bg-green-300 flex items-center justify-center"
            style={{
                backgroundColor: status === 'PENDING'
                ? '#FCD34D'
                : status === 'ACCEPTED'
                ? '#86EFAC'
                : status === 'REJECTED'
                ? '#EF4444'
                : '#FCD34D',
            }}
        >
            <div className="text-center text-black">
                <p className=""
                    style={{
                        color: status === 'PENDING'
                        ? '#854d0e'
                        : status === 'ACCEPTED'
                        ? '#166534'
                        : status === 'REJECTED'
                        ? '#991b1b'
                        : '#854d0e',
                    }}
                >
                    {status}!
                </p>
                <p className="text-3xl font-semibold">USD {amount}</p>
            </div>
        </div>
        <div className="text-center mb-5">
            <p className="font-semibold leading-none">{user}</p>
            <small>{date}</small>
        </div>
        <div className="flex items-center gap-5 mx-5 border-b-2 py-4">
            <div className="border-2 rounded-lg p-1 flex items-center justify-center">
                <IoWalletOutline className="text-2xl text-yellow-800"/>
            </div>
            <div className="">
                <p className="text-[10px]">BENEFICIARY WALLET</p>
                <p className="text-sm font-semibold">{walletAddress}</p>
            </div>
        </div>
        <div className="flex items-center gap-5 mx-5 border-b-2 py-4">
            <div className="border-2 rounded-lg p-1 flex items-center justify-center">
                <BiTransfer className="text-2xl text-purple-800"/>
            </div>
            <div className="">
                <p className="text-[10px]">TRANSACTION TYPE</p>
                <p className="text-sm font-semibold">{type}</p>
            </div>
        </div>
        <div className="flex items-center gap-5 mx-5 border-b-2 py-4">
            <div className="border-2 rounded-lg p-1 flex items-center justify-center">
                <IoLogoUsd className="text-xl text-green-800"/>
            </div>
            <div className="">
                <p className="text-[10px]">TRANSACTION METHOD</p>
                <p className="text-sm font-semibold">{method}</p>
            </div>
        </div>
        <div className="flex items-center gap-5 mx-5 border-b-2 py-4">
            <div className="border-2 rounded-lg p-1 flex items-center justify-center">
                <MdNumbers className="text-2xl text-blue-800"/>
            </div>
            <div className="">
                <p className="text-[10px]">TRANSACTION REFERENCE</p>
                <p className="text-sm font-semibold">{reference}</p>
            </div>
        </div>
        <div className="mx-5 mt-10">
            <button onClick={onClose} className="w-full py-3 text-sm text-white rounded bg-purple-800">Back</button>
        </div>
    </div>
  )
}

export default PaymentReceipt;