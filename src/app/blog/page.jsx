import React from 'react'
import Nav from '../components/Nav'
import CreateAccountBtn from '../components/globalComponent/CreateAccount-Btn'
import Footer from '../components/footer'

export default function page() {
  return (
    <div className="h-screen bg-black relative">
        <Nav />
      <div className="bg-white rounded-t-3xl border-t-2 border-purple-800 fixed left-0 right-0 bottom-0 top-[55px]">
            <div className="h-full overflow-y-scroll pt-8 px-5">
                <div className="text-center my-12">
                    <h1 className="font-bold text-4xl mb-3">Blog</h1>
                    <p className="font-light">Explore Nectaro Blog for useful information on finance, investment trends, and portfolio diversification. Transparent insights for smart financial decisions.</p>
                </div>
                <div className='mb-5'>
                    <h1 className="text-2xl mb-5 leading-tight font-bold text-center">Start investing and backup your future with Nectaro</h1>
                    <CreateAccountBtn />
                </div>
                <Footer />
            </div>
        </div>
    </div>
  )
}
