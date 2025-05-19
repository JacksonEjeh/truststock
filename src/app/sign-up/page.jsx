"use client"
import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from 'next/link';
import FadeInSection from '../components/FadeInSection';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../redux/slices/UserSlice';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import AlertModal from '../components/ToastAlert';
import Spinner from '../components/Spinner';
import ToastAlert from '../components/ToastAlert';


export default function page() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.user)
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [agreed, setAgreed] = useState(false);

    const companyBtn = () => {
        setAlert({ message: "You're not an eligible investor yet!", type: "info" })
    }
    
    const [signUp, setSignUp] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword ] = useState('')

    const requirements = [
        { label: "At least 1 uppercase character (A-Z)", isValid: /[A-Z]/.test(signUp.password) },
        { label: "At least 1 lowercase character (a-z)", isValid: /[a-z]/.test(signUp.password) },
        { label: "At least 1 special character ($%&*@)", isValid: /[!@#$%^&*(),.?":{}|<>]/.test(signUp.password), },
        { label: "At least 1 digit (0-9)", isValid: /[0-9]/.test(signUp.password), },
        { label: "At least 9 character long", isValid: signUp.password.length >= 9, },
    ];
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setSignUp((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignUp = (e) =>{
        e.preventDefault();
        if( !signUp.first_name || !signUp.last_name || !signUp.email || !signUp.password ){
            setAlert({ message: "All fields are required", type: "error" });
            return;
        }
        if (signUp.password !== confirmPassword) {
            setAlert({ message: "Password mismatch", type: "error" });
            return;
        }
        if (!agreed) {
            setAlert({ message: "You must agree to the terms and conditions.", type: "info" });
            return;
          }
        dispatch(signUpUser(signUp)).then((action)=>{
            console.log("SignUp action returned:", action);
            if (action.type === "user/signUpUser/fulfilled"){
                // Assuming payload contains user data like email
                const email = action.payload?.data?.email;
                router.push(`/verify-otp?email=${email}`);
            }
            if (action.payload === "User already exists"){
                setAlert({ message: "User already exists", type: "error" });
                return;
            }
            if (action.payload === "Password must include uppercase, lowercase, number, and special character."){
                setAlert({ message: "Password must include uppercase, lowercase, number, and special character.", type: "error" });
                return;
            }
            if (action.payload === "Invalid email format"){
                setAlert({ message: "Invalid email format!", type: "error" });
                return;
            }
        });
    }
    if(loading) return <Spinner />;
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
                <div className='flex items-center gap-5'>
                    <Link href={'/sign-in'} className='flex items-center gap-1'>
                        <IoArrowBackCircleOutline className='text-2xl'/>
                        <span className='text-sm'>To Sign in</span>
                    </Link>
                    <div className='flex items-center'>
                        <p className='text-sm'>EN</p>
                        <RiArrowDropDownLine className='text-xl'/>
                    </div>
                </div>
            </nav>
            <FadeInSection>
            <div className='pt-20 px-4'>
                <div className='grid grid-cols-2 mb-10'>
                    <div className='bg-purple-800 text-white p-5 rounded-l-full text-center text-sm'>Individual</div>
                    <button onClick={companyBtn} className='bg-gray-200 text-black p-5 rounded-r-full text-sm text-center relative'>Company<MdOutlineDoNotDisturb className='absolute top-[-8px] right-0 text-2xl text-red-500'/></button>
                </div>
                <div>
                    <h1 className='text-xl mb-5 font-bold text-center'>Sign up as an individual</h1>
                    <form className='' onSubmit={handleSignUp}>
                        <label className="input input-bordered flex items-center gap-2 text-sm mb-6 w-full">
                            First name:
                            <input 
                                type="text" 
                                name='first_name'
                                value={signUp.first_name}
                                className="grow"
                                onChange={handleInput}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-sm mb-6 w-full">
                            Last name:
                            <input 
                                type="text"    
                                className="grow" 
                                name='last_name'
                                value={signUp.last_name}
                                onChange={handleInput}    
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-sm mb-6 w-full">
                            Your email:
                            <input 
                            type="text" 
                            className="grow" 
                            name='email'
                            value={signUp.email}
                            onChange={handleInput}       
                        />
                        </label>
                        <FadeInSection>
                        <label className="input input-bordered flex items-center gap-2 text-sm mb-5 w-full">
                            Password:
                            <input 
                                type={showPassword ? "text" : "password"}
                                className="grow" 
                                name='password'
                                value={signUp.password}
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
                        </FadeInSection>
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
                        <FadeInSection>
                        <label className="input input-bordered flex items-center gap-2 text-sm mb-5 w-full">
                            Confirm password:
                            <input 
                                type={showPassword ? "text" : "password"}
                                className="grow" 
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}       
                            />
                        </label>
                        <div>
                            <div className='flex gap-3 mb-5'>
                                <input type="checkbox" className="checkbox size-5" />
                                <p className="text-xs leading-tight">Agree to receive marketing communications to provided e-mail in line with the <span className='text-blue-500'>Privacy policy.</span></p>
                            </div>
                            <div className='flex gap-3'>
                                <input 
                                    type="checkbox" 
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="checkbox size-5" 
                                />
                                <p className="text-xs leading-tight">By proceeding with registration I agree to the <span className='text-blue-500'>Terms & conditions</span>, <span className='text-blue-500'>Orders Execution Policy</span> and <span className='text-blue-500'>Privacy policy</span>. I also agree that Truststock provided me with all information related to investment services, including certain documents available online and personally addressed information via email.</p>
                            </div>
                        </div>
                        </FadeInSection>
                        <FadeInSection>
                        <div className='flex items-center justify-between my-10'>
                            <Link href={'/sign-in'} className='flex items-center gap-1'>
                                <IoArrowBackCircleOutline className='text-2xl'/>
                                <span className='text-sm'>To Sign in</span>
                            </Link>
                            <div>
                                <button className='bg-purple-800 text-white text-sm py-3 px-7 rounded-full'>Create account</button>
                            </div>
                        </div>
                        </FadeInSection>
                    </form>
                </div>
            </div>
            </FadeInSection>
            <footer className='p-4'>
                <p className='text-center text-xs text-gray-500'>&copy;2023 Truststock. All rights reserved.</p>
            </footer>
        </div>
    )
}
