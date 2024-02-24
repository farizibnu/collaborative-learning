import React from 'react'
import course1 from '../../data/product1.jpg'
import course2 from '../../data/product2.jpg'
import course3 from '../../data/product3.jpg'

const DashboardCommunityList = () => {
  return (
    <div>
        <div className="shadow-md rounded-xl bg-white p-4 mr-4">
            <p className='text-xl font-bold mb-4'>Community Lists</p>
            <div className=''>
                <div className='flex rounded-lg bg-white shadow-md p-3 h-20 w-full mb-2 relative items-center'>
                    <img className='m-0 p-0 w-16 h-16 object-cover rounded-lg' src={course1} alt="" />
                    <div className='ml-2'>
                        <div className=''>
                            <p className='font-bold text-sm'>Nama Komunitas</p>
                            <p className='text-sm text-slate-500 font-semibold'>Jumlah Anggota</p>
                        </div>
                    </div>
                </div>
                <div className='flex rounded-lg bg-white shadow-md p-3 h-20 w-full mb-2 relative items-center'>
                    <img className='m-0 p-0 w-16 h-16 object-cover rounded-lg' src={course1} alt="" />
                    <div className='ml-2'>
                        <div className=''>
                            <p className='font-bold text-sm'>Nama Komunitas</p>
                            <p className='text-sm text-slate-500 font-semibold'>Jumlah Anggota</p>
                        </div>
                    </div>
                </div>
                <div className='flex rounded-lg bg-white shadow-md p-3 h-20 w-full mb-2 relative items-center'>
                    <img className='m-0 p-0 w-16 h-16 object-cover rounded-lg' src={course1} alt="" />
                    <div className='ml-2'>
                        <div className=''>
                            <p className='font-bold text-sm'>Nama Komunitas</p>
                            <p className='text-sm text-slate-500 font-semibold'>Jumlah Anggota</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardCommunityList