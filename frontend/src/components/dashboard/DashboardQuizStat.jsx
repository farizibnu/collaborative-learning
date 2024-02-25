import React from 'react'
import DashboardChartQuiz from '../chart/DashboardChartQuiz'

const DashboardQuizStat = () => {
  return (
    <div className='w-full'>
        <p className='text-xl font-bold mb-4'>Quiz Statistic</p>
        <div className='border-3 border-slate-200 flex p-4 rounded-3xl'>
            <DashboardChartQuiz/>
            <div className='ml-8'>
                <div className='mt-6 '>
                    <p className='font-semibold text-slate-400 text-sm'>Quiz Taken</p>
                    <p className='font-bold text-md'>12</p>
                </div>
                <div className='mt-6 '>
                    <p className='font-semibold text-slate-400 text-sm'>Quiz Completed</p>
                    <p className='font-bold text-md'>8</p>
                </div>
                <div className='mt-6 '>
                    <p className='font-semibold text-slate-400 text-sm'>Score Average</p>
                    <p className='font-bold text-md'>75.3%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardQuizStat