import React, { act, useEffect, useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Checkbox } from '@/components/ui/checkbox'
import Api from '@/app/utils/AxiosInstance';

export default function Preview({ setAlert, alert, SetLoading2, trigger, planId, plan, type, duration, interest, amount, setInvestmentData}) {
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = async (e) => {

        const parsedAmount = parseFloat(amount);        
        const invest_data = { planId, amount:parsedAmount };
        
        if (!Number.isFinite(parsedAmount)) {
            setAlert({ message: "Amount must be a valid number", type: "error" });
            return;
        }
        if(!agreed) {
            window.alert('You must confirm your transaction');
            e.preventDefault()
            return;
        }

        try {
            SetLoading2(true);
            const res = await Api.post("/investments", invest_data, { withCredentials: true });
            if(res.status === 201){
                SetLoading2(false)
                setInvestmentData({
                    amount: "",
                    planId: ""
                })
                setAlert({
                    message: "Investment created successfully",
                    type: "success",
                });
            }
        } catch (error) {
            setAlert({
                message: error?.response?.data?.message || "Something went wrong",
                type: "error",
            });
        } finally {
            SetLoading2(false);
        }
    }
  return (
    <Drawer>
        
        <DrawerTrigger asChild>
            {trigger}
        </DrawerTrigger>
        <DrawerContent>
            <div>
                <DrawerHeader>
                    <DrawerTitle>Transaction Preview</DrawerTitle>
                    <DrawerDescription>Please review details below before proceeding with your transaction.</DrawerDescription>
                </DrawerHeader>
                <div className='px-5'>
                    <div className='text-center mb-3'>
                        <p className='text-sm'>Amount</p>
                        <p className='text-3xl font-bold text-purple-800'>${amount}</p>
                    </div>
                    <div className='bg-gray-300/30 p-4 rounded-lg mb-4'>
                        <p className='text-sm font-semibold mb-2'>Details</p>
                        <div className=' grid grid-cols-2 items-center text-xs'>
                            <ul className='text-black/50'>
                                <li className='mb-2'>Investment plan</li>
                                <li className='mb-2'>Investment type</li>
                                <li className='mb-2'>Investment interest (ROI)</li>
                                <li className='mb-2'>Investment duration</li>
                            </ul>
                            <ul className='font-light text-left'>
                                <li className='mb-2'>{plan} plan</li>
                                <li className='mb-2'>{type}</li>
                                <li className='mb-2'>{interest}</li>
                                <li className='mb-2'>{duration}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-black/50 mb-1'>Message to sign with your wallet</p>
                        <div className='bg-gray-300/30 p-4 rounded-lg flex gap-2'>
                            <Checkbox
                                checked={agreed}
                                onCheckedChange={(checked) => setAgreed(checked === true)}
                            />
                            <p className='text-xs'>I confirm i want to invest "${amount}" into the "{plan} plan".</p>
                        </div>
                    </div>
                </div>
                <DrawerFooter>
                    <DrawerClose>
                        <button onClick={(e)=>handleSubmit(e)} className='w-full bg-purple-800 text-white font-semibold rounded-lg py-2'>Submit</button>
                        <button onClick={()=> setInvestmentData((prev) => ({
                            ...prev,
                            amount: '',
                            planId : ''
                        }))} className='border-2 border-black/30 py-2 w-full mt-2 rounded-lg font-semibold' variant="outline">Cancel</button>
                    </DrawerClose>
                </DrawerFooter>
            </div>
        </DrawerContent>
    </Drawer>
  )
}
