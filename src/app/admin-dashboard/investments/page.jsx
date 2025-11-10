'use client'
import React, { useEffect, useState } from 'react'
import Nav from '@/app/components/dashboardComponents/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserInvestment } from '@/app/redux/slices/investmentPlanSlice';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { BsInfoCircle } from 'react-icons/bs';
import InvestmentProgress from '@/app/components/dashboardComponents/investmentProgress';

export default function page() {
    const dispatch = useDispatch();
    const { loading, user_investment} = useSelector((state) => state.investmentPlan);
    const [investment_status, setInvestmentStatus] = useState('active');

    const formatCurrency = (value) => typeof value === 'number' ? `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$0.00'
    const capitalizeFirst = (word) => {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const handleFilter = async (status) => {
        setInvestmentStatus(status)
        switch (status) {
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
        dispatch(getAllUserInvestment('active'));
    }, []);
    return (
        <div className='bg-gray-100 h-screen overflow-y-auto'>
            <Nav dash={true} admin={true} />
            <div className='pt-20 px-5'>
                <div className='mb-5'>
                    <button className='text-sm w-full text-white bg-black border border-x-purple-800 rounded-lg  py-1 px-3'>Run Daily Investment</button>
                </div>
                <div className='border rounded-full grid grid-cols-2 mb-5 bg-white transition-color duration-500'>
                    <button onClick={()=> handleFilter('active')} className={`py-1 rounded-full text-sm transition-color duration-500 ${investment_status === 'active' ? 'bg-purple-800 text-white' : 'text-black'}`}>Active</button>
                    <button onClick={()=> handleFilter('completed')} className={`py-1 rounded-full text-sm transition-color duration-500 ${investment_status === 'completed' ? 'bg-purple-800 text-white' : 'text-black'}`}>Completed</button>
                </div>
                <div className='pb-12'>
                    {             
                        loading ? <div className='h-40 flex justify-center items-center'><div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-800 border-t-transparent"></div></div> : (
                            user_investment?.length === 0 ? <div className='p-5 text-center text-sm h-screen justify-center items-center'>You don't have any {investment_status} investment from your users!</div> :
                            user_investment?.map((inv) => {
                                return(
                                    <div key={inv?._id} className="mb-5 p-3 border shadow bg-white">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div>
                                                    <div className='flex items-center gap-1'>
                                                        <FaArrowTrendUp className='text-green-500 text-xs' />
                                                        <p className='text-black/70 text-sm'>Earnings:</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='font-semibold'>{formatCurrency(inv?.accruedInterest)}</p>
                                                    <div className='flex items-center gap-1 justify-end'>
                                                        <p className='text-xs text-black/40'>Invested&nbsp;by:</p>
                                                        <p className='text-xs'>Jackson gabriel</p>
                                                    </div>
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
            </div>
        </div>
    )
}
