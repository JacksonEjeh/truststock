import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import FadeInSection from '../FadeInSection'

export default function Security() {
  return (
    <div>
        <div className='border-b border-gray-200 pb-3 mb-5 font-semibold'>
            <p>Change password</p>
        </div>
        <div>
            <input type="text" className='rounded w-full py-3 px-4 outline-none focus:shadow text-sm font-light mb-5' placeholder='Current password' />
            <input type="text" className='rounded w-full py-3 px-4 outline-none focus:shadow text-sm font-light mb-5' placeholder='New password' />
            <FadeInSection>
                <div className='mb-5 font-light'>
                    <div className='flex items-center gap-1 mb-2'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 1 lowercase character (a-z)</p>
                    </div>
                    <div className='flex items-center gap-1 mb-2'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 1 uppercase character (A-Z)</p>
                    </div>
                    <div className='flex items-center gap-1 mb-2'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 1 special character ($%&*@)</p>
                    </div>
                    <div className='flex items-center gap-1 mb-2'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 1 digit (0-9)</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdErrorOutline className='text-sm' />
                        <p className='text-xs'>At least 9 character long</p>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <input type="text" className='rounded w-full py-3 px-4 outline-none focus:shadow text-sm font-light mb-5' placeholder='Confirm new password' />
                <div className=' pb-5'>
                    <button className='bg-purple-800/30 text-purple-800 border border-purple-800 px-10 py-2 w-full rounded text-sm'>Save changes</button>
                </div>
            </FadeInSection>
        </div>
    </div>
  )
}
