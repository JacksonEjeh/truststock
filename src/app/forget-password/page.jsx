'use client'
import React, { act, useState } from 'react'
import ToastAlert from '../components/ToastAlert'
import Link from 'next/link';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GoDotFill } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../redux/slices/UserSlice';
import { useRouter } from 'next/navigation';
import Spinner from '../components/Spinner';

export default function page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const [alert, setAlert] = useState({ message: "", type: "info" });
  const [ email, setEmail ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setAlert({ message: "Please enter your email", type: "error" });
      return;
    }
    dispatch(forgetPassword({email: email})).then((action)=> {
      // console.log(action)
      if (action.payload === "User not found"){
        setAlert({ message: "User not found", type: "error" });
        return;
      }
      if (action.payload.message === "Password reset OTP sent to email.") {
        setAlert({ message: "Password reset OTP sent to email.", type: "success" });
        const email = action.payload?.data?.email;
        router.push(`/reset-password?email=${email}`);
      }
    })
  };

  if (loading) return <Spinner />;
  return (
    <div>
      <div>
        <ToastAlert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert({ message: "", type: "info" })}
        />
      </div>
      <nav className='p-4 bg-white z-20 flex shadow items-center justify-between fixed top-0 left-0 right-0'>
          <Link href={'/'} className="text-black font-bold text-lg flex items-end">TRUSTSTOCK<span className="text-purple-800 "><GoDotFill /></span></Link>
          <div className='flex items-center'>
              <p className='text-sm'>EN</p>
              <RiArrowDropDownLine className='text-xl'/>
          </div>
      </nav>
      <div className='pt-20 px-4'>
        <Link href={'/sign-in'} className='mb-5'>
          <IoArrowBackCircleOutline className='text-2xl'/>
        </Link>
        <div className='mb-5'>
          <h1 className='text-lg font-semibold'>Find your account</h1>
          <p className='text-sm'>Enter your email.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2 text-sm mb-2 w-full">
            Email:
            <input 
                type="email" 
                name='email'
                className="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p className='text-xs font-light mb-5'>You may receive Email notification from us for security and login purposes.</p>
          <button className='w-full bg-purple-800 text-white text-sm rounded py-3'>{loading ? 'Loading...':'Continue'}</button>
        </form>
      </div>
    </div>
  )
}
