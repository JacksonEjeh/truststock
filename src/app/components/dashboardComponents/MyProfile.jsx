import React from 'react'

export default function MyProfile() {
  return (
    <div>
        <div className='border-b border-gray-200 pb-3 mb-5 font-semibold'>
            <p>Investor info</p>
        </div>
        <div className='flex gap-14 text-sm mb-5 border-b pb-5 border-gray-200'>
            <ul>
                <li className='mb-5'>Investor&nbsp;status</li>
                <li>Investor ID</li>
            </ul>
            <ul className='font-light'>
                <li className='mb-5 flex items-center gap-1'><span>Retail</span> <span className='size-4'><img src="/images/verify.png" className='size-full' alt="" /></span></li>
                <li>968gnjv6v-gvcg-t68h-86g2-0idywbs82bjd98c</li>
            </ul>
        </div>
    </div>
  )
}
