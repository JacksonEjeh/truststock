'use client'
import BankAccounts from '@/app/components/dashboardComponents/BankAccounts'
import Footer from '@/app/components/dashboardComponents/Footer'
import MyProfile from '@/app/components/dashboardComponents/MyProfile'
import Nav from '@/app/components/dashboardComponents/Nav'
import PersonalInfo from '@/app/components/dashboardComponents/PersonalInfo'
import Security from '@/app/components/dashboardComponents/Security'
import FadeInSection from '@/app/components/FadeInSection'
import { getMe } from '@/app/redux/slices/UserSlice'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function page() {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState('profile');
    const handleSection = (e) => {
        const key = e.target.value;

        switch (key) {
            case 'security':
                setProfile('security');
                break;
            case 'personal':
                setProfile('personal');
                break;
            case 'banks':
                setProfile('banks');
                break;
            default:
                setProfile('profile');
                break;
        }
    };
    useEffect(()=> {
        dispatch(getMe())
    }, [])
    return (
        <div className='bg-gray-100 '>
            <Nav dash={true} />
            <FadeInSection>
            <div className='pt-20'>
                <div className='px-5'>
                    <div className='mb-5'>
                        <Link href={'/dashboard'} className='text-gray-500 text-xs font-light'>Dashboard /</Link>
                        <p className='font-semibold text-lg'>My Profile</p>
                    </div>
                    <fieldset className="fieldset mb-10">
                        <legend className="fieldset-legend">Section</legend>
                        <select className="select" onChange={handleSection}>
                            <option value="profile">My profile</option>
                            <option value="security">Security</option>
                            <option value="personal">Personal info</option>
                            <option value="banks">Bank accounts</option>
                        </select>
                    </fieldset>
                    {
                        profile === 'profile' ? (
                            <div className='pb-[300px]'>
                                <MyProfile />
                            </div>
                        ) : profile === 'personal' ? (
                            <div>
                                <PersonalInfo />
                            </div>
                        ) : profile === 'banks' ? (
                            <div className='pb-[300px]'>
                                <BankAccounts />
                            </div>
                        ) : (
                            <div>
                                <Security />
                            </div>
                        )
                    }
                </div>
            </div>
            </FadeInSection>
            <Footer />
        </div>
    )
  }
