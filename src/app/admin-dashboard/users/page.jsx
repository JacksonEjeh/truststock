import Nav from '@/app/components/dashboardComponents/Nav'
import React from 'react'
import { BsThreeDots } from "react-icons/bs";


export default function page() {
  return (
    <div className='bg-gray-100'>
        <Nav dash={true} admin={true} />
        <div className='pt-20'>
            users
            <div className='mt-5 grid grid-cols-2 gap-4 px-5'>
                <div className='rounded-lg p-2' style={{boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",}}>
                    <div className='flex items-center justify-between mb-1.5'>
                        <div>
                            <div className='bg-gray-200 text-black/50 px-1 rounded text-[9px] text-center'>KYC Unsubstituted</div>
                        </div>
                        <div>
                            <BsThreeDots className='text-sm' />
                        </div>
                    </div>
                    <div className='flex gap-1 items-center '>
                        <div>
                            <div className='rounded-full size-9'>
                                <img src={"/images/dp.jpg"} alt="" className='size-full object-cover rounded-full' />
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-xs font-semibold truncate w-[105px]'>Jackson Gabriel</p>
                            <p className='text-black/40 text-[10px] truncate  w-[100px]'>gabbyjax7@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg p-2' style={{boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",}}>
                    <div className='flex items-center justify-between mb-2'>
                        <div>
                            <div className='bg-gray-200 text-black/50 px-1 rounded text-[9px] text-center'>KYC Unsubstituted</div>
                        </div>
                        <div>
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className='flex gap-1 items-center '>
                        <div>
                            <div className='rounded-full size-9 bg-gray-500'></div>
                        </div>
                        <div className=''>
                            <p className='text-xs font-semibold truncate w-[105px]'>Jackson Gabriel</p>
                            <p className='text-black/40 text-[10px] truncate  w-[100px]'>gabbyjax7@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg p-2' style={{boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",}}>
                    <div className='flex items-center justify-between mb-2'>
                        <div>
                            <div className='bg-gray-200 text-black/50 px-1 rounded text-[9px] text-center'>KYC Unsubstituted</div>
                        </div>
                        <div>
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className='flex gap-1 items-center '>
                        <div>
                            <div className='rounded-full size-9 bg-gray-500'></div>
                        </div>
                        <div className=''>
                            <p className='text-xs font-semibold truncate w-[105px]'>Jackson Gabriel</p>
                            <p className='text-black/40 text-[10px] truncate  w-[100px]'>gabbyjax7@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg p-2' style={{boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",}}>
                    <div className='flex items-center justify-between mb-2'>
                        <div>
                            <div className='bg-gray-200 text-black/50 px-1 rounded text-[9px] text-center'>KYC Unsubstituted</div>
                        </div>
                        <div>
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className='flex gap-1 items-center '>
                        <div>
                            <div className='rounded-full size-9 bg-gray-500'></div>
                        </div>
                        <div className=''>
                            <p className='text-xs font-semibold truncate w-[105px]'>Jackson Gabriel</p>
                            <p className='text-black/40 text-[10px] truncate  w-[100px]'>gabbyjax7@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg p-2' style={{boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",}}>
                    <div className='flex items-center justify-between mb-2'>
                        <div>
                            <div className='bg-gray-200 text-black/50 px-1 rounded text-[9px] text-center'>KYC Unsubstituted</div>
                        </div>
                        <div>
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className='flex gap-1 items-center '>
                        <div>
                            <div className='rounded-full size-9 bg-gray-500'></div>
                        </div>
                        <div className=''>
                            <p className='text-xs font-semibold truncate w-[105px]'>Jackson Gabriel</p>
                            <p className='text-black/40 text-[10px] truncate  w-[100px]'>gabbyjax7@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
