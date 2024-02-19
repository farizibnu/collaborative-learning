import React from 'react'

const DashboardReport = () => {
  return (
  <>
    <div className="card w-full mx-24">
        <p className='text-3xl font-bold mb-10'>Report</p>
        <div className='flex justify-between'>
            <div className='text-center rounded-lg bg-orange-100 p-3 w-56'>
                <p>Komunitas yang diikuti</p>
                <p className='text-2xl'>8</p>
            </div>
            <div className='text-center rounded-lg bg-blue-100 p-3 w-56'>
                <p>Quiz Selesai</p>
                <p className='text-2xl'>10</p>
            </div>
            <div className='text-center rounded-lg bg-green-100 p-3 w-56'>
                <p>Komunitas yang diikuti</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default DashboardReport