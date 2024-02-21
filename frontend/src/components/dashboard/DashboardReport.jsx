import React from 'react'

const DashboardReport = () => {
  return (
  <>
    <div className="card w-full mx-20">
        <p className='text-2xl font-bold mb-6'>Report</p>
        <div className='flex justify-between'>
            <div className='text-center rounded-xl bg-orange-100 p-3 w-56'>
                <p className='font-semibold'>Komunitas yang diikuti</p>
                <p className='text-2xl'>8</p>
            </div>
            <div className='text-center rounded-xl bg-blue-100 p-3 w-56'>
                <p className='font-semibold'>Quiz Selesai</p>
                <p className='text-2xl'>10</p>
            </div>
            <div className='text-center rounded-xl bg-green-100 p-3 w-56'>
                <p className='font-semibold'>Komunitas yang diikuti</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default DashboardReport