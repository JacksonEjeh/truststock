import React from 'react'
import Nav from '@/app/components/dashboardComponents/Nav'
import { IoChevronBackOutline } from "react-icons/io5";

export default function page() {
    return (
        <div className='bg-gray-100 h-screen overflow-y-auto'>
            <Nav dash={true} admin={true} />
            <div className='pt-20'>
                <div className='px-5 flex items-center gap-1 cursor-pointer mb-5'>
                    < IoChevronBackOutline />
                    {/* <p className='text-sm'>Back</p> */}
                </div>
                <div></div>
            </div>
        </div>
    )
}
