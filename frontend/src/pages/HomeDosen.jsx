import React from 'react'
import DashboardReport from '../components/dashboardDosen/DashboardDosenReport'
import DashboardCommunityList from '../components/dashboardDosen/DashboardDosenCommunityList'
import DashboardQuizStat from '../components/dashboardDosen/DashboardLikesStat'

const Home = () => {
    return(
        <div className="grid grid-cols-3 gap-4 mt-4">
            <div className='col-span-2 ml-16'>
                <div className="flex flex-wrap lg:flex-nowrap justify-center mb-8">
                    <DashboardReport/>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap justify-center my-8">
                    <DashboardQuizStat/>
                </div>
            </div>
            <div className='col-span-1 ml-12'>
                <DashboardCommunityList/>
            </div>
        </div>
    )
}

export default Home