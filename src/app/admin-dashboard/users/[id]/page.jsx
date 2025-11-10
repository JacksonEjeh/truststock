'use client'
import React, { useState } from 'react'
import Nav from '@/app/components/dashboardComponents/Nav'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BsThreeDotsVertical  } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdOutlineEmail } from "react-icons/md";
import Transactions from '@/app/components/dashboardComponents/Transactions';


export default function page() {
    const [profile_btn, setProfileBtn] = useState('transaction')
    const handleProfileBtn = (key) => {
        switch (key) {
            case 'investment':
                setProfileBtn('investment');
                break;
            case 'more_info':
                setProfileBtn('more_info');
                break;
            default:
                setProfileBtn('transaction');
                break;
        }
    };
    return (
        <div className='bg-purple-800'>
            <Nav dash={true} admin={true} />
            <div className='sticky top-20 mb-28 text-white px-5'>
                <div className='flex items-center justify-between mb-5 z-0'>
                    < MdOutlineKeyboardBackspace className='text-2xl' />
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <BsThreeDotsVertical  className='text-lg' />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-36 text-xs" align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <p className='text-xs'>View</p>
                                        <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <p className='text-xs'>Profile</p>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-5 mb-4'>
                        <div>
                            <div className='bg-white size-16 rounded-full'>
                                <img src={"/images/dp.jpg"} alt="" className='size-full object-cover rounded-full' />
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold'>Jackson Gabriel</p>
                            <div className='flex items-center gap-1'>
                                <p className='text-xs text-white/70'>Available Balance:</p>
                                <p className='text-xs'>$830.00</p>
                            </div>
                            <div className=' flex items-center gap-3 mt-3'>
                                <div className='flex items-center gap-1'>
                                    <MdOutlineEmail className='' />
                                    <p className='text-xs text-white/70'>Gabby123@example.com</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <p className='text-xs'>KYC:</p>
                                    <span className='text-xs text-white/70'>Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 grid grid-cols-3'>
                        <div className='text-center border-r'>
                            <p className='text-sm'>$ 0.00</p>
                            <p className='text-white/70 text-xs'>Invested Fund</p>
                        </div>
                        <div className='text-center border-r'>
                            <p className='text-sm'>$ 0.00</p>
                            <p className='text-white/70 text-xs'>Total Earned</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-sm'>$ 0.00</p>
                            <p className='text-white/70 text-xs'>Invested Fund</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white relative rounded-t-2xl px-5 mt-10 h-full z-10'>
                <div className='grid grid-cols-3 sticky top-[63px] bg-white py-5'>
                    <div>
                        <button onClick={() => handleProfileBtn('transaction')} className={profile_btn === 'transaction' ? 'border-b-2 border-purple-800 text-sm px-2 py-1 w-full font-light transition-all duration-500' : 'border-b-2 text-sm px-2 py-1 w-full font-light transition-all duration-500'}>Transactions</button>
                    </div>
                    <div>
                        <button onClick={() => handleProfileBtn('investment')} className={profile_btn === 'investment' ? 'border-b-2 border-purple-800 text-sm px-2 py-1 w-full font-light transition-all duration-500' : 'border-b-2 text-sm px-2 py-1 w-full font-light transition-all duration-500'}>Investments</button>
                    </div>
                    <div>
                        <button onClick={() => handleProfileBtn('more_info')} className={profile_btn === 'more_info' ? 'border-b-2 border-purple-800 text-sm px-2 py-1 w-full font-light transition-all duration-500' : 'border-b-2 text-sm px-2 py-1 w-full font-light transition-all duration-500'}>More Info</button>
                    </div>
                </div>
                <div className='pb-16'>
                    <div>
                        <Transactions />
                    </div>
                    <div>
                        <Transactions />
                    </div>
                </div>
            </div>
        </div>
    )
}
