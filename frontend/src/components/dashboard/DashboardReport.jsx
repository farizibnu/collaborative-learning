import React from 'react'
import { Link } from 'react-router-dom';
import { FaPeopleGroup, FaArrowRightLong  } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import avatar from "../../data/dashboard-profile.png"
import achievement1 from "../../data/achievement1.png"
import achievement2 from "../../data/achievement2.png"
import achievement3 from "../../data/achievement3.png"

const DashboardReport = () => {
  return (
  <>
    <div className=" w-full">
        {/* <div className='bg-orange-400 rounded-3xl w-full h-40 relative justify-center items-center card-pattern opacity-1'>
            <img className='absolute -bottom-14 right-0 h-72' src={avatar} alt="" />
            <div className='py-4 px-6 space-y-2.5 w-3/5 text-white'>
                <p className='text-2xl font-bold'>Learning is Fun!</p>
                <p className='text-sm font-medium'>Learn fun anywhere and anytime without any time limit just through the application</p>
                <button className='bg-white text-black font-semibold text-xs py-2 px-4 rounded-xl'>Get Started</button>
            </div>
        </div> */}
        <div className='bg-orange-400 rounded-3xl w-full h-40 flex justify-center items-center card-pattern opacity-1'>
            <div className='py-4 px-6 space-y-2.5 w-3/5 text-white -ml-8'>
                <p className='text-2xl font-bold'>Learning is Fun!</p>
                <p className='text-sm font-medium'>Explore your unlocked achievements and relive the moments of success and progress you've made on your journey.</p>
                <Link
                    to="/profile/achievement"
                >
                    <button className='mt-3 bg-white text-black font-semibold text-xs py-2 px-4 rounded-xl transition ease-in-out delay-50 hover:scale-110 duration-300'>View More</button>
                </Link>
            </div>
            <div className='flex'>
                <img className='h-24 w-24 bg-white p-2 rounded-full z-20' src={achievement1} alt="" />
                <img className='h-24 w-24 bg-white p-2 rounded-full -ml-8 z-10' src={achievement2} alt="" />
                <img className='h-24 w-24 bg-white p-2 rounded-full -ml-8' src={achievement3} alt="" />
            </div>
        </div>
    </div>

    </>
  )
}

export default DashboardReport