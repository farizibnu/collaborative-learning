import React from 'react'
import DashboardReport from '../components/dashboard/DashboardReport'
import DashboardDeadline from '../components/dashboard/DashboardDeadline' 
import DashboardFriendRecommend from '../components/dashboard/DashboardFriendRecommend'

const Home = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap lg:flex-nowrap justify-center my-8">
        <DashboardReport/>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center my-8">
        <DashboardDeadline/>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center my-8">
        <DashboardFriendRecommend/>
      </div>
    </div>
  )
}

export default Home