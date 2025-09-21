import React from 'react'
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

export default function Preview({ trigger, plan, type, duration, interest, amount, setInvestmentData}) {
  return (
    <Drawer>
        <DrawerTrigger asChild>
            {trigger}
        </DrawerTrigger>
        <DrawerContent>
            <div>
                <DrawerHeader>
                    <DrawerTitle>Transaction Preview</DrawerTitle>
                    <DrawerDescription><p className='text-xs'>Please review details below before proceeding with your transaction.</p></DrawerDescription>
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
                            <Checkbox />
                            <p className='text-xs'>I confirm i want to invest "${amount}" into the "{plan} plan".</p>
                        </div>
                    </div>
                </div>
                <DrawerFooter>
                    <button className='w-full bg-purple-800 text-white font-semibold rounded-lg py-2'>Submit</button>
                    <DrawerClose asChild>
                        <button onClick={()=> setInvestmentData((prev) => ({
                            ...prev,
                            amount: '',
                            planId : ''
                        }))} className='border-2 border-black/30 py-2 rounded-lg font-semibold' variant="outline">Cancel</button>
                    </DrawerClose>
                </DrawerFooter>
            </div>
        </DrawerContent>
    </Drawer>
  )
}
