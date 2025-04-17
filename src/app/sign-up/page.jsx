import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from 'next/link';


export default function page() {
  return (
    <div>
        <nav className='p-4 bg-white z-20 flex items-center justify-between fixed top-0 left-0 right-0'>
            <Link href={'/'} className="text-black font-bold text-lg flex items-end">TRUSTSTOCK<span className="text-purple-800 "><GoDotFill /></span></Link>
            <div className='flex items-center'>
                <p className='text-sm'>EN</p>
                <RiArrowDropDownLine className='text-xl'/>
            </div>
        </nav>
        <div className='pt-20 px-4'>
            <div className='grid grid-cols-2 mb-10'>
                <div className='bg-purple-800 text-white p-5 rounded-l-full text-center text-sm'>Individual</div>
                <div className='bg-gray-200 text-black p-5 rounded-r-full text-sm text-center relative'>Company<MdOutlineDoNotDisturb className='absolute top-[-8px] right-0 text-2xl text-red-500'/></div>
            </div>
            <div>
                <h1 className='text-xl mb-5 font-bold text-center'>Sign up as an individual</h1>
                <div className=''>
                    <label className="input input-bordered flex items-center gap-2 text-sm mb-6 w-full">
                        First name
                        <input type="text" className="grow text-sm" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-sm mb-6 w-full">
                        Last name
                        <input type="text" className="grow text-sm" />
                    </label>
                    <select className="select select-bordered w-full mb-6">
                        <option disabled selected>Country of residence</option>
                        <option value="">Han Solo</option>
                        <option value="">Greedo</option>
                    </select>
                    <label className="input input-bordered flex items-center gap-2 text-sm mb-6 w-full">
                        Your email
                        <input type="text" className="grow text-sm" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-sm mb-5 w-full">
                        Password
                        <input type="password" className="grow text-sm" />
                    </label>
                    <div className='mb-5'>
                        <div className='flex items-center gap-1 mb-1'>
                            <MdErrorOutline className='text-sm' />
                            <p className='text-xs'>At least 1 lowercase character (a-z)</p>
                        </div>
                        <div className='flex items-center gap-1 mb-1'>
                            <MdErrorOutline className='text-sm' />
                            <p className='text-xs'>At least 1 uppercase character (A-Z)</p>
                        </div>
                        <div className='flex items-center gap-1 mb-1'>
                            <MdErrorOutline className='text-sm' />
                            <p className='text-xs'>At least 1 special character ($%&*@)</p>
                        </div>
                        <div className='flex items-center gap-1 mb-1'>
                            <MdErrorOutline className='text-sm' />
                            <p className='text-xs'>At least 1 digit (0-9)</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdErrorOutline className='text-sm' />
                            <p className='text-xs'>At least 9 character long</p>
                        </div>
                    </div>
                    <label className="input input-bordered flex items-center gap-2 text-sm mb-5 w-full">
                        Referral code
                        <input type="text" className="grow text-sm" placeholder='Optional' />
                    </label>
                    <div>
                        <div className='flex gap-3 mb-5'>
                            <input type="checkbox" className="checkbox" />
                            <p className="text-xs leading-tight">Agree to receive marketing communications to provided e-mail in line with the <span className='text-blue-500'>Privacy policy.</span></p>
                        </div>
                        <div className='flex gap-3'>
                            <input type="checkbox" className="checkbox" />
                            <p className="text-xs leading-tight">By proceeding with registration I agree to the <span className='text-blue-500'>Terms & conditions</span>, <span className='text-blue-500'>Orders Execution Policy</span> and <span className='text-blue-500'>Privacy policy</span>. I also agree that Truststock provided me with all information related to investment services, including certain documents available online and personally addressed information via email.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between my-10'>
                        <Link href={'/sign-in'} className='flex items-center gap-1'>
                            <IoArrowBackCircleOutline className='text-2xl'/>
                            <span className='text-sm'>To Sign in</span>
                        </Link>
                        <div>
                            <button className='bg-purple-800 text-white text-sm py-3 px-7 rounded-full'>Create account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className='p-4'>
            <p className='text-center text-xs text-gray-500'>&copy;2023 Truststock. All rights reserved.</p>
        </footer>
    </div>
  )
}
