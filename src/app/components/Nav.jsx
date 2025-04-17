import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import { AiOutlineLock } from "react-icons/ai";
import { TbFileUnknown } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { RxDoubleArrowRight } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { GoGift } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-black py-3 px-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <Link href={'/'} className="text-white font-bold text-lg flex items-end">TRUSTSTOCK<span className="text-purple-800 "><GoDotFill /></span></Link>
        <div className="flex items-center gap-5">
            <Link href={'/sign-in'}>
            <button className="bg-purple-800 text-white px-2 py-1 rounded-lg text-[13px]">Sign in</button>
            </Link>
            {/* burger menu */}
            <div className="z-50">
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className='cursor-pointer'><RxHamburgerMenu className='text-2xl text-white' /></label>
                    </div>
                    <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="pr-5 bg-white min-h-full md:w-[370px] w-[300px]">
                        {/* Sidebar content here */}
                        <div className='border-b-2 md:px-4 px-2 md:py-[22px] py-3'>
                        <p className='font-bold md:text-2xl text-lg'>Hey!</p>
                        </div>
                        <div className='shadow-md border-b md:px-4 px-2 py-3 flex items-center md:gap-3 gap-2 z-20'>
                        <div><img src="/images/rewards_login.avif" className='md:w-16' alt="" /></div>
                        <div>
                            <p className='md:text-sm text-xs text-gray-500'>Unlock special offers & great benefits</p>
                        </div>
                        <Link href={'/sign-in'}>
                            <button className='text-xs hover:text-purple-800 border text-purple-500 p-2 md:py-2.5 border-purple-800 font-semibold'>
                            Login/Register
                            </button>
                        </Link>
                        </div>
                        <div className='text-gray-400 border-b md:pl-4 pl-3 md:py-4 py-4 flex justify-between items-center cursor-not-allowed'>
                            <div className='flex items-center md:gap-4 gap-3'>
                                <AiOutlineSetting className='md:text-lg' />
                                <div>
                                <p className='text-sm'>Account and Settings</p>
                                <p className='text-xs font-light line-clamp-1'>Location, Permission, Payment, and More</p>
                                </div>
                            </div>
                            <AiOutlineLock className='md:text-lg' />
                        </div>
                        <Link href={'/how-it-works'} className=' z-10 border-b pl-3 py-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                            <div className='flex items-center md:gap-4 gap-3'>
                                <GrMoney className='md:text-lg' />
                                <p className='text-sm'>How it works</p>
                            </div>
                            <RxDoubleArrowRight className='' />
                        </Link>
                        <Link href={'/invest'} className=' z-10 border-b pl-3 py-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                            <div className='flex items-center md:gap-4 gap-3'>
                                <GrMoney className='md:text-lg' />
                                <p className='text-sm'>Invest</p>
                            </div>
                            <RxDoubleArrowRight className='' />
                        </Link>
                        <Link href={'/about'} className=' z-10 border-b pl-3 py-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                            <div className='flex items-center md:gap-4 gap-3'>
                                <TbFileUnknown className='md:text-lg' />
                                <p className='text-sm'>About</p>
                            </div>
                            <RxDoubleArrowRight className='' />
                        </Link>
                        <Link href={'blog'} className=' z-10 border-b pl-3 py-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                            <div className='flex items-center md:gap-4 gap-3'>
                                <IoIosStats className='md:text-lg' />
                                <p className='text-sm'>Blog</p>
                            </div>
                            <RxDoubleArrowRight className='' />
                        </Link>
                        <div className=' text-gray-400 z-10 border-b md:pl-4 pl-3 md:py-4 py-2 flex gap-5 justify-between items-center hover:bg-gray-100 cursor-pointer'>
                            <div className='flex items-center md:gap-4 gap-3'>
                                <BiSupport className='md:text-lg' />
                                <div>
                                <p className='text-sm'>Help and Support</p>
                                <p className='text-xs font-light line-clamp-1'>View commonly asked queries and Chat</p>
                                </div>
                            </div>
                            <RxDoubleArrowRight className='' />
                        </div>
                        <div className='text-gray-400 z-10 border-b md:pl-4 pl-3 md:py-4 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer'>
                            <div className='flex items-center md:gap-4 gap-3'>
                                <GoGift className='md:text-lg' />
                                <div>
                                <p className='text-sm'>Rewards</p>
                                <p className='text-xs font-light'>View your rewards and unlock new ones</p>
                                </div>
                            </div>
                            <RxDoubleArrowRight className='' />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    )
}
