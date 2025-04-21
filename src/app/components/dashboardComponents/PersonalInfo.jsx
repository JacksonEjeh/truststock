import React from 'react'

export default function PersonalInfo() {
  return (
    <div>
      <div className='border-b border-gray-200 pb-3 mb-5 font-semibold'>
          <p>Personal info</p>
      </div>
      <div className='bg-black/80 text-white p-5 mb-5 rounded-lg'>
          <div className='flex justify-center mb-5'>
              <div className='size-20 rounded-full border-purple-800 border-2'>
                  <img src="/images/dp.jpg" alt="" className='size-full object-cover rounded-full' />
              </div>
          </div>
          <div className='flex justify-between text-sm'>
              <ul>
                  <li className='mb-5'>Full&nbsp;Name</li>
                  <li className='mb-5'>Pone&nbsp;Number</li>
                  <li className='mb-5'>Email</li>
                  <li className='mb-5'>Gender</li>
                  <li className=''>DOB</li>
              </ul>
              <ul className='font-light'>
                  <li className='mb-5'>Gabriel Jackson</li>
                  <li className='mb-5'>+1 (404) 785-9933</li>
                  <li className='mb-5'>gabbyjax7@gmail.com</li>
                  <li className='mb-5'>Male</li>
                  <li className=''>21-10-1988</li>
              </ul>
          </div>
      </div>
      <div className='border-b border-gray-200 pb-3 mb-5 font-semibold'>
          <p>Residential address</p>
      </div>
      <div className='flex gap-10 mb-5 rounded-lg items-center text-sm bg-black/80 text-white p-5'>
          <ul>
              <li className='mb-5'>Country of residence</li>
              <li className='mb-5'>City</li>
              <li className='mb-5'>Street, house Number</li>
              <li className=''>Postal code</li>
          </ul>
          <ul className='font-light'>
              <li className='mb-5'>-</li>
              <li className='mb-5'>-</li>
              <li className='mb-5'>-</li>
              <li className=''>-</li>
          </ul>
      </div>
    </div>
  )
}
