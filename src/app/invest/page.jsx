import React from 'react'
import Nav from '../components/Nav'
import Investment_opp from '../components/globalComponent/Investment_opp'
import CreateAccountBtn from '../components/globalComponent/CreateAccount-Btn'
import Footer from '../components/footer'
import FadeInSection from '../components/FadeInSection'

export default function page() {
  return (
    <div className="h-screen bg-black relative">
      <Nav />
      <div className="bg-white rounded-t-3xl border-t-2 border-purple-800 fixed left-0 right-0 bottom-0 top-[55px]">
            <div className="h-full overflow-y-scroll pt-8 px-5">
                <div className="text-center my-12">
                    <h1 className="font-bold text-4xl mb-3">Invest</h1>
                    <p className="font-light">We simplify investing for financial independence, catering to beginners and experienced investors alike.</p>
                </div>
                <div className="p-5">
                    <img src="/images/red_sweatshirt@2.ec21419.webp" alt="" className="rounded-xl" />
                </div>
                <FadeInSection>
                    <div className='mb-10'>
                        <p className="text-purple-800 mb-2">Secure your future by investing in loans</p>
                        <h1 className="text-2xl mb-5 leading-tight font-bold">Start with €50 and build a diversified portfolio</h1>
                        <FadeInSection>
                            <p className='font-light mb-5'>At Truststock, we offer several investment methods to make your investment experience as comfortable and simple as possible, helping you achieve your investment goals quickly and effortlessly.</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p className='font-light'>Truststock is regulated by The World Bank, and is a member of the World Bank Investor Protection Scheme in accordance with Directive 97/9/EC. This supervision provides additional protection for investors by ensuring that financial institutions adhere to established rules and requirements.</p>
                        </FadeInSection>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='mb-16'>
                        <h1 className="text-2xl mb-5 leading-tight font-bold">Available investment methods</h1>
                        <FadeInSection>
                            <div className="p-8 bg-gray-400/20 rounded-lg mb-5">
                                <h1 className="font-bold mb-2">Manual investing</h1>
                                <p className="font-light text-sm mb-1">Choose and manage individual investments.</p>
                                <p className="font-light text-sm">Annual interest rate: 10%-14%</p>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className="p-8 bg-gray-400/20 rounded-lg mb-5">
                                <h1 className="font-bold mb-2">Auto-Invest tool</h1>
                                <p className="font-light text-sm mb-1">Set it up once and relax while it invests for you.</p>
                                <p className="font-light text-sm">Annual interest rate: 10%-14%</p>
                            </div>
                        </FadeInSection>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='mb-10'>
                        <h1 className="text-2xl mb-5 leading-tight font-bold">Investments opportunities</h1>
                        <FadeInSection>
                            <Investment_opp />
                        </FadeInSection>
                        <FadeInSection>
                            <Investment_opp />
                        </FadeInSection>
                        <FadeInSection>
                            <Investment_opp />
                        </FadeInSection>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='mb-16'>
                        <h1 className="text-2xl mb-5 leading-tight font-bold text-center">Let's begin your investment journey with TrustStock today!</h1>
                        <FadeInSection>
                            <CreateAccountBtn invest={true} />
                        </FadeInSection>
                    </div>
                </FadeInSection>
                <Footer/>
            </div>
        </div>
    </div>
  )
}
