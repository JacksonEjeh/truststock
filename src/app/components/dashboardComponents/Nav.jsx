'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { BiSupport } from 'react-icons/bi';
import { GoDotFill } from "react-icons/go";
import { FaMoneyBill } from "react-icons/fa";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsDatabaseFillAdd } from "react-icons/bs";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '@/app/redux/slices/UserSlice';
import { useRouter } from 'next/navigation';
import ToastAlert from '../ToastAlert';

export default function Nav({ dash }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const loggedUser = useSelector((state)=> state.user);
    
    const [ alert, setAlert ] = useState(({ message: "", type: "info"}));

    const handleLogOut = () => {
        dispatch(logOut()).then((action) => {
            if (action.type === "user/logOut/fulfilled") {
               router.replace('/sign-in')
                document.cookie = 'accessToken=; Max-Age=0; path=/';
            } else {
                setAlert({ message: action.payload, type: 'error'})
            }
        })
    };
    
  return (
    <div>
        <div>
            <ToastAlert
              message={alert.message}
              type={alert.type}
              onClose={() => setAlert({ message: "", type: "info" })}
            />
        </div>
        <nav className={ dash ? 'p-4 bg-gray-100 shadow z-20 flex items-center justify-between fixed top-0 left-0 right-0' : 'p-4 bg-white z-20 flex items-center justify-between fixed top-0 left-0 right-0'}>
            <Link href={'/dashboard'} className="text-black font-bold text-lg flex items-end">TRUSTSTOCK<span className="text-purple-800 "><GoDotFill /></span></Link>
            <div className='flex items-center gap-5'>
                <div className='flex items-center'>
                    <p className='text-sm'>EN</p>
                    <RiArrowDropDownLine className='text-xl'/>
                </div>
                {/* burger menu */}
                <div className="z-50">
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className='cursor-pointer'><RxHamburgerMenu className='text-2xl text-black' /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="px-2 bg-white min-h-full md:w-[370px] w-[300px]">
                                {/* Sidebar content here */}
                                <div className='border-b-2 md:px-4 px-2 md:py-[22px] py-5'>
                                    <p className='font-bold md:text-2xl text-lg'>Hey investor!</p>
                                </div>
                                <div className='md:px-4 px-2 py-4 flex items-center md:gap-3 gap-2 z-20'>
                                    <div>
                                        <div className='size-10 bg-gray-500 rounded-full'></div>
                                    </div>
                                    <div>
                                        <p className='md:text-sm text-sm font-semibold flex items-center gap-1'><span>{`${loggedUser?.user?.first_name} ${loggedUser?.user?.last_name}`}</span><span className='size-4'>{loggedUser?.user?.isProfileComplete ? <img src="/images/verify.png" className='size-full' alt="" /> : null}</span></p>
                                        <p className='text-xs text-gray-400 font-light'>$10,000.00</p>
                                    </div>
                                </div>
                                <small className='px-3 mb-2 text-gray-400'>General</small>
                                <div className='md:pl-4 pl-3 md:py-4 py-2'>
                                    <Link href={'/dashboard'} className='flex items-center md:gap-4 gap-3'>
                                        <MdSpaceDashboard className='md:text-lg' />
                                        <div>
                                            <p className='text-sm'>Dashboard overview</p>
                                        </div>
                                    </Link>
                                </div>
                                <Link href={'/dashboard/invest'} className=' z-10 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <FaMoneyBill className='md:text-lg' />
                                        <p className='text-sm'>Manual investment</p>
                                    </div>
                                </Link>
                                <Link href={'/dashboard/portfolio'} className=' z-10 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <BsFillFileBarGraphFill className='md:text-lg' />
                                        <p className='text-sm'>Portfolio</p>
                                    </div>
                                </Link>
                                <Link href={'/dashboard/help'} className=' z-10 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <BiSupport className='text-lg' />
                                        <p className='text-sm'>Help</p>
                                    </div>
                                </Link>
                                <Link href={'/dashboard/auto-invest'} className=' z-10 pl-3 mb-5 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <FaMoneyBill className='md:text-lg' />
                                        <p className='text-sm'>Auto investment</p>
                                    </div>
                                </Link>
                                <small className='px-3 mb-2 text-gray-400'>Account</small>
                                <Link href={'/dashboard/profile'} className=' z-10 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <FaUserAlt className='md:text-lg' />
                                        <p className='text-sm'>My profile</p>
                                    </div>
                                </Link>
                                <Link href={'/dashboard/transaction'} className=' z-10 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <FaFile className='md:text-lg' />
                                        <p className='text-sm'>Transactions</p>
                                    </div>
                                </Link>
                                <Link href={'/dashboard/add-funds'} className=' z-10 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <BsDatabaseFillAdd className='md:text-lg' />
                                        <p className='text-sm'>Add funds</p>
                                    </div>
                                </Link>
                                <Link href={'/dashboard/withdraw-funds'} className=' z-10 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <PiHandWithdrawFill className='md:text-lg' />
                                        <p className='text-sm'>Withdraw funds</p>
                                    </div>
                                </Link>
                                <Link href={'/dashboard/refer-a-friend'} className=' z-10 mb-5 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <FaUserFriends className='md:text-lg' />
                                        <p className='text-sm'>Refer a friend</p>
                                    </div>
                                </Link>
                                <div onClick={handleLogOut} className=' z-10 mb-5 pl-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                                    <div className='flex items-center md:gap-4 gap-3'>
                                        <FaSignOutAlt className='md:text-lg' />
                                        <p className='text-sm'>Sign out</p>
                                    </div>
                                    {
                                        loggedUser.loading === true ? <div className="animate-spin rounded-full h-5 w-5 border-4 border-purple-800 border-t-transparent"></div>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
