import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CiEdit } from "react-icons/ci";
import { updateMe } from '@/app/redux/slices/UserSlice';
import ToastAlert from '../ToastAlert';
import { Checkbox } from '@/components/ui/checkbox';

const formatDate = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function PersonalInfo() {
    const dispatch = useDispatch();
    const loggedUser = useSelector((state)=> state.user);
    const [isDisabled, setIsDisabled] = useState(true);
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [confirmed, setConfirmed] = useState(false);
    const [updateData, setUpdateData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        gender: '',
        date_of_birth: '',
        country_of_residence: '',
        city: '',
        street: '',
        postal_code: ''
    })
    const toggleEdit = () => {
        setIsDisabled(!isDisabled);
    };
    const capitalizeFirst = (word) => {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    const handleConfirm = (checked) => {
        setConfirmed(checked);
    };
    const handleInput = (e) => {
        const { name, value} = e.target;
        setUpdateData((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!confirmed) {
            setAlert({ message: 'Please confirm all information provided is accurate', type: 'error'})
            return;
        }

        try {
            setLoading(true)
            const action = await dispatch(updateMe(updateData));
            if (updateMe.fulfilled.match(action)) {
                setLoading(false)
                setAlert({ message: "Profile updated successfully!", type: "success" });
                setIsDisabled(true)
            } else {
                setLoading(false)
                const message = action.payload;
                switch (message) {
                    case message:
                        setAlert({ message, type: "error" });
                        break;
                    default:
                        setAlert({ message: "Profile update failed, try again", type: "error" });
                        break;
                }
            }
        } catch (error) {
            setAlert({ message: error.message || "Unexpected error occurred. Try again", type: "error" });
        } finally {
            setLoading(false)
        }
    }
    useEffect(()=> {
        setUpdateData((prev) => ({
            ...prev,
            first_name: capitalizeFirst(loggedUser?.user?.first_name) || '',
            last_name: capitalizeFirst(loggedUser?.user?.last_name) || '',
            phone_number: loggedUser?.user.phone_number || '',
            gender: capitalizeFirst(loggedUser?.user.gender) || '',
            date_of_birth: formatDate(loggedUser?.user.date_of_birth) || '',
            country_of_residence: capitalizeFirst(loggedUser?.user.country_of_residence) || '',
            city: capitalizeFirst(loggedUser?.user.city) || '',
            street: capitalizeFirst(loggedUser?.user.street) || '',
            postal_code: capitalizeFirst(loggedUser?.user.postal_code) || '',
        }))    
    }, [])
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <ToastAlert
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert({ message: "", type: "info" })}
            />
        </div>
        <div className='border-b flex items-end justify-between border-gray-200 pb-3 mb-5 font-semibold'>
            <p>Personal info</p>
            {
                isDisabled ? (
                    <div onClick={toggleEdit} className='flex items-center gap-1 text-blue-500'>
                        <p className='text-xs'>Update profile</p>
                        <CiEdit />
                    </div>
                ) : (
                    <div onClick={toggleEdit} className='flex items-center gap-1 text-red-500'>
                        <p className='text-xs'>Cancel edit</p>
                        <CiEdit />
                    </div>
                )
            }
        </div>
      <div className='bg-black/80 text-white p-5 mb-5 rounded-lg'>
            <div className='flex justify-center mb-5'>
                <div className='size-20 rounded-full border-purple-800 border-2'>
                    <img src={ loggedUser?.user?.profilePics?.url || "/images/dp.jpg"} alt="" className='size-full object-cover rounded-full' />
                </div>
            </div>
        <div className='flex gap-5 text-sm'>
            <div className='w-[40%]'>
                <p className='mb-5 border border-transparent'>Last&nbsp;Name:</p>
                <p className='mb-5 border border-transparent'>First&nbsp;Name:</p>
                <p className='mb-5 border border-transparent'>Pone&nbsp;Number:</p>
                <p className='mb-5 border border-transparent'>Email:</p>
                <p className='mb-5 border border-transparent'>Gender:</p>
                <p className=' border border-transparent'>DOB:</p>
            </div>
            <div className=' w-[60%]'>
                <input type="text" 
                    className={`bg-transparent w-full outline-none focus:shadow px-1 border mb-5 transition-all duration-300 ${
                        isDisabled
                        ? "text-gray-400 border-transparent cursor-not-allowed"
                        : "text-white border-white/50 focus:border-white/70"
                    }`}
                    placeholder='_' 
                    name='last_name'
                    value={updateData?.last_name}
                    disabled={isDisabled}
                    onChange={handleInput}    
                />
                <input type="text"
                    className={`bg-transparent w-full outline-none focus:shadow px-1 border mb-5 transition-all duration-300 ${
                        isDisabled
                        ? "text-gray-400 border-transparent cursor-not-allowed"
                        : "text-white border-white/50 focus:border-white/70"
                    }`} 
                    placeholder='_' 
                    name='first_name'
                    value={updateData?.first_name}
                    disabled={isDisabled}
                    onChange={handleInput}    
                />
                <input type="text" 
                    className={`bg-transparent w-full outline-none focus:shadow px-1 border mb-5 transition-all duration-300 ${
                        isDisabled
                        ? "text-gray-400 border-transparent cursor-not-allowed"
                        : "text-white border-white/50 focus:border-white/70"
                    }`}
                    placeholder='_' 
                    name='phone_number'
                    value={updateData?.phone_number || ''}
                    disabled={isDisabled}
                    onChange={handleInput}    
                />
                <input type="text"
                    className={`bg-transparent w-full outline-none focus:shadow px-1 border mb-5 transition-all duration-300 ${
                        isDisabled
                        ? "text-gray-400 border-transparent cursor-not-allowed"
                        : "text-white border-white/50 focus:border-white/70"
                    }`} 
                    placeholder='_' 
                    name='email'
                    value={capitalizeFirst(loggedUser?.user?.email) || ''}
                    disabled
                    // onChange={handleInput}    
                />
                <input type="text" 
                    className={`bg-transparent w-full outline-none focus:shadow px-1 border mb-5 transition-all duration-300 ${
                        isDisabled
                        ? "text-gray-400 border-transparent cursor-not-allowed"
                        : "text-white border-white/50 focus:border-white/70"
                    }`}
                    placeholder='_' 
                    name='gender'
                    value={updateData?.gender || ''}
                    disabled={isDisabled}
                    onChange={handleInput}    
                />
                <input type="text" 
                    className={`bg-transparent w-full outline-none focus:shadow px-1 border mb-5 transition-all duration-300 ${
                        isDisabled
                        ? "text-gray-400 border-transparent cursor-not-allowed"
                        : "text-white border-white/50 focus:border-white/70"
                    }`}
                    placeholder='_' 
                    name='date_of_birth'
                    value={updateData?.date_of_birth || ''}
                    disabled={isDisabled}
                    onChange={handleInput}    
                />
            </div>
        </div>
      </div>
        <div className='border-b border-gray-200 pb-3 mb-5 font-semibold'>
            <p>Residential address</p>
        </div>
        <div className='mb-5 rounded-lg items-center text-sm bg-black/80 text-white p-5'>
            <div className='grid grid-cols-5 mb-5 items-center'>
                <p className='col-span-2'>Country of residence:</p>
                <div className='col-span-3'>
                    <input type="text" 
                        className={`bg-transparent w-full outline-none focus:shadow px-1 border transition-all duration-300 ${
                            isDisabled
                            ? "text-gray-400 border-transparent cursor-not-allowed"
                            : "text-white border-white/50 focus:border-white/70"
                        }`}
                        placeholder='_' 
                        name='country_of_residence'
                        value={updateData?.country_of_residence || ''}
                        disabled={isDisabled}  
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className='grid grid-cols-5 mb-5 items-center'>
                <p className='col-span-2'>City:</p>
                <div className='col-span-3'>
                    <input type="text" 
                        className={`bg-transparent w-full outline-none focus:shadow px-1 border transition-all duration-300 ${
                            isDisabled
                            ? "text-gray-400 border-transparent cursor-not-allowed"
                            : "text-white border-white/50 focus:border-white/70"
                        }`}
                        placeholder='_' 
                        name='city'
                        value={updateData?.city || ''}  
                        disabled={isDisabled}
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className='grid grid-cols-5 mb-5 items-center'>
                <p className='col-span-2'>Street, house Number:</p>
                <div className='col-span-3'>
                    <input type="text" 
                        className={`bg-transparent w-full outline-none focus:shadow px-1 border transition-all duration-300 ${
                            isDisabled
                            ? "text-gray-400 border-transparent cursor-not-allowed"
                            : "text-white border-white/50 focus:border-white/70"
                        }`}
                        placeholder='_' 
                        name='street'
                        value={updateData?.street || ''} 
                        disabled={isDisabled} 
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className='grid grid-cols-5 items-center'>
                <p className='col-span-2'>Postal code:</p>
                <div className='col-span-3'>
                    <input type="text" 
                        className={`bg-transparent w-full outline-none focus:shadow px-1 border transition-all duration-300 ${
                            isDisabled
                            ? "text-gray-400 border-transparent cursor-not-allowed"
                            : "text-white border-white/50 focus:border-white/70"
                        }`}
                        placeholder='_' 
                        name='postal_code'
                        value={updateData?.postal_code || ''} 
                        disabled={isDisabled} 
                        onChange={handleInput}
                    />
                </div>
            </div>
        </div>
        { isDisabled ? null : (<div className='mb-10'>
            <div className='flex gap-2 mb-3'>
                <Checkbox checked={confirmed} onCheckedChange={handleConfirm} />
                <p className='text-xs'>I confirm that all the information provided is accurate and complete.</p>
            </div>
            <button className='px-10 py-1 w-full text-white bg-purple-800 rounded flex items-center justify-center'>{ loading ? <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div> : 'Update'}</button>
        </div>)}
    </form>
  )
}
