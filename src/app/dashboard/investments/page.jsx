'use client'
import Footer from '@/app/components/dashboardComponents/Footer';
import InvestmentProgress from '@/app/components/dashboardComponents/investmentProgress';
import Nav from '@/app/components/dashboardComponents/Nav';
import FadeInSection from '@/app/components/FadeInSection';
import Spinner from '@/app/components/Spinner';
import ToastAlert from '@/app/components/ToastAlert';
import { getAllUserInvestment } from '@/app/redux/slices/investmentPlanSlice';
import React, { useEffect, useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux'

export default function page() {
    const dispatch = useDispatch();
    const { loading, user_investment} = useSelector((state) => state.investmentPlan)
    const [alert, setAlert] = useState({ message: "", type: "info"});
    const [investment_status, setInvestmentStatus] = useState('');

    const formatCurrency = (value) => typeof value === 'number' ? `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$0.00'
    const capitalizeFirst = (word) => {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const handleFilter = async (status) => {
        setInvestmentStatus(status)
        switch (status) {
            case '':
                    dispatch(getAllUserInvestment())
                break;
            case 'active':
                    dispatch(getAllUserInvestment('active'))
                break;
            case 'completed':
                    dispatch(getAllUserInvestment('completed'))
                break;
        
            default:
                dispatch(getAllUserInvestment())
            break;
        }
    };
    useEffect(() => {
        dispatch(getAllUserInvestment())
    }, []);
  return (
    <>
        <ToastAlert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert({ message: "", type: "info" })}
        />
        <Nav dash={true} />
        <FadeInSection>
            
            <div className='pt-24 pb-10 px-5 bg-gray-100 h-screen overflow-y-auto'>
                <div className='flex items-center justify-between mb-5'>
                    <div className=''>
                        <p className='text-gray-500 text-xs font-light'>Dashboard /</p>
                        <p className='font-semibold text-lg'>Investment</p>
                    </div>
                    <button onClick={()=> dispatch(getAllUserInvestment())} className='text-xs border rounded-full py-1 px-3'>Refresh</button> 
                </div>
                <div className='border rounded-full grid grid-cols-3 mb-5 bg-white transition-color duration-500'>
                    <button onClick={()=> handleFilter('')} className={`py-1 rounded-full text-sm transition-color duration-500 ${investment_status === '' ? 'bg-purple-800 text-white' : 'text-black'}`}>All</button>
                    <button onClick={()=> handleFilter('active')} className={`py-1 rounded-full text-sm transition-color duration-500 ${investment_status === 'active' ? 'bg-purple-800 text-white' : 'text-black'}`}>Active</button>
                    <button onClick={()=> handleFilter('completed')} className={`py-1 rounded-full text-sm transition-color duration-500 ${investment_status === 'completed' ? 'bg-purple-800 text-white' : 'text-black'}`}>Completed</button>
                </div>
                {             
                    loading ? <div className='h-40 flex justify-center items-center'><div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-800 border-t-transparent"></div></div> : (
                        user_investment?.length === 0 ? <div className='p-5 text-center text-sm h-screen justify-center items-center'>You don't have any {investment_status} investment. <span onClick={()=> router.push('/dashboard/invest')} className='text-blue-500'>Click here</span> to invest now!</div> :
                        user_investment?.map((inv) => {
                            return(
                                <div key={inv?._id} className="mb-5 p-3 border shadow bg-white">
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
                                            <div className='flex items-center gap-1 relative z-10'>
                                                <p className='text-xs text-black/40'>Duration:</p>
                                                <p className='text-xs'>{inv?.plan?.duration.value} {inv?.plan?.duration.unit}</p>
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
        </FadeInSection>
        <Footer />
    </>
  )
}
