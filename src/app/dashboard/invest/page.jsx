import Nav from '@/app/components/dashboardComponents/Nav'
import React from 'react'

export default function page() {
    const investment_plans = [
        { id: 1, plan: "Basic plan", type: 'Personal', period: '7-14 days', Interest: '15.00', Amount_range: '$100.00-$500.00'},
        { id: 2, plan: "Advance plan", type: 'Personal', period: '14-30 days', Interest: '20.00', Amount_range: '$550.00-$1,000.00' },
        { id: 3, plan: "Premium plan", type: 'Personal',  period: '30-60 days', Interest: '25.00', Amount_range: '$1,100.00-$5,000.00'},
        { id: 4, plan: "Expert plan", type: 'Personal', period: '7-14 days', Interest: '30.00',  Amount_range: '$5,100.00-$10,000.00' }
    ]
  return (
    <div className='bg-gray-100'>
        <Nav dash={true} />
        <div className='pt-20 pb-5'>
            <div className='px-5'>
                <div className='mb-10'>
                    <p className='text-gray-500 text-xs font-light'>Dashboard /</p>
                    <p className='font-semibold text-lg'>Manual Investment</p>
                </div>
                <div>
                    {
                        investment_plans.length ? (
                            investment_plans.map((plan) => (
                                
                                <div className='mb-5 shadow rounded-b-lg' key={plan?.id}>
                                    <div className='p-2 bg-purple-800 rounded-t-lg flex items-center gap-2'>
                                        <input type="checkbox" defaultChecked className="checkbox checkbox-neutral bg-white size-4" />
                                        <p className='text-white font-semibold text-sm'>{plan?.plan}</p>
                                    </div>
                                    <div className='bg-white p-4 rounded-b-lg'>
                                        <div className=' grid grid-cols-2 items-center text-xs mb-1'>
                                            <ul className=''>
                                                <li className='mb-2'>Type</li>
                                                <li className='mb-2'>Investment period</li>
                                                <li className='mb-2'>Interest</li>
                                                <li className='mb-2'>Amount range</li>
                                            </ul>
                                            <ul className='font-light'>
                                                <li className='mb-2'>{plan?.type}</li>
                                                <li className='mb-2'>{plan?.period}</li>
                                                <li className='mb-2'>{plan?.Interest}%</li>
                                                <li className='mb-2'>{plan?.Amount_range}</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <label className=' pl-3 items-center flex justify-between rounded-full bg-gray-100'>
                                                <span className="font-semibold text-sm">$ </span>
                                                <input type="text" className='outline-none bg-gray-100 text-sm'/>
                                                <button className='bg-purple-800 py-2 px-4 rounded-full text-white text-xs'>Invest</button>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ): (
                            <div>
                                <p className='text-gray-500 text-xs font-light'>No investment plans available</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
