import React from 'react'

import { FaPeopleGroup, FaArrowRightLong  } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

const DashboardReport = () => {
  return (
  <>
    <div className="card w-full">
        <p className='text-xl font-bold mb-6'>Report</p>
        <div className='flex justify-between'>
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
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='bg-white rounded-xl w-12 h-12 items-center flex justify-center'>
                            <MdOutlineAssignmentTurnedIn style={{ fontSize: '24px'}} />
                        </div>
                        <div className='mx-2'>
                            <p className='text-2xl text-black font-bold'>8</p>
                            <p className='font-bold text-xs text-slate-400'>Quiz Dibuat</p>
                        </div>
                    </div>
                    <div className='text-xl text-black mr-2'>+</div>
                </div>
                <hr className='my-2 mx-0 border-slate-400'/>
                <div className='mx-2 flex justify-between'>
                    <p className='font-bold text-xs text-blue-500'>Lihat Detail</p>
                    <FaArrowRightLong />
                </div>
            </div>
            <div className='text-left rounded-2xl bg-green-100 border-3 border-green-300 text-green-500 p-3 w-60'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='bg-white rounded-xl w-12 h-12 items-center flex justify-center'>
                            <MdOutlineAssignmentTurnedIn style={{ fontSize: '24px'}} />
                        </div>
                        <div className='mx-2'>
                            <p className='text-2xl text-black font-bold'>5</p>
                            <p className='font-bold text-xs text-slate-400'>Kelas Dibuat</p>
                        </div>
                    </div>
                </div>
                <hr className='my-2 mx-0 border-slate-400'/>
                <div className='mx-2 flex justify-between'>
                    <p className='font-bold text-xs text-blue-500'>Lihat Detail</p>
                    <FaArrowRightLong />
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default DashboardReport