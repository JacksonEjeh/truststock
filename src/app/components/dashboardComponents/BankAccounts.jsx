import Link from 'next/link'
import React from 'react'

export default function BankAccounts() {
  return (
    <div>
        <div className='border-b border-gray-200 pb-3 mb-5 font-semibold'>
            <p>Attach new bank account</p>
        </div>
        <div className=' border-b border-gray-200 pb-5 mb-5'>
            <p className='text-xs font-light'>To add bank account for withdrawals you must first make a successful deposit to your Truststock account. For more information please refer to our <Link href={'/dashboard/help'} className='text-blue-500'>FAQ section</Link>.</p>
        </div>
    </div>
  )
}
