import React from 'react'
import { FaPeopleGroup, FaArrowRightLong  } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

const DashboardReport = () => {
  return (
  <>
    <div className=" w-full">
        <p className='text-xl font-bold mb-6'>Report</p>
        <div className='flex justify-between gap-4'>
            <div className='text-left rounded-2xl bg-orange-100 border-3 border-orange-300 text-orange-500 p-3 w-60'>
                <div className='flex'>
                    <div className='bg-white rounded-xl w-12 h-12 items-center flex justify-center'>
                        <FaPeopleGroup style={{ fontSize: '24px'}} />
                    </div>
                    <div className='mx-2'>
                        <p className='text-2xl text-black font-bold'>8</p>
                        <p className='font-bold text-xs text-slate-400'>Komunitas yang diikuti</p>
                    </div>
                </div>
                <hr className='my-2 mx-0 border-slate-400'/>
                <div className='mx-2 flex justify-between'>
                    <p className='font-bold text-xs text-orange-500'>Lihat Detail</p>
                    <FaArrowRightLong />
                </div>
            </div>
            <div className='text-left rounded-2xl bg-blue-100 border-3 border-blue-300 text-blue-500 p-3 w-60'>
                <div className='flex'>
                    <div className='bg-white rounded-xl w-12 h-12 items-center flex justify-center'>
                        <MdOutlineAssignmentTurnedIn style={{ fontSize: '24px'}} />
                    </div>
                    <div className='mx-2'>
                        <p className='text-2xl text-black font-bold'>10</p>
                        <p className='font-bold text-xs text-slate-400'>Quiz Selesai</p>
                    </div>                
                </div>
                <hr className='my-2 mx-0 border-slate-400'/>
                <div className='mx-2 flex justify-between'>
                    <p className='font-bold text-xs text-blue-500'>Lihat Detail</p>
                    <FaArrowRightLong />
                </div>
            </div>
            <div className='text-center rounded-2xl bg-green-100 border-3 border-green-300 p-3 w-60'>
                <p className='font-semibold'>Ini apa ya</p>
            </div>
            <div className='w-0 h-0 border-solid border-transparent border-b-8 border-t-0 border-l-4 border-r-4 border-green-500'><p></p></div>
        </div>
    </div>

    </>
  )
}

export default DashboardReport