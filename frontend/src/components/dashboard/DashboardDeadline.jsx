import React from 'react'
import avatar2 from '../../data/avatar2.jpg'
import avatar3 from '../../data/avatar3.png'
import avatar4 from '../../data/avatar4.jpg'


const DashboardReport = () => {
  return (
  <>
    <div className="card w-full mx-20">
        <p className='text-2xl font-bold mb-6'>Upcoming Event</p>
        <div className='flex gap-4'>
            <div className='rounded-lg bg-white border-t-blue-600 border-t-8 shadow-md p-3 h-48 w-72 relative'>
                <p className='text-red-600 text-sm'>Tanggal Deadline</p>
                <div className='absolute bottom-2 leading-10'>
                    <p className='font-bold text-xl'>Nama Mata Kuliah</p>
                    <p className=''>Nama Tugas</p>
                    <div className='flex gap-2 items-center'>
                        <img className="rounded-full w-8 h-8" src={avatar2} alt="" />
                        <p>Nama Dosen</p>
                    </div>
                </div>
            </div>
            <div className='rounded-lg bg-white border-t-blue-600 border-t-8 shadow-md p-3 h-48 w-72 relative'>
                <p className='text-red-600 text-sm'>Tanggal Deadline</p>
                <div className='absolute bottom-2 leading-10'>
                    <p className='font-bold text-xl'>Nama Mata Kuliah</p>
                    <p className=''>Nama Tugas</p>
                    <div className='flex gap-2 items-center'>
                    <img className="rounded-full w-8 h-8" src={avatar3} alt="" />
                        <p>Nama Dosen</p>
                    </div>
                </div>
            </div>
            <div className='rounded-lg bg-white border-t-blue-600 border-t-8 shadow-md p-3 h-48 w-72 relative'>
                <p className='text-red-600 text-sm'>Tanggal Deadline</p>
                <div className='absolute bottom-2 leading-10'>
                    <p className='font-bold text-xl'>Nama Mata Kuliah</p>
                    <p className=''>Nama Tugas</p>
                    <div className='flex gap-2 items-center'>
                    <img className="rounded-full w-8 h-8" src={avatar4} alt="" />
                        <p>Nama Dosen</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default DashboardReport