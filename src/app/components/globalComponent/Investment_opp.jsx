import React from 'react'
import FadeInSection from '../FadeInSection'
import Link from 'next/link'

export default function Investment_opp() {
  const investment_plans = [
    { id: 1, plan: "Basic plan", type: 'Personal', period: '7-14 days', Interest: '15.00', Amount_range: '$100.00-$500.00'},
    { id: 2, plan: "Advance plan", type: 'Personal', period: '14-30 days', Interest: '20.00', Amount_range: '$550.00-$1,000.00' },
    { id: 3, plan: "Premium plan", type: 'Personal',  period: '30-60 days', Interest: '25.00', Amount_range: '$1,100.00-$5,000.00'},
    { id: 4, plan: "Expert plan", type: 'Personal', period: '7-14 days', Interest: '30.00',  Amount_range: '$5,100.00-$10,000.00' }
]
  return (
    <div className='mb-10'>
      {
        investment_plans.length ? (
            investment_plans.map((plan) => (
                <FadeInSection key={plan?.id}>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3" >
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">{plan?.plan}</div>
                    <div className="collapse-content">
                        <div className='bg-white rounded-b-lg'>
                            <div className=' grid grid-cols-2 items-center text-sm mb-3'>
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
                            <Link href={'/sign-up'}>
                              <button className='bg-purple-800/30 border border-purple-800 font-semibold  py-3 px-4 w-full rounded-full text-purple-800 text-xs'>Invest now!</button>
                            </Link>
                        </div>
                    </div>
                </div>
                </FadeInSection>
            ))
        ): (
            <div>
                <p className='text-gray-500 text-xs font-light'>No investment plans available</p>
            </div>
        )
    }
    </div>
  )
}
