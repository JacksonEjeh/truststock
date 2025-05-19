"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { RiArrowDropDownLine } from 'react-icons/ri'
import FadeInSection from '../components/FadeInSection'
import { useDispatch, useSelector } from 'react-redux'
import { resendOTP, resetPassword, verifyOTP } from '../redux/slices/UserSlice'
import { useRouter, useSearchParams } from 'next/navigation'
import Spinner from '../components/Spinner'
import ToastAlert from '../components/ToastAlert'
import { Eye, EyeOff } from 'lucide-react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { MdErrorOutline } from 'react-icons/md'

export default function page() {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const email = searchParams.get('email'); 
    const [ showPassword, setShowPassword ] = useState(false)   
    const router = useRouter();
    const { loading } = useSelector((state) => state.user);
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [otp_info, setOtpInfo] = useState({
        email: email,
        otp: "",
        newPassword: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setOtpInfo((prev)=> ({ ...prev, [name]: value}));
    };

    const requirements = [
        { label: "At least 1 uppercase character (A-Z)", isValid: /[A-Z]/.test(otp_info.newPassword) },
        { label: "At least 1 lowercase character (a-z)", isValid: /[a-z]/.test(otp_info.newPassword) },
        { label: "At least 1 special character ($%&*@)", isValid: /[!@#$%^&*(),.?":{}|<>]/.test(otp_info.newPassword), },
        { label: "At least 1 digit (0-9)", isValid: /[0-9]/.test(otp_info.newPassword), },
    ];
    
    const handleResetPassword = (e) => {
        e.preventDefault();
        if(!otp_info.email || !otp_info.otp || !otp_info.newPassword ){
            setAlert({ message: "All fields are required", type: "error"})
            return;
        }
        if ( otp_info.otp.length < 6) {
            setAlert({ message: "Invalid OTP", type: "error"});
            return;
        }
        dispatch(resetPassword(otp_info)).then((action)=>{
            console.log(action);
            if(action.payload.message === "Password reset successfully"){
                setAlert({ message: "Password reset successfully", type: "success"});
                router.push('/sign-in');
            }
            if (action.payload === "OTP expired. A new OTP has been sent.") {
                setAlert({ message:"OTP expired. A new OTP has been sent.", type: "warning"})
                setOtpInfo({
                    email: email,
                    otp: "",
                    newPassword: "",
                })
            }
            if (action.payload === "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"){
                setAlert({ message: "Password must include uppercase, lowercase, number, and special character.", type: "error" });
                return;
            }
            if(action.payload === "OTP expired. A new OTP has been sent."){
                setAlert({ message: "OTP expired. A new OTP has been sent.", type: "warning"})
                alert("OTP expired. A new OTP has been sent.")
                setOtpInfo({
                    email: email,
                    otp: "",
                    newPassword: "",
                })
            }
            if(action.payload === "Invalid OTP"){
                setAlert({ message: "Invalid OTP", type: "error"})
                setOtpInfo({
                    email: email,
                    otp: "",
                    newPassword: "",
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
    };
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
                    <form onSubmit={handleResetPassword}>
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
                        <label className="input input-bordered flex items-center gap-2 text-sm mb-5 w-full">
                            New password:
                            <input 
                                type={showPassword ? "text" : "password"}
                                className="grow text-sm" 
                                name='newPassword'
                                value={otp_info.newPassword}
                                onChange={handleInput}       
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-600"
                                >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </label>
                        <FadeInSection>
                            <div className='mb-5'>
                                {requirements.map((req, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-1 mb-1 ${
                                            req.isValid ? "text-green-600" : "text-red-800"
                                        }`}
                                    >
                                        {req.isValid ? <IoIosCheckmarkCircleOutline  /> : <MdErrorOutline className='text-sm' />}
                                        <p className='text-xs'> {req.label}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeInSection>
                        <div className='flex justify-between items-center'>
                            <p onClick={handleResendOtp} className='text-sm text-purple-800'>Resend OTP?</p>
                            <button className='px-5 py-1 rounded bg-purple-800 text-white text-sm '>Reset</button>
                        </div>
                    </form>
                </div>
            </FadeInSection>
        </div>
    )
}
