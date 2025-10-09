import React from 'react'
import Nav from '../components/dashboardComponents/Nav'
import AdminCardSwiper from './components/swiper'
import UserInfoTable from './components/users-table'
import { Search } from 'lucide-react'
import Footer from '../components/dashboardComponents/Footer'

export default function page() {
  return (
    <div className='bg-gray-100'>
        <Nav dash={true} admin={true} />
        <div className='pt-20'>
            <div className='mb-5  px-5'>
                <p className=' font-bold'>Welcome to your dashboard, Jackson!</p>
                <p className='text-black/40 text-xs'>“Stay on top of your analytics and operations.”</p>
            </div>
            <div className='bg-whit px-5 mb-5'>
                <p className='font-semibold mb-2 text-sm'>Overall Summary</p>
                <div>
                    <AdminCardSwiper />
                </div>
            </div>
            <div className='mb-2 px-5'>
                <p className='font-semibold text-sm'>Recent Users</p>
                <p className='text-black/40 text-xs'>“Showing top 5 recent users.”</p>
            </div>
            <div className='px-5 mb-10'>
                <UserInfoTable />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </div>
  )
}
