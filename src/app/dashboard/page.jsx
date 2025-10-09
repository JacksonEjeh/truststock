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
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionHistory, getWallet } from '../redux/slices/walletSlice';
import SmartsuppChat from '../components/Smartsupp';
import InvestmentProgress from '../components/dashboardComponents/investmentProgress';
import { getAllUserInvestment } from '../redux/slices/investmentPlanSlice';
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";
import { FaAnglesDown } from "react-icons/fa6";
import ToastAlert from '../components/ToastAlert';
import { useRouter } from 'next/navigation';


export default function page() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading, user_investment} = useSelector((state) => state.investmentPlan)
    const formatCurrency = (value) => typeof value === 'number' ? `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$0.00'
    const capitalizeFirst = (word) => {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    const [alert, setAlert] = useState({ message: "", type: "info"})
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
        dispatch(getAllUserInvestment('active'));
    }, []);
  return (
    <div className='bg-gray-100'>
        <ToastAlert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert({ message: "", type: "info" })}
        />
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
            {
                user_investment?.length === 0 ? null : (
                    <div className='p-5 bg-white mb-5 relative'>
                        <div className='flex justify-between items-center mb-3'>
                            <p className='text-sm font-semibold'>Active investment</p>
                            <p onClick={()=> router.push('/dashboard/investments')} className='text-xs text-blue-500/70'>See more {'>>'}</p>
                        </div>
                        <div className={`${user_investment?.length > 0 ? 'h-[210px]' : ''} overflow-y-auto`}>
                            {
                                loading ? <div className='h-32 flex justify-center items-center'><div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-800 border-t-transparent"></div></div> : (
                                    user_investment?.map((inv) => {
                                        return(
                                            <div key={inv?._id} className="mb-5 p-3 border shadow">
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <div className='flex items-center gap-3'>
                                                            <div className='flex items-center gap-1'>
                                                                <FaArrowTrendUp className='text-green-500 text-xs' />
                                                                <p className='text-black/70 text-sm'>Earnings:</p>
                                                            </div>
                                                            <BsInfoCircle className='text-black/40 text-xs' onClick={() => setAlert(({message: 'Your earnings are calculated daily', type: 'info'}))} />
                                                        </div>
                                                        <div>
                                                            <p className='text-lg font-semibold'>{formatCurrency(inv?.accruedInterest)}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {
                                                            inv?.status === 'active' ? (
                                                                <div className='relative'>
                                                                    <div className="absolute inset-0 flex items-center">
                                                                        <div className="w-[70%] h-4 rounded-full bg-green-500/10 animate-[ping_2s_ease-in-out_infinite]"></div>
                                                                    </div>
                                                                    <div className='text-green-500 bg-green-500/10 rounded-full px-1 py-[1px] text-[10px] mb-1 flex items-center justify-center'>{capitalizeFirst(inv?.status)}</div>
                                                                </div>
                                                            ) : (
                                                                <div className='relative'>
                                                                    <div className='text-gray-400 bg-gray-400/10 rounded-full px-1 py-[1px] text-[10px] mb-1 flex items-center justify-center'>{capitalizeFirst(inv?.status)}</div>
                                                                </div>
                                                            )
                                                        }
                                                        <div className='flex items-center gap-1 relative z-10'>
                                                            <p className='text-xs text-black/40'>Plan:</p>
                                                            <p className='text-xs'>{capitalizeFirst(inv?.plan?.investment_plan)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <InvestmentProgress startDate={inv?.startDate} maturityDate={inv?.maturityDate} />
                                                </div>
                                                <div className='flex items-center mb-4 justify-between'>
                                                    <div className='flex items-center gap-1 justify-end'>
                                                        <p className='text-xs text-black/40'>Entry&nbsp;amount:</p>
                                                        <p className='text-xs'>{formatCurrency(inv?.amount)}</p>
                                                    </div>
                                                    <div className='flex items-center gap-1 justify-end'>
                                                        <p className='text-xs text-black/40'>Interest&nbsp;(ROI):</p>
                                                        <p className='text-xs'>{inv?.plan?.interest}%</p>
                                                    </div>
                                                </div>
                                                <div className='grid grid-cols-2 border-t'>
                                                    <div className='pt-1 text-center border-r'>
                                                        <p className='text-xs text-black/40'>Start date:</p>
                                                        <p className='text-sm'>
                                                            {new Date(inv?.startDate).toLocaleDateString("en-GB", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric",
                                                            })}
                                                        </p>
                                                    </div>
                                                    <div className='pt-1 text-center'>
                                                        <p className='text-xs text-black/40'>Maturity date:</p>
                                                        <p className='text-sm'>
                                                            {new Date(inv?.maturityDate).toLocaleDateString("en-GB", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric",
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            }
                        </div>
                        { user_investment?.length > 1 ? <div className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1 size-7 rounded-full border flex items-center justify-center'>
                            <FaAnglesDown className='text-sm'/>
                        </div> : null}
                    </div>
                )
            }
            <div className='p-5 bg-white'>
                <div className='flex justify-between items-center mb-3'>
                    <p className='text-sm font-semibold'>Activities</p>
                    <TfiReload className='text-gray-500' onClick={()=> dispatch(getTransactionHistory())}/>
                </div>
                <div className='h-[150px] overflow-y-auto'>
                    <Transactions />
                </div>
            </div>
            {/* <Faq /> */}
            <Footer />
        </div>
        </FadeInSection>
        <SmartsuppChat />
    </div>
  )
}
