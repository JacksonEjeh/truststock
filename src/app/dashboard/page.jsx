'use client'
import React, { useEffect, useState } from 'react'
import Nav from '../components/dashboardComponents/Nav'
import { TfiReload } from "react-icons/tfi";
import Link from 'next/link';
import Footer from '../components/dashboardComponents/Footer';
import FadeInSection from '../components/FadeInSection';
import Transactions from '../components/dashboardComponents/Transactions';
import Balance from '../components/dashboardComponents/Balance';
import Returns from '../components/dashboardComponents/Returns';
import Portfolio from '../components/dashboardComponents/Portfolio';
import { useDispatch } from 'react-redux';
import { getTransactionHistory, getWallet } from '../redux/slices/walletSlice';

export default function page() {
    const dispatch = useDispatch();
    
    const [showAmount, setShowAmount] = useState(() => {
        const storedValue = localStorage.getItem("showAmount");
        return storedValue === "true"; // convert string back to boolean
    });
    
    const showAmountBtn = () => {
        setShowAmount(prev => !prev);
    };

    const [homeBtn, setHomeBtn] = useState('balance');
    const handleHomeBtn = (key) => {
        switch (key) {
            case 'returns':
                setHomeBtn('returns');
                break;
            case 'portfolio':
                setHomeBtn('portfolio');
                break;
            default:
                setHomeBtn('balance');
                break;
        }
    };

    useEffect(() => {
        localStorage.setItem("showAmount", showAmount);
    }, [showAmount]);

    useEffect(() => {
        dispatch(getWallet());
    }, []);
  return (
    <div className='bg-gray-100'>
        <Nav dash={true} />
        <FadeInSection>
        <div className='pt-20'>
            <div className='px-5'>
                <div className='flex items-center justify-between mb-5'>
                    <div className=''>
                        <p className='text-gray-500 text-xs font-light'>Dashboard /</p>
                        <p className='font-semibold text-lg'>Overview</p>
                    </div>
                    <button onClick={()=> dispatch(getWallet())} className='text-xs border rounded-full py-1 px-2'>Update balance</button> 
                </div>
                <div className='grid grid-cols-3'>
                    <div>
                        <button onClick={() => handleHomeBtn('balance')} className={homeBtn === 'balance' ? 'border-b-2 border-purple-800 text-sm px-2 py-1 w-full font-light' : 'border-b-2 text-sm px-2 py-1 w-full font-light'}>Balance</button>
                    </div>
                    <div>
                        <button onClick={() => handleHomeBtn('returns')} className={homeBtn === 'returns' ? 'border-b-2 border-purple-800 text-sm px-2 py-1 w-full font-light' : 'border-b-2 text-sm px-2 py-1 w-full font-light'}>Returns</button>
                    </div>
                    <div>
                        <button onClick={() => handleHomeBtn('portfolio')} className={homeBtn === 'portfolio' ? 'border-b-2 border-purple-800 text-sm px-2 py-1 w-full font-light' : 'border-b-2 text-sm px-2 py-1 w-full font-light'}>Portfolio</button>
                    </div>
                </div>
            </div>
            {
                homeBtn === 'balance' ? (
                    <div>
                        <Balance showAmountBtn={showAmountBtn} showAmount={showAmount} />
                    </div>
                ) : homeBtn === 'returns' ? (
                    <div>
                        <Returns showAmountBtn={showAmountBtn} showAmount={showAmount} />
                    </div>
                ) : (
                    <div>
                        <Portfolio />
                    </div>
                )
            }
            <div className='p-5'>
                <div className='grid grid-cols-2 gap-5'>
                    <Link href={'/dashboard/invest'}>
                        <button className='bg-purple-800 text-white w-full py-2 border-2 border-purple-800 font-semibold text-sm rounded-full'>Invest now</button>
                    </Link>
                    <Link href={'/dashboard/add-funds'}>
                        <button className='border-purple-800 border-2 text-purple-800 font-semibold w-full py-2 text-sm rounded-full'>Add funds</button>
                    </Link>
                </div>
            </div>
            <div className='p-5 bg-white'>
                <div className='flex justify-between items-center mb-3'>
                    <p className='text-sm font-semibold'>Activities</p>
                    <TfiReload className='text-gray-500' onClick={()=> dispatch(getTransactionHistory())}/>
                </div>
               <Transactions />
            </div>
            {/* <Faq /> */}
            <Footer />
        </div>
        </FadeInSection>
    </div>
  )
}
