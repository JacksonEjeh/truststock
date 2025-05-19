"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { RiArrowDropDownLine } from 'react-icons/ri'
import FadeInSection from '../components/FadeInSection'
import { useDispatch, useSelector } from 'react-redux'
import { resendOTP, verifyOTP } from '../redux/slices/UserSlice'
import { useRouter, useSearchParams } from 'next/navigation'
import Spinner from '../components/Spinner'
import ToastAlert from '../components/ToastAlert'

export default function page() {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');    
    const router = useRouter();
    const { loading } = useSelector((state) => state.user);
    
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [otp_info, setOtpInfo] = useState({
        email: email,
        otp: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setOtpInfo((prev)=> ({ ...prev, [name]: value}));
    };
    
    const handleSIgnUp = (e) => {
        e.preventDefault();
        if(!otp_info.email || !otp_info.otp || otp_info.otp.length < 6 ){
            setAlert({ message: "OTP must be 6 digits", type: "error"})
            return;
        }
        dispatch(verifyOTP(otp_info)).then((action)=>{
            if (action.payload === "Invalid OTP") {
                setAlert({ message:'Invalid OTP', type: "error"})
                setOtpInfo({
                    email: email,
                    otp: ""
                })
            }
            if(action.payload.message === "Account verified successfully"){
                setAlert({ message: 'Account verified successfully. Login to continue', type: "success"})
                router.push('/sign-in')
            }
            if(action.payload === "User is already verified"){
                setAlert({ message: "User is already verified. Login to continue", type: "success"})
                router.push('/sign-in')
            }
            if(action.payload === "OTP expired. A new OTP has been sent."){
                setAlert({ message: "OTP expired. A new OTP has been sent.", type: "warning"})
                alert("OTP expired. A new OTP has been sent.")
                setOtpInfo({
                    email: email,
                    otp: ""
                })
            }
        })
    };

    const handleResendOtp = () => {
        dispatch(resendOTP({ email:email })).then((action) => {
            if(action.payload === "New OTP sent to your email."){
                setAlert({ message: "A new OTP has been sent to your email", type: "success"})
            }
            if(action.payload === "User not found"){
                setAlert({ message: "User not found", type: "error"})
            }
            if(action.payload === "User is already verified"){
                setAlert({ message: "User is already verified", type: "warning"})
            }
        })
    }
    if(loading) return <Spinner />;
    return (
        <div >
            <div>
                <ToastAlert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert({ message: "", type: "info" })}
                />
            </div>
            <nav className='p-4 bg-white z-20 flex items-center justify-between fixed top-0 left-0 right-0'>
                <Link href={'/'} className="text-black font-bold text-lg flex items-end">TRUSTSTOCK<span className="text-purple-800 "><GoDotFill /></span></Link>
                <div className='flex items-center'>
                    <p className='text-sm'>EN</p>
                    <RiArrowDropDownLine className='text-xl'/>
                </div>
            </nav>
            <FadeInSection>
                <div className='pt-20 px-4'>
                    <h1 className='text-lg font-semibold text-center mb-5'>Verify your account</h1>
                    <p className='text-center text-sm mb-5'>Enter the 6-digit code we sent by mail to <span className='font-semibold'>{email}</span></p>
                    <form onSubmit={handleSIgnUp}>
                        <label className="input input-bordered flex items-center gap-2 text-sm mb-6 w-full">
                            Enter OTP:
                            <input 
                                type="text"
                                name='otp'
                                onChange={handleInput}
                                value={otp_info.otp}
                                className="grow text-sm"
                            />
                        </label>
                        <div className='flex justify-between items-center'>
                            <p onClick={handleResendOtp} className='text-sm text-purple-800'>Didn't receive a verification code?</p>
                            <button className='px-5 py-1 rounded bg-purple-800 text-white text-sm '>Verify OTP</button>
                        </div>
                    </form>
                </div>
            </FadeInSection>
        </div>
    )
}
