import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineSlackSquare, AiOutlineLeftSquare  } from "react-icons/ai";
import {MdOutlineCancel} from 'react-icons/md';
import { googleLogout, useGoogleLogin, GoogleLogin } from '@react-oauth/google';

import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';
import {links} from  '../data/dummy';

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState([]);

  //On click Logout
  const logout = () => {
    Cookies.remove("userId");
    window.location.href = "/login";
  };

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  const activeMenu = true;
  const activeLink = 'flex items-center gap-5 pl-8 -ml-3 pt-3 pb-2.5 text-orange-400 border-l-4 border-l-orange-400 font-semibold text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white font-semibold text-md hover:text-orange-300 m-2'

  return (
    <div className='pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-slate-950'>
      {activeMenu && (<>
        <div className='flex justify-between items-center pb-5'>
          <Link to="/" onClick={() => {}} className='items-center ml-4 flex text-xl tracking-tight gap-3 mt-8 font-extrabold text-orange-400'>
            <AiOutlineSlackSquare style={{ fontSize: '40px'}} /><span className='text-white text-2xl'>Colle</span>
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
          <div className=''>
            <button
                onClick={logout}
                className="w-11/12 bg-slate-950 text-orange-400 border-2 border-orange-400 font-bold py-2 px-4 ml-1 rounded-2xl hover:bg-orange-400 hover:text-black"
                >
                Log Out
            </button>
          </div>
        </div>
      </>)}
    </div>
  )
}

export default Sidebar