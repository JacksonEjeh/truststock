'use client'
import React, { useState } from 'react'
import { MdErrorOutline } from 'react-icons/md'
import FadeInSection from '../FadeInSection'
import ToastAlert from '../ToastAlert';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '@/app/redux/slices/UserSlice';

export default function Security() {
    const { loading } = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [ change_password, setChangePassword ] = useState({
        old_password: '',
        new_password: '',
    });
    const [ confirm_password, setConfirmPassword ] = useState('')

    const handleInput = (e) => {
        const { name, value } = e.target;
        setChangePassword((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( !change_password.old_password || !change_password.new_password || !confirm_password ) {
            setAlert({ message: "Please fill all fields", type: "error" });
            return;
        }
        if (change_password.new_password !== confirm_password) {
            setAlert({ message: "Passwords do not match", type: "error" });
            return;
        }
        try {
            const action = await dispatch(changePassword(change_password));

            if(changePassword.fulfilled.match(action)) {
                setAlert({ message: "Password changed successfully", type: "success" });
                setChangePassword({ old_password: '', new_password: '', });
                setConfirmPassword('');
            } else {
                const message = action.payload;
                console.log(message)
                setAlert({ message: message, type: "error" });
            }
        } catch (error) {
            setAlert({ message: error.message, type: "error" });
        }
    }
  return (
    <div>
        <div>
            <ToastAlert
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert({ message: "", type: "info" })}
            />
        </div>
        <div className='border-b border-gray-200 pb-3 mb-5 font-semibold'>
            <p>Change password</p>
        </div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='rounded w-full py-3 px-4 outline-none focus:shadow font-light mb-5' 
                placeholder='Current password' 
                name='old_password'
                value={change_password.old_password}
                onChange={handleInput}
            />
            <input 
                type="text" 
                className='rounded w-full py-3 px-4 outline-none focus:shadow font-light mb-5' 
                placeholder='New password'
                name='new_password'
                value={change_password.new_password}
                onChange={handleInput}
            />
            <FadeInSection>
                <div className='mb-5 font-light'>
                    <div className='flex items-center gap-1 mb-2'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 1 lowercase character (a-z)</p>
                    </div>
                    <div className='flex items-center gap-1 mb-2'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 1 uppercase character (A-Z)</p>
                    </div>
                    <div className='flex items-center gap-1 mb-2'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 1 special character ($%&*@)</p>
                    </div>
                    <div className='flex items-center gap-1 mb-2'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 1 digit (0-9)</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 9 character long</p>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <input 
                    type="text" 
                    className='rounded w-full py-3 px-4 outline-none focus:shadow font-light mb-5' 
                    placeholder='Confirm new password' 
                    name='confirm_password'
                    value={confirm_password}
                    onChange={(e) => setConfirmPassword( e.target.value )}
                />
                <div className=' pb-5'>
                    <button className='bg-purple-800/30 text-purple-800 border border-purple-800 px-10 py-2 w-full rounded text-sm'>{loading ? 'Loading...':'Save changes'}</button>
                </div>
            </FadeInSection>
        </form>
    </div>
  )
}
