import React from 'react'
import { Link } from 'react-router-dom';
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { getDataDashboard } from "../../lib/userFetch";
import badge1 from '../../data/achievement1.png'
import badge2 from '../../data/achievement2.png'
import badge3 from '../../data/achievement3.png'
import badge4 from '../../data/achievement4.png'

const ProfileDetail = () => {
  return (
    <div>
        <Link to={'/profile/achievement'}>
            <div className='bg-white shadow-md rounded-md w-96 m-8 p-4'>
                <p className='font-bold mb-4'>Achievement</p>
                <div className='flex gap-4 justify-center'>
                    <img className='h-16' src={badge1} alt="badge-1" />
                    <img className='h-16' src={badge2} alt="badge-2" />
                    <img className='h-16' src={badge3} alt="badge-3" />
                    <img className='h-16' src={badge4} alt="badge-4" />
                </div>
            </div>
        </Link>
        <div className='bg-white shadow-md rounded-md w-96 m-8 p-4'>
            <p className='font-bold mb-4'>Report</p>
            <div className='flex rounded-xl bg-orange-100 p-3 w-full h-16 justify-between text-center mb-3'>
                <div className='flex text-orange-500 items-center justify-center gap-2'>
                    <FaPeopleGroup style={{ fontSize: '24px'}} />
                    <p className='font-bold text-lg'>8</p>
                </div>
                <p className='font-bold items-center justify-center flex text-slate-500'>Komunitas yang diikuti</p>
            </div>
            <div className='flex text-center rounded-xl bg-blue-100 p-3 w-full h-16 justify-between'>
                <div className='flex text-blue-500 items-center justify-center gap-2'>
                    <MdOutlineAssignmentTurnedIn style={{ fontSize: '24px'}} />
                    <p className='font-bold text-lg'>10</p>
                </div>
                <p className='font-bold items-center justify-center flex text-slate-500'>Quiz Selesai</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetail