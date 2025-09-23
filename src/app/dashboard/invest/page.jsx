
'use client'
import AvailableFunds from '@/app/components/dashboardComponents/AvailableFunds';
import Footer from '@/app/components/dashboardComponents/Footer';
import Nav from '@/app/components/dashboardComponents/Nav'
import FadeInSection from '@/app/components/FadeInSection';
import Spinner from '@/app/components/Spinner';
import ToastAlert from '@/app/components/ToastAlert';
import { getAllInvestmentPlan } from '@/app/redux/slices/investmentPlanSlice';
import { useEffect, useState } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import Preview from './preview';

export default function page() {
    const dispatch = useDispatch();

    const { loading, investment_plans, error } = useSelector((state)=> state?.investmentPlan);
    // console.log(investment_plans)
    const [loading2, SetLoading2] = useState(false)
    const [ alert, setAlert ] = useState(({ message: "", type: "info"}));
    const [investment_data, setInvestmentData] = useState({
        planId: "",
        amount: ""
    })
    const capitalizeFirst = (word) => {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const handleInvestBtn = (e) => {
        if(!investment_data.amount || !investment_data.planId){
            e.preventDefault();
            setAlert({
              message: "Please enter a valid amount",
              type: "error",
            });
            return;
        }
        // console.log(investment_data);
    }

    useEffect(() => {
        dispatch(getAllInvestmentPlan());
    }, [])
    if( loading ) return <Spinner />
    if( loading2 ) return <Spinner />
        
  return (
    <div className='bg-gray-100'>
        <div>
            <ToastAlert
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert({ message: "", type: "info" })}
            />
      </div>
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
                        {
                            investment_plans?.length ? (
                                investment_plans?.map((plan, i) => (
                                    <FadeInSection key={plan?._id}>
                                        <div className='mb-3 relative'>
                                            {
                                                i === 0 ? (
                                                    <div className='absolute right-0 top-[-20px] z-10 h-10'>
                                                        <img src="/images/promotion.png" alt="" className='h-full' />
                                                    </div>
                                                ) : (
                                                    null
                                                )
                                            }
                                            <div className="collapse collapse-arrow bg-base-100 border border-base-300" >
                                                <input type="radio" name="my-accordion-2" defaultChecked={i === 0} />
                                                <div className="collapse-title font-semibold">{capitalizeFirst(plan?.investment_plan)} plan</div>
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
                                                                <li className='mb-2'>{capitalizeFirst(plan?.investment_type)}</li>
                                                                <li className='mb-2'>{plan?.duration?.value} {capitalizeFirst(plan?.duration?.unit)}</li>
                                                                <li className='mb-2'>{plan?.interest}%</li>
                                                                <li className='mb-2'>${plan?.amount_range?.min}-${plan?.amount_range?.max}</li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <label className=' pl-3 items-center flex justify-between rounded-full bg-gray-100'>
                                                                <span className="font-semibold text-sm">$ </span>
                                                                <input 
                                                                    type="number"  
                                                                    placeholder='1000.00' 
                                                                    className='outline-none bg-gray-100'
                                                                    value={investment_data.amount}
                                                                    onChange={(e) =>{
                                                                        setInvestmentData((prev) => ({
                                                                        ...prev,
                                                                        amount: e.target.value
                                                                        }))
                                                                        setInvestmentData((prev) => ({
                                                                            ...prev,
                                                                            planId: plan._id
                                                                        }))
                                                                    }
                                                                    }
                                                                />
                                                                <Preview 
                                                                    trigger={
                                                                        <button onClick={(e) => handleInvestBtn(e)} className={`${investment_data.amount === '' ? 'opacity-50' : 'opacity-100'} transition-all duration-500 bg-purple-800/30  border border-purple-800 font-semibold  py-2 px-4 rounded-full text-purple-800 text-xs`}>Invest</button>
                                                                    }
                                                                    plan={capitalizeFirst(plan?.investment_plan)}
                                                                    type={capitalizeFirst(plan?.investment_type)}
                                                                    duration={`${plan?.duration?.value} ${capitalizeFirst(plan?.duration?.unit)}`}
                                                                    interest={`${plan?.interest}%`}
                                                                    amount={investment_data?.amount}
                                                                    setInvestmentData={setInvestmentData}
                                                                    planId={plan?._id}
                                                                    SetLoading2={SetLoading2}
                                                                    setAlert={setAlert}
                                                                    alert={alert}
                                                                />
                                                            </label>
                                                        </div>
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
