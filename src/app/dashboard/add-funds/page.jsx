import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection'
import Link from 'next/link'
import React from 'react'
import { MdArrowCircleRight } from 'react-icons/md'
import { RiErrorWarningFill } from 'react-icons/ri'

export default function page() {
  return (
    <div className='bg-gray-100'>
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
                                <p className="text-sm text-black/60 font-bold">Minimum amount is 50$</p>
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
                    <div className='mb-6'>
                        <div className='grid grid-cols-2 gap-5 mb-5'>
                            <select className="select select-bordered w-full font-bold">
                                <option value={'BTC'}>BTC</option>
                                <option value="LTC">LTC</option>
                                <option value="USDT">USDT TRC20</option>
                            </select>
                            <label className="input input-bordered flex items-center gap-2 text-sm w-full font-bold">
                                $
                                <input type="text" className="grow" defaultValue={50} />
                            </label>
                        </div>
                        <Link href={'/dashboard/add-funds/payment-info/1'}>
                            <button className=' rounded text-xs w-full bg-purple-800 py-3 border-2 border-purple-800 text-white font-semibold'>ADD FUNDS</button>
                        </Link>
                    </div>
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
