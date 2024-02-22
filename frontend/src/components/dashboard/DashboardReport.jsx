import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

const DashboardReport = () => {
  return (
  <>
    <div className="card w-full mx-20">
        <p className='text-2xl font-bold mb-6'>Report</p>
        <div className='flex justify-between'>
            <div className='flex text-left rounded-2xl bg-orange-100 border-3 border-orange-300 text-orange-500 p-3 w-56'>
                <div className='bg-white rounded-xl w-12 h-12 items-center flex justify-center'>
                    <FaPeopleGroup style={{ fontSize: '24px'}} />
                </div>
                <div className='mx-2'>
                    <p className='text-2xl text-black font-bold'>8</p>
                    <p className='font-bold text-xs text-slate-400'>Komunitas yang diikuti</p>
                </div>
            </div>
            <div className='flex text-left rounded-2xl bg-blue-100 border-3 border-blue-300 text-blue-500 p-3 w-56'>
                <div className='bg-white rounded-xl w-12 h-12 items-center flex justify-center'>
                    <MdOutlineAssignmentTurnedIn style={{ fontSize: '24px'}} />
                </div>
                <div className='mx-2'>
                    <p className='text-2xl text-black font-bold'>10</p>
                    <p className='font-bold text-xs text-slate-400'>Quiz Selesai</p>
                </div>
            </div>
            <div className='text-center rounded-2xl bg-green-100 border-3 border-green-300 p-3 w-56'>
                <p className='font-semibold'>Ini apa ya</p>
            </div>
            <div className='text-center rounded-2xl bg-purple-100 border-3 border-purple-300 p-3 w-56'>
                <p className='font-semibold'>Biar banyak</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default DashboardReport