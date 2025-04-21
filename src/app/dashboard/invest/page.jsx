
import AvailableFunds from '@/app/components/dashboardComponents/AvailableFunds';
import Footer from '@/app/components/dashboardComponents/Footer';
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection';
import { RiErrorWarningFill } from 'react-icons/ri'

export default function page() {

    const investment_plans = [
        { id: 1, plan: "Basic plan", type: 'Personal', period: '7-14 days', Interest: '15.00', Amount_range: '$100.00-$500.00'},
        { id: 2, plan: "Advance plan", type: 'Personal', period: '14-30 days', Interest: '20.00', Amount_range: '$550.00-$1,000.00' },
        { id: 3, plan: "Premium plan", type: 'Personal',  period: '30-60 days', Interest: '25.00', Amount_range: '$1,100.00-$5,000.00'},
        { id: 4, plan: "Expert plan", type: 'Personal', period: '7-14 days', Interest: '30.00',  Amount_range: '$5,100.00-$10,000.00' }
    ]
  return (
    <div className='bg-gray-100'>
        <Nav dash={true} />
        <FadeInSection>
            <div className='pt-20 pb-5'>
                <div className='px-5'>
                    <div className='mb-5'>
                        <p className='text-gray-500 text-xs font-light'>Dashboard /</p>
                        <p className='font-semibold text-lg'>Manual Investment</p>
                    </div>
                    <div className="p-4 bg-purple-500/20 rounded-lg flex gap-2 mb-5">
                        <div>
                            <RiErrorWarningFill className="text-purple-500 text-2xl" />
                        </div>
                        <p className="font-light text-xs">Explore our wide range of stock investment plans tailored to fit your budget and financial goals. Make sure to choose a plan that aligns with your personal investment strategy.</p>
                    </div>
                    <div>
                        <AvailableFunds />
                    </div>
                    <div>
                        <div className='mb-3 relative'>
                            <div className='absolute right-0 top-[-20px] z-10 h-10'>
                                <img src="/images/promotion.png" alt="" className='h-full' />
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                
                                <div className="collapse-title font-semibold">Promo plan</div>
                                <div className="collapse-content">
                                    <div className='bg-white rounded-b-lg'>
                                        <div className=' grid grid-cols-2 items-center text-xs mb-3'>
                                            <ul className=''>
                                                <li className='mb-2'>Type</li>
                                                <li className='mb-2'>Investment period</li>
                                                <li className='mb-2'>Interest</li>
                                                <li className='mb-2'>Amount range</li>
                                            </ul>
                                            <ul className='font-light'>
                                                <li className='mb-2'>Personal</li>
                                                <li className='mb-2'>5 days</li>
                                                <li className='mb-2'>70%</li>
                                                <li className='mb-2'>$1000-$500,000</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <label className=' pl-3 items-center flex justify-between rounded-full bg-gray-100'>
                                                <span className="font-semibold text-sm">$ </span>
                                                <input type="text" placeholder='1000.00' className='outline-none bg-gray-100 text-sm'/>
                                                <button className='bg-purple-800/30 border border-purple-800 font-semibold  py-2 px-4 rounded-full text-purple-800 text-xs'>Invest</button>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            investment_plans.length ? (
                                investment_plans.map((plan) => (
                                    <FadeInSection key={plan?.id}>
                                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3" >
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title font-semibold">{plan?.plan}</div>
                                        <div className="collapse-content">
                                            <div className='bg-white rounded-b-lg'>
                                                <div className=' grid grid-cols-2 items-center text-xs mb-3'>
                                                    <ul className=''>
                                                        <li className='mb-2'>Type</li>
                                                        <li className='mb-2'>Investment period</li>
                                                        <li className='mb-2'>Interest</li>
                                                        <li className='mb-2'>Amount range</li>
                                                    </ul>
                                                    <ul className='font-light'>
                                                        <li className='mb-2'>{plan?.type}</li>
                                                        <li className='mb-2'>{plan?.period}</li>
                                                        <li className='mb-2'>{plan?.Interest}%</li>
                                                        <li className='mb-2'>{plan?.Amount_range}</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <label className=' pl-3 items-center flex justify-between rounded-full bg-gray-100'>
                                                        <span className="font-semibold text-sm">$ </span>
                                                        <input type="text" placeholder='1000.00' className='outline-none bg-gray-100 text-sm'/>
                                                        <button className='bg-purple-800/30 border border-purple-800 font-semibold  py-2 px-4 rounded-full text-purple-800 text-xs'>Invest</button>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </FadeInSection>
                                ))
                            ): (
                                <div>
                                    <p className='text-gray-500 text-xs font-light'>No investment plans available</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </FadeInSection>
        <Footer />
    </div>
  )
}
