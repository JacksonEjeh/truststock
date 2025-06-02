'use client'
import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection'
import ToastAlert from '@/app/components/ToastAlert'
import { initiateDeposit } from '@/app/redux/slices/walletSlice'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

export default function page() {
    const { loading } = useSelector((state) => state.wallet)
    const dispatch = useDispatch();
    const router = useRouter();
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [ deposit_info, setDepositInfo ] = useState({
        amount: '',
        method: ''
    });

    const handleInput = (e)=> {
        const { name, value } = e.target;
        setDepositInfo((prev) => ({...prev, [name]: value}))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!deposit_info.amount || !deposit_info.method) {
            setAlert({ message: "All fields are required", type: "error" });
            return;
        }
    
        const parsedAmount = parseFloat(deposit_info.amount);
        if (!Number.isFinite(parsedAmount)) {
            setAlert({ message: "Amount must be a valid number", type: "error" });
            return;
        }
    
        if (parsedAmount < 100) {
            setAlert({ message: "Minimum deposit is $100", type: "error" });
            return;
        }
    
        const confirmed = confirm(`Are you sure you want to deposit $${parsedAmount} worth of ${deposit_info.method}?`);
        if (!confirmed) return;
    
        const payload = {
            amount: parsedAmount,
            method: deposit_info.method
        };
    
        try {
            const action = await dispatch(initiateDeposit(payload));
    
            if (initiateDeposit.fulfilled.match(action)) {
                setDepositInfo({
                    amount: '',
                    method: ''
                })
                setAlert({ message: "Deposit initiated successfully!", type: "success" });
                router.replace(`/dashboard/add-funds/payment-info?amount=${deposit_info.amount}&method=${deposit_info.method.toUpperCase()}`)
            } else {
                const message = action.payload;
                switch (message) {
                    case "All fields are required and amount must be valid":
                        setAlert({ message, type: "error" });
                        break;
                    case "Minimum deposit amount is $100":
                        setAlert({ message, type: "error" });
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
            <ToastAlert
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert({ message: "", type: "info" })}
            />
        </div>
        <Nav dash={true} />
        <FadeInSection>
            <div className='pt-20'>
                <div className='px-5'>
                    <div className='mb-5'>
                        <p className='text-gray-500 text-xs font-light'>Dashboard /</p>
                        <p className='font-semibold text-lg'>Add funds</p>
                    </div>
                    <div className="py-5">
                        <div className="flex gap-3 mb-5">
                            <div>
                                <div className="bg-gray-200 size-7 rounded-full flex items-center justify-center text-xs">01</div>
                            </div>
                            <div>
                                <p className="text-sm text-black/60">Once you click 'Add Funds' below, a new tab will be opened with our payment provider showing the cryptocurrency wallet ID and a QR code for you to use.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-5">
                            <div>
                                <div className="bg-gray-200 size-7 rounded-full flex items-center justify-center text-xs">02</div>
                            </div>
                            <div>
                                <p className="text-sm text-black/60 font-bold">Minimum amount is 100$</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-5">
                            <div>
                                <div className="bg-gray-200 size-7 rounded-full flex items-center justify-center text-xs">03</div>
                            </div>
                            <div>
                                <p className="text-sm text-black/60">After the crypto transaction is completed, wait for the deposit to be processed (funds will appear on your balance within few minutes.).</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <div className="bg-gray-200 size-7 rounded-full flex items-center justify-center text-xs">03</div>
                            </div>
                            <div>
                                <p className="text-sm text-black/60">Put your money to work!</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='mb-6'>
                        <div className='grid grid-cols-2 gap-5 mb-5'>
                            <select
                                className="select select-bordered w-full font-semi-bold"
                                onChange={handleInput}
                                value={deposit_info.method}
                                name='method'
                            >
                                <option value=''>Select preferred coin</option>
                                <option value='btc'>BTC</option>
                                <option value="ltc">LTC</option>
                                <option value="usdt">USDT TRC20</option>
                            </select>
                            <label className="input input-bordered flex items-center gap-2 text-sm w-full font-semi-bold">
                                $
                                <input 
                                    type="number" 
                                    className="grow" 
                                    placeholder='100'
                                    onChange={handleInput}
                                    value={deposit_info.amount}
                                    name='amount'
                                />
                            </label>
                        </div>
                        <button className='flex items-center justify-center rounded text-xs w-full bg-purple-800 py-3 border-2 border-purple-800 text-white font-semibold'>{ loading ? <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div> : "ADD FUNDS"}</button>
                    </form>
                    <FadeInSection>
                        <div className="p-4 bg-purple-500/20 rounded-lg flex gap-2 mb-5">
                            <div>
                                <RiErrorWarningFill className="text-purple-500 text-2xl" />
                            </div>
                            <p className="font-light text-xs">Truststock only accepts payments from the payment account opened in the name of the Investor. If payment is made without the Investor's ID, Truststock may not acknowledge the transfer until the Investor's ID is provided.</p>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="p-4 bg-red-500/20 rounded-lg flex gap-2 mb-5">
                            <div>
                                <RiErrorWarningFill className="text-red-500 text-2xl" />
                            </div>
                            <p className="font-light text-xs">As you start adding funds, please be aware that they won't be credited until requested actions are completed. Funds will be temporarily held for 7 days; if actions aren't done, they'll return to the original account.</p>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </FadeInSection>
        <Footer />
    </div>
  )
}
