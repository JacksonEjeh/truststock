"use client"
import React, { useEffect, useState } from 'react';
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
import { FaCircleInfo } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Spinner from '../components/Spinner';
import ToastAlert from '../components/ToastAlert';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



export default function page() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [agreed, setAgreed] = useState(false);

    const [ validCredential, setValidCredential ] = useState({
        first_name: false,
        last_name: false,
        email: false,
        password: false,
        confirmPassword: false,
    });
    const [ credentialFocus, setCredentialFocus ] = useState({
        first_name: false,
        last_name: false,
        email: false,
        password: false,
        confirmPassword: false,
    });
    const companyBtn = () => {
        setAlert({ message: "You're not an eligible investor yet!", type: "info" })
    };
    
    const [confirmPassword, setConfirmPassword ] = useState('');
    
    const [signUp, setSignUp] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        // userRef.current?.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(signUp.email);
        setValidCredential((prev)=> ({...prev, email: result}));
    }, [signUp.email]);

    useEffect(() => {
        const result = PASSWORD_REGEX.test(signUp.password);
        setValidCredential((prev)=> ({...prev, password: result}));
        const match = signUp.password === confirmPassword;
        setValidCredential((prev)=> ({...prev, confirmPassword: match}));
    }, [signUp.password, confirmPassword]);

    const requirements = [
        { label: "At least 1 uppercase character (A-Z)", isValid: /[A-Z]/.test(signUp.password) },
        { label: "At least 1 lowercase character (a-z)", isValid: /[a-z]/.test(signUp.password) },
        { label: "At least 1 special character ($%&*@)", isValid: /[!@#$%^&*(),.?":{}|<>]/.test(signUp.password), },
        { label: "At least 1 digit (0-9)", isValid: /[0-9]/.test(signUp.password), },
        { label: "At least 8 character long", isValid: signUp.password.length >= 8, },
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
            setAlert({ message: "You must agree to the terms and conditions.", type: "warning" });
            return;
        }
        setLoading(true)
        dispatch(signUpUser(signUp)).then((action)=>{
            if (action.type === "user/signUpUser/fulfilled"){
                setLoading(false)
                // Assuming payload contains user data like email
                setAlert({ message: 'Success! Verify email', type: 'success'})
                const email = action.payload?.data?.email;
                router.push(`/verify-otp?email=${email}`);
            }
            setLoading(false)
            if (action.payload === "User already exists"){
                setAlert({ message: "User already exists", type: "error" });
                return;
            }
            if (action.payload === "Network Error"){
                setAlert({ message: "Network Error", type: "error" });
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
                            <label className="input relative input-bordered flex items-center gap-2 mb-1 w-full">
                                First name:
                                <input 
                                    type="text" 
                                    name='first_name'
                                    autoComplete='off'
                                    required
                                    aria-invalid={validCredential.first_name ? 'false' : 'true'}
                                    aria-describedby='uidnote'
                                    onFocus={() => setCredentialFocus(prev => ({ ...prev, first_name: true }))}
                                    onBlur={() => setCredentialFocus(prev => ({ ...prev, first_name: false }))}                                
                                    value={signUp.first_name}
                                    className="grow"
                                    onChange={handleInput}
                                />
                                <span className={signUp.first_name.length <= 2 ? 'hidden': 'block'}>
                                    <IoCheckmarkDoneSharp className='text-green-500 text-lg' />
                                </span>
                                <span className={credentialFocus.first_name && signUp.first_name.length <= 2 ? 'block': 'hidden'}>
                                    <BiSolidError className='text-yellow-500 text-lg' />
                                </span>
                            </label>
                            <div className='relative mb-6 flex justify-end'>
                                <p id='uidnote' className={credentialFocus.first_name && signUp.first_name && signUp.first_name.length <= 2 ? 'text-xs px-3 py-1 rounded text-white bg-black/80 flex items-center gap-2' : 'hidden'}>
                                    <FaCircleInfo className='text-white' />
                                    3 to 24 Characters
                                </p>
                            </div>
                            <label className="input input-bordered flex items-center gap-2 mb-1 w-full">
                                Last name:
                                <input 
                                    type="text"    
                                    className="grow" 
                                    name='last_name'
                                    autoComplete='off'
                                    required
                                    aria-invalid={validCredential.last_name ? 'false' : 'true'}
                                    aria-describedby='pwdnote'
                                    onFocus={() => setCredentialFocus(prev => ({ ...prev, last_name: true }))}
                                    onBlur={() => setCredentialFocus(prev => ({ ...prev, last_name: false }))}                                
                                    value={signUp.last_name}
                                    onChange={handleInput}    
                                />
                                <span className={signUp.last_name.length <= 2 ? 'hidden': 'block'}>
                                    <IoCheckmarkDoneSharp className='text-green-500 text-lg' />
                                </span>
                                <span className={credentialFocus.last_name && signUp.last_name.length <= 2 ? 'block': 'hidden'}>
                                    <BiSolidError className='text-yellow-500 text-lg' />
                                </span>
                            </label>
                            <div className='relative mb-6 flex justify-end'>
                                <p id='pwdnote' className={credentialFocus.last_name && signUp.last_name && signUp.last_name.length <= 2 ? 'text-xs px-3 py-1 rounded text-white bg-black/80 flex items-center gap-2' : 'hidden'}>
                                    <FaCircleInfo className='text-white' />
                                    3 to 24 Characters
                                </p>
                            </div>
                            <label className="input input-bordered flex items-center gap-2 mb-1 w-full">
                                Your email:
                                <input 
                                    type="email" 
                                    className="grow" 
                                    name='email'
                                    autoComplete='off'
                                    required
                                    aria-invalid={validCredential.email ? 'false' : 'true'}
                                    aria-describedby='emailnote'
                                    onFocus={() => setCredentialFocus(prev => ({ ...prev, email: true }))}
                                    onBlur={() => setCredentialFocus(prev => ({ ...prev, email: false }))}                                
                                    value={signUp.email}
                                    onChange={handleInput}       
                                />
                                <span className={validCredential.email ? 'block': 'hidden'}>
                                    <IoCheckmarkDoneSharp className='text-green-500 text-lg' />
                                </span>
                                <span className={credentialFocus.email && !validCredential.email ? 'block': 'hidden'}>
                                    <BiSolidError className='text-yellow-500 text-lg' />
                                </span>
                            </label>
                            <div className='relative mb-6 flex justify-end'>
                                <p id='emailnote' className={credentialFocus.email && signUp.email && !validCredential.email ? 'text-xs px-3 py-1 rounded text-white bg-black/80 flex items-center gap-2' : 'hidden'}>
                                    <FaCircleInfo className='text-white' />
                                    A valid email is required
                                </p>
                            </div>
                            <FadeInSection>
                                <label className="input input-bordered flex items-center gap-2 mb-5 w-full">
                                    Password:
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        className="grow" 
                                        name='password'
                                        required
                                        aria-invalid={validCredential.password ? 'false' : 'true'}
                                        aria-describedby='uidnote'
                                        onFocus={() => setCredentialFocus(prev => ({ ...prev, password: true }))}
                                        onBlur={() => setCredentialFocus(prev => ({ ...prev, password: false }))}                                
                                        value={signUp.password}
                                        onChange={handleInput}       
                                    />
                                    <div className='flex items-center gap-1'>
                                        <span className={validCredential.password ? 'block': 'hidden'}>
                                            <IoCheckmarkDoneSharp className='text-green-500 text-lg' />
                                        </span>
                                        <span className={credentialFocus.password && !validCredential.password ? 'block': 'hidden'}>
                                            <BiSolidError className='text-yellow-500 text-lg' />
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-gray-600"
                                            >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </label>
                            </FadeInSection>
                            <FadeInSection>
                                <div className='mb-5'>
                                    {requirements.map((req, index) => (
                                        <div
                                            key={index}
                                            className={credentialFocus.password ? `flex items-center gap-1 text-black mb-1 ${
                                                req.isValid ? "text-green-600" : "text-red-800"
                                            }` : 'flex items-center gap-1 text-black mb-1'}
                                        >
                                            {req.isValid ? <IoIosCheckmarkCircleOutline  /> : <MdErrorOutline className='text-sm' />}
                                            <p className='text-xs'> {req.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </FadeInSection>
                            <FadeInSection>
                                <label className="input input-bordered flex items-center gap-2 mb-1 w-full">
                                    Confirm password:
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        className="grow" 
                                        name='confirmPassword'
                                        required
                                        aria-invalid={validCredential.confirmPassword ? 'false' : 'true'}
                                        aria-describedby='cnfpwdnote'
                                        onFocus={() => setCredentialFocus(prev => ({ ...prev, confirmPassword: true }))}
                                        onBlur={() => setCredentialFocus(prev => ({ ...prev, confirmPassword: false }))}                                
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}       
                                    />
                                    <span className={validCredential.confirmPassword && confirmPassword ? 'block': 'hidden'}>
                                        <IoCheckmarkDoneSharp className='text-green-500 text-lg' />
                                    </span>
                                    <span className={credentialFocus.confirmPassword && !validCredential.confirmPassword || confirmPassword !== signUp.password ? 'block': 'hidden'}>
                                        <BiSolidError className='text-yellow-500 text-lg' />
                                    </span>
                                </label>
                                <div className='relative mb-6 flex justify-end'>
                                    <p id='cnfpwdnote' className={credentialFocus.confirmPassword && confirmPassword && confirmPassword.length <= 2  || confirmPassword !== signUp.password ? 'text-xs px-3 py-1 rounded text-white bg-black/80 flex items-center gap-2' : 'hidden'}>
                                        <FaCircleInfo className='text-white' />
                                        Must match the first password input
                                    </p>
                                </div>
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
                                    <button 
                                        disabled={signUp.first_name === '' || signUp.last_name === '' || !validCredential.email || !validCredential.password || !validCredential.confirmPassword ? true : false} 
                                        className={signUp.first_name === '' || signUp.last_name === '' || !validCredential.email || !validCredential.password || !validCredential.confirmPassword ? 'bg-purple-800/20 text-white text-sm py-3 px-7 rounded-full' : 'bg-purple-800 text-white text-sm py-3 px-7 rounded-full'} >
                                        Create account
                                    </button>
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
