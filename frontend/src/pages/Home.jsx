import React from 'react'
import DashboardReport from '../components/dashboard/DashboardReport'
import DashboardDeadline from '../components/dashboard/DashboardDeadline' 
import DashboardFriendRecommend from '../components/dashboard/DashboardFriendRecommend'
import DashboardCourseList from  '../components/dashboard/DashboardCourseList'
import DashboardCommunityList from '../components/dashboard/DashboardCommunityList'
import DashboardQuizStat from '../components/dashboard/DashboardQuizStat'

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div className='col-span-2 ml-16'>
        <div className="flex flex-wrap lg:flex-nowrap justify-center mb-8">
          <DashboardReport/>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center my-8">
          <DashboardQuizStat/>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center my-8">
          <DashboardCourseList/>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center my-8">
          <DashboardFriendRecommend/>
        </div>
      </div>
      <div className='col-span-1 ml-12'>
        <DashboardDeadline/>
        <div className='mt-4'>
          <DashboardCommunityList/>
        </div>
      </div>
    </div>
  )
}

export default Home