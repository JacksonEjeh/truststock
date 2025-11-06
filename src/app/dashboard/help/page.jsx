import Footer from '@/app/components/dashboardComponents/Footer'
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-100 h-screen overflow-y-auto'>
        <Nav dash={true} />
        <FadeInSection>
            <div className='pt-20'>
                <div className='px-5'>
                    <div className='mb-14'>
                        <Link href={'/dashboard'} className='text-gray-500 text-xs font-light'>Dashboard /</Link>
                        <p className='font-semibold text-lg'>Help</p>
                    </div>
                    <div className='text-center mb-5'>
                        <h1 className='font-bold text-2xl'>Frequently asked questions</h1>
                        <p className='font-light text-xs'>Get all of your questions answered or request support from our dedicated professionals</p>
                    </div>
                    <div className='mb-5'>
                        <h1 className='text-lg mb-3'>Most popular questions</h1>
                        <div className='flex items-center gap-2 mb-2 font-light'>
                            <span className='size-4 bg-gray-200 rounded-full flex items-center justify-center text-xs'>1</span>
                            <p className='text-xs '>What is Truststock?</p>
                        </div>
                        <div className='flex items-center gap-2 mb-2 font-light'>
                            <span className='size-4 bg-gray-200 rounded-full flex items-center justify-center text-xs'>2</span>
                            <p className='text-xs '>What is an IBF license?</p>
                        </div>
                        <div className='flex items-center gap-2 mb-2 font-light'>
                            <span className='size-4 bg-gray-200 rounded-full flex items-center justify-center text-xs'>3</span>
                            <p className='text-xs '>What is the minimum amount that can be invested?</p>
                        </div>
                        <div className='flex items-center gap-2 mb-2 font-light'>
                            <span className='size-4 bg-gray-200 rounded-full flex items-center justify-center text-xs'>4</span>
                            <p className='text-xs '>Who can invest with Truststock?</p>
                        </div>
                        <div className='flex items-center gap-2 mb-2 font-light'>
                            <span className='size-4 bg-gray-200 rounded-full flex items-center justify-center text-xs'>5</span>
                            <p className='text-xs '>Is there a fee for withdrawing money?</p>
                        </div>
                        <div className='flex items-center gap-2 mb-2 font-light'>
                            <span className='size-4 bg-gray-200 rounded-full flex items-center justify-center text-xs'>6</span>
                            <p className='text-xs '>What is Auto-Invest?</p>
                        </div>
                        <div className='flex items-center gap-2 mb-2 font-light'>
                            <span className='size-4 bg-gray-200 rounded-full flex items-center justify-center text-xs'>7</span>
                            <p className='text-xs '>How does Auto-Invest work?</p>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <h1 className='text-lg mb-5'>Browse all questions</h1>
                        <FadeInSection>
                            <div className='rounded-lg p-3 bg-gray-200 mb-5'>
                                <div className='flex items-center gap-2 mb-2 border-b border-gray-300 pb-3'>
                                    <span className='size-6 bg-purple-800/30 font-semibold text-purple-800 rounded-full flex items-center justify-center text-sm'>1</span>
                                    <p className='text-sm'>What is Truststock?</p>
                                </div>
                                <div>
                                    <p className='text-xs font-light'>Truststock is a fully licensed investment platform (IBF license Nr. 27-55/2023/3), supervised by The World Bank, ensuring legal and regulatory compliance. It welcomes individual and corporate investors from the EEA. In other words, Truststock is a platform that enables investment in stocks through stock-backed securities known as Notes.</p>
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className='rounded-lg p-3 bg-gray-200 mb-5'>
                                <div className='flex items-center gap-2 mb-2 border-b border-gray-300 pb-3'>
                                    <span className='size-6 bg-purple-800/30 font-semibold text-purple-800 rounded-full flex items-center justify-center text-sm'>2</span>
                                    <p className='text-sm'>What is an IBF license?</p>
                                </div>
                                <div>
                                    <p className='text-xs font-light'>An Investment Brokerage Firm (IBF) license is a type of license that allows a company to operate as a broker-dealer in the securities industry. This license is issued by a regulatory authority; in Nectaro’s case, the license is issued by Latvijas Banka. To obtain an IBF license, a company must meet certain requirements and undergo a rigorous application process. The license also comes with a Series of rules and regulations to which the company must adhere in order to maintain its license and operate in a compliant manner.</p>
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className='rounded-lg p-3 bg-gray-200 mb-5'>
                                <div className='flex items-center gap-2 mb-2 border-b border-gray-300 pb-3'>
                                    <span className='size-6 bg-purple-800/30 font-semibold text-purple-800 rounded-full flex items-center justify-center text-sm'>3</span>
                                    <p className='text-sm'>What is the minimum amount that can be invested?</p>
                                </div>
                                <div>
                                    <p className='text-xs font-light'>The minimum investment in any single Series of Notes is € 50. The only exception is when available amount for investment for a specific Series of Notes is less than € 50, then only that amount can be applicable without adjustments.</p>
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className='rounded-lg p-3 bg-gray-200 mb-5'>
                                <div className='flex items-center gap-2 mb-2 border-b border-gray-300 pb-3'>
                                    <span className='size-6 bg-purple-800/30 font-semibold text-purple-800 rounded-full flex items-center justify-center text-sm'>4</span>
                                    <p className='text-sm'>Who can invest with Truststock?</p>
                                </div>
                                <div>
                                    <p className='text-xs font-light'>Investments on Nectaro are available for both individuals and legal entities. Whether you are an individual or a legal entity, you must be a resident of an EEA country and have successfully completed the KYC and Suitability & Appropriateness assessment.</p>
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className='rounded-lg p-3 bg-gray-200 mb-5'>
                                <div className='flex items-center gap-2 mb-2 border-b border-gray-300 pb-3'>
                                    <span className='size-6 bg-purple-800/30 font-semibold text-purple-800 rounded-full flex items-center justify-center text-sm'>5</span>
                                    <p className='text-sm'>Is there a fee for withdrawing money?</p>
                                </div>
                                <div>
                                    <p className='text-xs font-light'>Nectaro does not impose any fees for withdrawing funds. However, it's advisable to check with your bank to determine whether they charge any fees for receiving international bank transfers.</p>
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className='rounded-lg p-3 bg-gray-200 mb-5'>
                                <div className='flex items-center gap-2 mb-2 border-b border-gray-300 pb-3'>
                                    <span className='size-6 bg-purple-800/30 font-semibold text-purple-800 rounded-full flex items-center justify-center text-sm'>6</span>
                                    <p className='text-sm'>What is Auto-Invest?</p>
                                </div>
                                <div>
                                    <p className='text-xs font-light'>Auto-Invest is an automated investment feature that allows users to invest their funds based on a strategy they define. It is designed for users with sufficient knowledge of financial investments and aims to simplify the investment process.</p>
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className='rounded-lg p-3 bg-gray-200'>
                                <div className='flex items-center gap-2 mb-2 border-b border-gray-300 pb-3'>
                                    <span className='size-6 bg-purple-800/30 font-semibold text-purple-800 rounded-full flex items-center justify-center text-sm'>7</span>
                                    <p className='text-sm'>How does Auto-Invest work?</p>
                                </div>
                                <div>
                                    <ul className='text-xs font-light list-disc px-3'>
                                        <li className='mb-1'>Users create an Auto-Invest strategy by selecting various parameters such as countries, investment terms, interest rates, and investment targets.</li>
                                        <li className='mb-1'>The system automatically invests available funds based on these parameters, executing strategies at least once per day when matching financial instruments are available.</li>
                                        <li>If there are no matching financial instruments for a strategy, the system will move to the next strategy in priority order.</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </FadeInSection>
        <Footer />
    </div>
  )
}
