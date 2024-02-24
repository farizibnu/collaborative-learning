import React from 'react'
import course1 from '../../data/product1.jpg'
import course2 from '../../data/product2.jpg'
import course3 from '../../data/product3.jpg'


const DashboardReport = () => {
  return (
  <>
    <div className="shadow-md rounded-xl bg-white p-4 mr-4">
        <p className='text-xl font-bold mb-4'>Upcoming Event</p>
        <div className=''>
            <div className='flex rounded-lg bg-white shadow-md p-3 h-20 w-full mb-2 relative items-center'>
                <img className='m-0 p-0 w-16 h-16 object-cover rounded-lg' src={course1} alt="" />
                <div className='ml-2'>
                    <p className='text-red-600 font-semibold text-xs'>Hari Ini <span>- 23:59</span> </p>
                    <div className=''>
                        <p className='font-bold text-sm'>Pengujian Perangkat Lunak</p>
                        <p className='text-sm text-slate-500 font-semibold'>Blackbox Testing</p>
                    </div>
                </div>
            </div>
            <div className='flex rounded-lg bg-white shadow-md p-3 h-20 w-full mb-2 relative items-center'>
                <img className='m-0 p-0 w-16 h-16 object-cover rounded-lg' src={course2} alt="" />
                <div className='ml-2'>
                    <p className='text-red-600 font-semibold text-xs'>Tanggal Deadline <span>- Jam Deadline</span> </p>
                    <div className=''>
                        <p className='font-bold text-sm'>Nama Course</p>
                        <p className='text-sm text-slate-500 font-semibold'>Nama Course</p>
                    </div>
                </div>
            </div>
            <div className='flex rounded-lg bg-white shadow-md p-3 h-20 w-full mb-2 relative items-center'>
                <img className='m-0 p-0 w-16 h-16 object-cover rounded-lg' src={course3} alt="" />
                <div className='ml-2'>
                    <p className='text-red-600 font-semibold text-xs'>Tanggal Deadline <span>- Jam Deadline</span> </p>
                    <div className=''>
                        <p className='font-bold text-sm'>Nama Course</p>
                        <p className='text-sm text-slate-500 font-semibold'>Nama Course</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-4'>
                <button className='bg-orange-400 hover:bg-orange-600 p-3 text-white rounded-3xl font-bold text-sm px-10'>Lihat Selengkapnya</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default DashboardReport