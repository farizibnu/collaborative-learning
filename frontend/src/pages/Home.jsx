import React from 'react'
import DashboardReport from '../components/dashboard/DashboardReport'
import DashboardDeadline from '../components/dashboard/DashboardDeadline' 

const Home = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap lg:flex-nowrap justify-center my-4">
        <DashboardReport/>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center my-4">
        <DashboardDeadline/>
      </div>
    </div>
  )
}

export default Home