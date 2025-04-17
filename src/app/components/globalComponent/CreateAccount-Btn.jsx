import Link from 'next/link'
import React from 'react'
import { MdArrowCircleRight } from 'react-icons/md'

export default function  CreateAccountBtn({ how_it_works, invest }) {
  return (
    <div>
        <Link href={'/sign-up'} className={how_it_works ? 'flex items-center bg-black rounded-full px-1 border my-10' : 'flex items-center bg-black rounded-full px-1 border mb-10'}>
            <button className="text-white w-full">{invest ? 'Start investing' : 'Create an account'}</button>
            <MdArrowCircleRight className="text-white text-5xl" />
        </Link>
    </div>
  )
}
