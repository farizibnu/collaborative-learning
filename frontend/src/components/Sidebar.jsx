import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import { AiOutlineSlackSquare, AiOutlineLeftSquare  } from "react-icons/ai";
import {MdOutlineCancel} from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';

import {links} from  '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 bg-light-gray'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md hover:bg-light-gray m-2'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center pb-5'>
          <Link to="/" onClick={() => {}} className='items-center ml-3 flex text-xl tracking-tight gap-3 mt-4 font-extrabold text-slate-900'>
          <AiOutlineSlackSquare /><span>Colle</span>
          </Link>
          <button type='button' onClick={() => {}} className='text-2xl p-1 mx-2 hover:bg-light-gray mt-4 block md:hidden'>
            <AiOutlineLeftSquare/>
          </button>
        </div>
        <div className=''>
          {links.map((item) => (
            <div key={item.title}>
              {/* <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p> */}
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.url}`}
                  key={link.name}
                  onClick={() => {}}
                  className={({ isActive }) => isActive ? activeLink : normalLink}
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar