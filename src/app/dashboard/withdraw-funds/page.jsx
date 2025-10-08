'use client'
import AvailableFunds from '@/app/components/dashboardComponents/AvailableFunds'
import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import PaymentAlert from '@/app/components/dashboardComponents/PaymentAlert'
import FadeInSection from '@/app/components/FadeInSection'
import ToastAlert from '@/app/components/ToastAlert'
import { getWallet, initiateWithdrawal } from '@/app/redux/slices/walletSlice'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'

export default function page() {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [paymentAlert, setPaymentAlert] = useState({ amount: null, type: null, status: null });
      const [showComponent, setShowComponent] = useState(true);
    const [withdrawal_info, setWithdrawalInfo] = useState({
        amount: '',
        method: '',
        walletAddress: ''
    });

    const handleInput = (e) => {
        const {name, value} = e.target;
        setWithdrawalInfo((prev)=> ({ ...prev, [name]: value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!withdrawal_info.amount || !withdrawal_info.method) {
            setAlert({ message: "All fields are required", type: "error" });
            return;
        }
        const parsedAmount = parseFloat(withdrawal_info.amount);
        if (!Number.isFinite(parsedAmount)) {
            setAlert({ message: "Amount must be a valid number", type: "error" });
            return;
        }
        if (parsedAmount < 100) {
            setAlert({ message: "Minimum deposit is $100", type: "error" });
            return;
        }
        const confirmed = confirm(`Are you sure you want to withdraw $${parsedAmount} worth of ${withdrawal_info.method} from your wallet?`);
        if (!confirmed) return;

        const payload = {
            amount: parsedAmount,
            method: withdrawal_info.method,
            walletAddress: withdrawal_info.walletAddress
        };
        try {
            const action = await dispatch(initiateWithdrawal(payload));
            if(initiateWithdrawal.fulfilled.match(action)) {
                setWithdrawalInfo({
                    amount: '',
                    method: '',
                    walletAddress: ''
                })
                setAlert({ message: "Withdrawal initiated successfully!", type: "success" });
                dispatch(getWallet());
                setPaymentAlert({ 
                    amount: action?.payload?.transaction?.amount.toFixed(2), 
                    type:action?.payload?.transaction?.type.toUpperCase(),
                    status: action?.payload?.transaction?.status.toUpperCase(),
                });
                setShowComponent(true);
            } else {
                const message = action.payload;
                switch (message) {
                    case message:
                        setAlert({ message, type: 'error'})
                        break;
                    default:
                        setAlert({ message: "Deposit failed, try again", type: "error" });
                        break;
                }
            }
        } catch (error) {
            setAlert({ message: error.message || "Unexpected error occurred. Try again", type: "error" });
        }
    };

  return (
    <div className='bg-gray-100'>
        <div>
            {
                showComponent && 
                <PaymentAlert
                    amount={paymentAlert.amount}
                    type={paymentAlert.type}
                    status={paymentAlert.status}
                    onclose={()=> setShowComponent(prev => !prev)}
                />
            }
            <ToastAlert
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert({ message: "", type: "info" })}
            />
        </div>
        <Nav dash={true} />
        <FadeInSection>
            <div className='pt-20'>
                <div className='px-5 pb-14'>
                    <div className='mb-5'>
                        <Link href={'/dashboard'} className='text-gray-500 text-xs font-light'>Dashboard /</Link>
                        <p className='font-semibold text-lg'>Withdraw funds</p>
                    </div>
                    <div className="p-4 bg-purple-500/20 rounded-lg flex gap-2 mb-5">
                        <div>
                            <RiErrorWarningFill className="text-purple-500 text-2xl" />
                        </div>
                        <p className="font-light text-xs">Withdrawal requests are processed within 24 hours. Minimum withdrawal amount is $100. if you have any further question about withdrawal of funds, please reference our <Link href={'/dashboard/help'} className='text-blue-500'>FAQ section</Link></p>
                    </div>
                    <div className='border-b border-gray-200 mb-5'>
                        <AvailableFunds />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                            className='rounded w-full py-3 px-4 outline-none focus:shadow font-light mb-5' 
                            placeholder='Amount to withdraw' 
                            name='amount'
                            value={withdrawal_info.amount}
                            onChange={handleInput}    
                        />
                        <select 
                            className=" select rounded w-full px-4 outline-none focus:shadow text-sm font-light mb-5"
                            name='method'
                            value={withdrawal_info.method}
                            onChange={handleInput}    
                        >
                            <option value="">Select Method</option>
                            <option value={'btc'}>BTC</option>
                            <option value="ltc">LTC</option>
                            <option value="usdt">USDT TRC20</option>
                        </select>
                        <input 
                            type="text" 
                            className='rounded w-full py-3 px-4 outline-none focus:shadow font-light mb-10' 
                            placeholder='Crypto wallet' 
                            name='walletAddress'
                            value={withdrawal_info.walletAddress}
                            onChange={handleInput}
                        />
                        <button className='w-full py-3 bg-purple-800 text-white text-sm rounded'>Withdraw funds</button>
                    </form>
                </div>
            </div>
        </FadeInSection>
        <Footer />
    </div>
  )
}
