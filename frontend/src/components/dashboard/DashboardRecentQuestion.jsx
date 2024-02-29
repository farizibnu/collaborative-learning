import React from 'react'

const DashboardRecentQuestion = () => {
  return (
    <div>
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
                    <img className='m-0 p-0 w-16 h-16 object-cover rounded-lg' src={course2} alt="" />
                    <div className='ml-2'>
                        <div className=''>
                            <p className='font-bold text-sm'>Nama Komunitas</p>
                            <p className='text-sm text-slate-500 font-semibold'>Jumlah Anggota</p>
                        </div>
                    </div>
                </div>
                <div className='flex rounded-lg bg-white shadow-md p-3 h-20 w-full mb-2 relative items-center'>
                    <img className='m-0 p-0 w-16 h-16 object-cover rounded-lg' src={course3} alt="" />
                    <div className='ml-2'>
                        <div className=''>
                            <p className='font-bold text-sm'>Nama Komunitas</p>
                            <p className='text-sm text-slate-500 font-semibold'>Jumlah Anggota</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <button className='bg-orange-400 hover:bg-orange-600 p-3 text-white rounded-3xl font-bold text-sm px-10'>Lihat Selengkapnya</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DashboardRecentQuestion