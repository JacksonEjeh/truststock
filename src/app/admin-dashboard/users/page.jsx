'use client'
import Nav from '@/app/components/dashboardComponents/Nav'
import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
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
import Footer from '@/app/components/dashboardComponents/Footer';
import AdminTransactions from '../components/transactions';
import Link from 'next/link';


const users = [
  { last_name: "Brown", first_name: "Jackson", email: "jackson.brown@example.com", kyc_status: "verified" },
  { last_name: "Gabriel John", first_name: "Maria", email: "maria.gabriel@example.com", kyc_status: "pending" },
  { last_name: "Smith", first_name: "Ethan", email: "ethan.smith@example.com", kyc_status: "rejected" },
  { last_name: "Johnson", first_name: "Ava", email: "ava.johnson@example.com", kyc_status: "verified" },
  { last_name: "Miller", first_name: "Daniel", email: "daniel.miller@example.com", kyc_status: "pending" },
  { last_name: "Williams", first_name: "Sofia", email: "sofia.williams@example.com", kyc_status: "verified" },
  { last_name: "Garcia", first_name: "Noah", email: "noah.garcia@example.com", kyc_status: "rejected" },
  { last_name: "Martins", first_name: "Olivia", email: "olivia.martins@example.com", kyc_status: "pending" },
  { last_name: "Anderson", first_name: "Lucas", email: "lucas.anderson@example.com", kyc_status: "unsubmitted" },
  { last_name: "Bennett", first_name: "Chloe", email: "chloe.bennett@example.com", kyc_status: "verified" },
];

const getStatusStyle = (status) => {
    switch (status) {
      case "verified":
        return { borderColor: "#DCFCE7", color: "#166534" }; // green
      case "pending":
        return { borderColor: "#FEF9C3", color: "#854D0E" }; // yellow
      case "rejected":
        return { borderColor: "#FEE2E2", color: "#991B1B" }; // red
      default:
        return { borderColor: "#E5E7EB", color: "#374151" }; // gray
    }
};

export default function page() {
    const investment_status = ''
    const [view, setView] = useState('users');
  return (
    <div className='bg-gray-100 h-screen overflow-y-auto'>
        <Nav dash={true} admin={true} />
        <div className='pt-20'>
            <div className='border fixed left-0 right-0 rounded-full grid grid-cols-2 mb-5 mx-5 bg-white transition-color duration-500'>
                <button onClick={()=>setView('users')} className={`py-1 rounded-full text-sm transition-color duration-500 ${view === 'users' ? 'bg-purple-800 text-white' : 'text-black'}`}>Users</button>
                <button onClick={()=>setView('transactions')} className={`py-1 relative rounded-full text-sm transition-color duration-500 ${view === 'transactions' ? 'bg-purple-800 text-white' : 'text-black'}`}>
                    Transactions 
                    <span className='size-4 rounded-full bg-[#FEF9C3] border border-[#854D0E] text-[#854D0E] flex items-center justify-center text-[10px] absolute -top-1.5 right-2.5'>5</span>
                </button>
            </div>
            {
                view === 'users' ? (
                    <div className='mt-10 grid grid-cols-1 mb-10 gap-4 px-5'>
                        {
                            users?.map((user, i) => (
                                <Link href={`/admin-dashboard/users/${i}`} key={i} className='rounded-lg p-2 cursor-pointer' style={{boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",}}>
                                    <div className='flex gap-2 items-center '>
                                        <div>
                                            <div className='rounded-full size-12 border-2'  style={getStatusStyle(user.kyc_status)}>
                                                <img src={"/images/dp.jpg"} alt="" className='size-full object-cover rounded-full' />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <div className='flex items-center justify-between'>
                                                <div>
                                                    <div
                                                        className="text-[9px] text-center font-medium"
                                                        style={getStatusStyle(user.kyc_status)}
                                                    >
                                                        KYC {user.kyc_status.charAt(0).toUpperCase() + user.kyc_status.slice(1)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <BsThreeDots className='' />
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="w-36 text-xs" align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuGroup>
                                                                <DropdownMenuItem>
                                                                    <p className='text-xs'>View&nbsp;{user?.first_name}</p>
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
                                            <p className='text-sm font-semibold truncate w-32'>{user.first_name} {user.last_name}</p>
                                            <p className='text-black/40 text-xs '>{user.email}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                ) : (
                    <div className='mt-10 px-5'>
                        <AdminTransactions />
                    </div>
                )
            }
            <div>
                <Footer />
            </div>
        </div>
    </div>
  )
}
