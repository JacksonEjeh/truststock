import React from 'react'
import FadeInSection from '../FadeInSection'

export default function Transactions() {
  return (
    <div>
        <FadeInSection>
            <div className='border rounded-lg p-3 flex items-center justify-between mb-2'>
                <div>
                    <small>2025.03.02 17:43:03</small>
                    <p>Account withdrawal</p>
                    <small className='text-green-500'>Confirmed</small>
                </div>
                <div>
                    <p className='text-green-500 text-sm'>-$1,000.00</p>
                </div>
            </div>
            <div className='border rounded-lg p-3 flex items-center justify-between mb-2'>
                <div>
                    <small>2025.03.02 17:43:03</small>
                    <p>Account deposit</p>
                    <small className='text-red-500'>Rejected</small>
                </div>
                <div>
                    <p className='text-red-500 text-sm'>+$300.00</p>
                </div>
            </div>
            <div className='border rounded-lg p-3 flex items-center justify-between mb-2'>
                <div>
                    <small>2025.03.02 17:43:03</small>
                    <p>Account deposit</p>
                    <small className='text-green-500'>Confirmed</small>
                </div>
                <div>
                    <p className='text-green-500 text-sm'>+$500.00</p>
                </div>
            </div>
            <div className='border rounded-lg p-3 flex items-center justify-between mb-2'>
                <div>
                    <small>2025.03.02 17:43:03</small>
                    <p>Account deposit</p>
                    <small className='text-yellow-500'>Pending</small>
                </div>
                <div>
                    <p className='text-yellow-500 text-sm'>+$430.00</p>
                </div>
            </div>
        </FadeInSection>
    </div>
  )
}
