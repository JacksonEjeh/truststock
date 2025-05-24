'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GoDotFill } from 'react-icons/go';
import FadeInSection from '../components/FadeInSection';
import ToastAlert from '../components/ToastAlert';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/UserSlice';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state) => state.user)
  const [showPassword, setShowPassword] = useState(false);
  const [ alert, setAlert ] = useState(({ message: "", type: "info"}));

  const [ sign_up, setSignUp ] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) =>{
    const { name, value } = e.target;
    setSignUp((prev)=> ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sign_up.email || !sign_up.password) {
      setAlert({ message: "All fields are required", type: "error" });
      return;
    }
  
    try {
      const action = await dispatch(loginUser(sign_up));
  
      if (loginUser.fulfilled.match(action)) {
        const accessToken = action.payload.accessToken;
        document.cookie = `accessToken=${accessToken}; path=/; secure; SameSite=None`;
        setAlert({ message: "Login successful", type: "success" });
        router.push("/dashboard");
      } else {
        const message = action.payload;
        switch (message) {
          case "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number":
            setAlert({
              message:
                "Password must include uppercase, lowercase, number, and special character.",
              type: "error",
            });
            break;
          case "Network Error":
            setAlert({ message: "Network Error", type: "error" });
            break;
          case "User not found":
            setAlert({ message: "User not found", type: "error" });
            break;
          case "Invalid credentials":
            setAlert({ message: "Email or password is incorrect", type: "error" });
            break;
          case "Invalid email format":
            setAlert({ message: "Email or password is incorrect", type: "error" });
            break;
          default:
            setAlert({ message: message || "Login failed", type: "error" });
            break;
        }
      }
    } catch (err) {
      setAlert({ message: "Unexpected error occurred. Try again", type: "error" });
    }
  };  

  return (
    <div className='h-screen flex items-center justify-center'>
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
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className='text-2xl mb-5 font-bold text-center'>Welcome back</h1>
          <div className='w-screen px-4'>
            <label className="input input-bordered flex items-center gap-2 mb-5 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input 
                type="text" 
                className="grow" 
                placeholder="Email" 
                name='email'
                value={sign_up.email}
                onChange={handleInput}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input 
                type={showPassword ? "text" : "password"}
                className="grow" 
                placeholder='Password' 
                name='password'
                value={sign_up.password}
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
          </div>
          <div className='px-4 flex justify-between items-center my-3'>
            <Link href={'/forget-password'} className='text-xs text-purple-800'>Forget password</Link>
            <Link href={'/sign-up'} className='text-xs text-purple-800'>Create account</Link>
          </div>
          <FadeInSection>
            <div className='px-4'>
              <button className='text-white bg-purple-800 w-full py-3 rounded-full'>{ loading ? "Loading..." : "Sign in"}</button>
            </div>
          </FadeInSection>
        </form>
      </div>
      </FadeInSection>
      <footer className='fixed bottom-0 left-0 right-0 p-4'>
        <p className='text-center text-xs text-gray-500'>&copy;2023 Truststock. All rights reserved.</p>
      </footer>
    </div>
  )
}
