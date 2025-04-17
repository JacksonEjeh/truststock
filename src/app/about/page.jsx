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
                    <h1 className="font-bold text-4xl mb-3">About</h1>
                    <p className="font-light">Your new favorite investment platform.</p>
                </div>
                <p className="font-light leading-tight mb-16">Welcome to Truststock, the fully licensed investment platform designed with Gen Z and millennials in mind to provide the best experience for every person. We understand the unique challenges and aspirations of today's generation, and we're here to empower everyone to take control of your financial future.</p>
                <div className='mb-5'>
                    <h1 className="text-2xl mb-5 leading-tight font-bold text-center">3 reasons to trust us</h1>
                    <CreateAccountBtn />
                </div>
                <div className="mb-5">
                    <h1 className="font-bold mb-1">IBF license</h1>
                    <p className="font-light text-sm">Truststock is an investment platform with a IBF license (Nr 27-55/2023/3) , which provides assurance to investors that the platform is operating legally and in compliance with EU regulations, giving investors more confidence. We are supervised by The World Bank Group.</p>
                </div>
                <div className="mb-5">
                    <h1 className="font-bold mb-1">Part of a reliable company</h1>
                    <p className="font-light text-sm">Truststock is part of the DYNINNO Group, which was founded in 2004 in San Francisco and comprises 5,400 professionals globally. Operating in more than 50 countries, the group excels in the travel, finance, entertainment, and technology sectors.</p>
                </div>
                <div className="mb-16">
                    <h1 className="font-bold mb-1">Experienced team</h1>
                    <p className="font-light text-sm">Truststock is backed by a team of experienced professionals with a profound grasp of the market and investment possibilities. This expertise aids investors in comprehending the economic terrain and making well-informed choices.</p>
                </div>
                <div className='mb-10'>
                    <p className='text-purple-800 mb-1'>The Problem:</p>
                    <h1 className='font-bold text-lg mb-5'>Lack of financial education and trust</h1>
                    <p className="font-light text-sm">Traditional financial institutions often seem distant and unapproachable, leaving you feeling left out of the conversation. Moreover, the lack of accessible and reliable information makes it challenging to make informed investment decisions. Trust in financial platforms has also been eroded, leaving many hesitant to enter the investment world. Naturally, we don't trust what we don't understand.</p>
                </div>
                <div className='mb-10'>
                    <p className='text-purple-800 mb-1'>Rising to the Challenge:</p>
                    <h1 className='font-bold text-lg mb-5'>Empowering you with knowledge</h1>
                    <p className="font-light text-sm">At Truststock, we believe that education is the key to making conscious investment decisions. We've assembled a team of experienced professionals who are passionate about sharing their knowledge with you. Our platform is not just about making investments; it's about equipping you with the tools and understanding to make sound financial choices.</p>
                </div>
                <div className='mb-10'>
                    <p className='text-purple-800 mb-1'>The Solution:</p>
                    <h1 className='font-bold text-lg mb-5'>Truststock investment platform</h1>
                    <p className="font-light text-sm">Truststock is a proud member of the Dyninno Group, an organization renowned for its expertise in the financial industry. With an investment brokerage firm license backing our operations, we adhere to strict regulatory standards to ensure your investments are safeguarded. Your trust is essential to us, and we want you to feel confident in every decision you make on our platform.</p>
                </div>
                <div className='mb-16'>
                    <p className='text-purple-800 mb-1'>Our Mission:</p>
                    <h1 className='font-bold text-lg mb-5'>Building a secure and inclusive future</h1>
                    <p className="font-light text-sm">Our mission is simple yet powerful: to provide a secure and inclusive platform that empowers you to take charge of your financial future. We want to break down the barriers and complexities surrounding investing and offer a user-friendly experience that meets your needs. Whether you're new to investing or have experience under your belt, we're here to support you every step of the way.</p>
                </div>
                <p className="font-light leading-tight mb-16">Truststock is authorized to offer the following investment services, as well as ancillary (non-core) investment services: portfolio management, placing of financial instruments without a firm commitment basis, execution of orders on behalf of clients and holding of financial instruments.</p>
                <h1 className="text-2xl mb-5 leading-tight font-bold">Created by people, for people</h1>
                <p className="font-light leading-tight mb-16">What sets us apart is our commitment to being a platform created by people, for people. We understand your aspirations, dreams, and concerns because we've been in your shoes. We've built a community-driven platform that focuses on your needs, making investing accessible, easy, and exciting.</p>
                <div className='text-center mb-16'>
                    <h1 className="text-xl mb-3 leading-tight font-bold text-center">"Let's learn, grow, and invest together, and create a brighter future for ourselves and the generations to come."</h1>
                    <p><span className='font-semibold text-sm'>Sigita Kotlere</span> - CEO of Truststock</p>
                </div>
                <div>
                    <h1 className="text-2xl mb-7 leading-tight font-bold text-center">People behind Truststock</h1>
                    <div className="flex flex-wrap gap-8 justify-center mx-4 mb-16">
                        <div>
                            <img src="images/ceo.webp" alt="Sigita Kotlere" className="w-32 h-36 rounded-full" />
                            <div className='text-center'>
                                <p className='font-semibold text-sm'>Sigita Kotlere</p>
                                <small>Board Member & CEO</small>
                            </div>
                        </div>
                        <div>
                            <img src="images/cco.webp" alt="Sigita Kotlere" className="w-32 h-36 rounded-full" />
                            <div className='text-center'>
                                <p className='font-semibold text-sm'>Anna Berezovska</p>
                                <small className='text-sm'>Board Member & CCO</small>
                            </div>
                        </div>
                        <div>
                            <img src="images/member.webp" alt="Dmitry Tsymber" className="w-32 h-36 rounded-full" />
                            <div className='text-center'>
                                <p className='font-semibold text-sm'>Dmitry Tsymber</p>
                                <small className='text-sm'>Founder & Board Member</small>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <h1 className="text-2xl mb-5 leading-tight font-bold text-center">Unlock the potential of your money today!</h1>
                        <CreateAccountBtn />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </div>
  )
}
