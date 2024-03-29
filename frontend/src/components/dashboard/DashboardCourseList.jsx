import React from 'react'
import { Progress } from 'antd';
import course1 from '../../data/product1.jpg'
import course2 from '../../data/product2.jpg'
import course3 from '../../data/product3.jpg'
import course4 from '../../data/product4.jpg'

const DashboardCourseList = () => {
  return (
    <div className="card w-full">
        <div className='flex justify-between'>
            <p className='text-xl font-bold mb-6'>Course List</p>
            <p className='text-orange-400 font-bold'>Lihat Selengkapnya</p>
        </div>
        <div className='flex gap-4'>
            <div className='rounded-lg bg-white shadow-md h-82 w-72'>
                <img className='m-0 p-0 w-72 h-36 object-cover rounded-t-lg' src={course1} alt="" />
                <div className='p-3'>
                    <div className='bottom-2 leading-6'>
                        <p className=''>Asri Maspupah M.T S.ST</p>
                        <p className='font-bold text-xl'>Pengujian Perangkat Lunak</p>
                        <div className='mt-2 items-center'>
                            <Progress percent={50} status="active" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-lg bg-white shadow-md h-82 w-72'>
                <img className='m-0 p-0 w-72 h-36 object-cover rounded-t-lg' src={course2} alt="" />
                <div className='p-3'>
                    <div className='bottom-2 leading-6'>
                        <p className=''>Nama Dosen kayaknya</p>
                        <p className='font-bold text-xl'>Nama Course</p>
                        <div className='mt-2 items-center'>
                            <Progress percent={100}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-lg bg-white shadow-md h-82 w-72'>
                <img className='m-0 p-0 w-72 h-36 object-cover rounded-t-lg' src={course3} alt="" />
                <div className='p-3'>
                    <div className='bottom-2 leading-6'>
                        <p className=''>Nama Dosen kayaknya</p>
                        <p className='font-bold text-xl'>Nama Course</p>
                        <div className='mt-2 items-center'>
                            <Progress percent={10} status="active" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardCourseList