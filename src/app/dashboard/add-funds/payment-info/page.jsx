'use client'
import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection'
import ToastAlert from '@/app/components/ToastAlert'
import axios from 'axios'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { initiateDeposit } from '@/app/redux/slices/walletSlice'

export default function page() {
    const dispatch = useDispatch();
    const router = useRouter();
    const {user} = useSelector((state) => state.user );
    const searchParams = useSearchParams();
    const amount = searchParams?.get('amount');
    const method = searchParams?.get('method');
    const [alert, setAlert] = useState({ message: "", type: "info" });
    const [btcAmount, setBtcAmount] = useState(null);
    const [receipt, setReceipt] = useState(null);
    const [loading, setLoading] = useState(false)

    const convertToBTC = async (usdAmount) => {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/simple/price', { params: { ids: 'bitcoin', vs_currencies: 'usd'}});
            const btcPrice = res.data?.bitcoin?.usd;

            if (!btcPrice) {
                setAlert( { message: 'Failed to retrieve BTC price', type: 'error' });
                throw new Error('Failed to retrieve BTC price');
            }

            // Convert USD to BTC
            const btcAmount = usdAmount / btcPrice;
            return parseFloat(btcAmount.toFixed(8));

        } catch (error) {
            console.error('BTC conversion error:', error.message);
            setAlert({ message: error.message || 'Could not convert USD to BTC. Please try again.', type: 'error' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!receipt) {
            setAlert({message:"Please upload a receipt screenshot", type: 'error'});
            return;
        }
        const formData = new FormData();
        formData.append("amount", amount);
        formData.append('method', method);
        formData.append("receipt", receipt);

        try {
            setLoading(true)
            const action = await dispatch(initiateDeposit(formData));
            if (initiateDeposit.fulfilled.match(action)) {
                setLoading(false)
                setAlert({ message: "Deposit initiated successfully!", type: "success" });
                router.push('/dashboard/transaction')
            } else {
                setLoading(false)
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
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        const fetchBTC = async () => {
            if (amount) {
                const btc = await convertToBTC(parseFloat(amount));
                setBtcAmount(btc);
            }
        }
        fetchBTC();
    }, [amount]);

    const handleCopy = async (value) => {
        try {
            await navigator.clipboard.writeText(value);
            setAlert({ message: "Copied to clipboard!", type: "success" });
        } catch {
            setAlert({ message: "Failed to copy.", type: "error" });
        }
    };
    
  return (
    <div className='bg-gray-100 h-screen overflow-y-auto'>
        <div>
            <ToastAlert
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert({ message: "", type: "info" })}
            />
        </div>
        <Nav />
        <FadeInSection>
            <div className='p-5 pt-20'>
                <div className='mb-5'>
                    <p className='font-light text-sm'>UserID</p>
                    <p className='text-sm'>auth0|4776r5g765679vau9556776fd7</p>
                </div>
                <div className='mb-5'>
                    <p className='font-light text-sm'>Email</p>
                    <p className='text-sm'>{user?.email}</p>
                </div>
                <div className='mb-5'>
                    <p className='font-light text-sm'>Type</p>
                    <p className='text-sm'>{method?.toUpperCase()}</p>
                </div>
                <div className='mb-3'>
                    <p className='font-light text-sm'>Address <span className='text-xs text-blue-500' onClick={()=> handleCopy('bc1qtopvsecbjfd47jbzaqpmbcxtyuijg5dhat5578')}>copy</span></p>
                    <p className='text-sm'>bc1qtopvsecbjfd47jbzaqpmbcxtyuijg5dhat5578</p>
                </div>
                <div className='mb-3'>
                    <p className='text-xs text-red-500'>NOTE: while sending crypto be sure that wallet you are copy from site is the same that you paste.</p>
                </div>
                <div className='mb-5'>
                    <p className='font-light text-sm'>
                        USD Amount <span className='text-xs text-blue-500 cursor-pointer' onClick={() => handleCopy(amount)}>copy</span>
                    </p>
                    <p className='text-sm'>${amount}</p>
                    </div>

                    <div className='mb-5'>
                    <p className='font-light text-sm'>
                        BTC Equivalent <span className='text-xs text-blue-500 cursor-pointer' onClick={() => handleCopy(btcAmount)}>copy</span>
                    </p>
                    <p className='text-sm'>{btcAmount ? `${btcAmount} BTC` : "Converting..."}</p>
                </div>
                <div className='mb-5'>
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full max-w-sm items-center gap-3 mb-5">
                        <Label htmlFor="picture">Upload a screenshot of your deposit receipt for confirmation.</Label>
                        <Input id="picture" type="file" onChange={(e) => setReceipt(e.target.files[0])} />
                    </div>
                    <button className='bg-purple-800 w-full py-3 text-sm text-white rounded flex items-center justify-center'>{loading ? <div className="animate-spin rounded-full h-5 w-5 border-4 border-white border-t-transparent"></div> : 'Completed'}</button>
                </form>
            </div>
        </FadeInSection>
        <Footer />
    </div>
  )
}
