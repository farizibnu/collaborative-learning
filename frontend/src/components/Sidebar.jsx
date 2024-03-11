import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineSlackSquare, AiOutlineLeftSquare } from "react-icons/ai";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { links } from '../data/dummy';
import Cookies from 'universal-cookie';
import {getUserInfo} from '../lib/userFetch';
const Sidebar = () => {
  const [profile, setProfile] = useState([]);
  const cookies = new Cookies();
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  useEffect(
    () => {
      const get_user = async ()=> {
        const user = await getUserInfo();
        if(user){
          console.log(user);
          setProfile(user);
        }
      };
      get_user();
      
    },
    []
  );
  const activeMenu = true;
  const activeLink = 'flex items-center gap-5 pl-8 -ml-3 pt-3 pb-2.5 text-orange-400 border-l-4 border-l-orange-400 font-semibold text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white font-semibold text-md hover:text-orange-300 m-2'

  return (
    <div className='pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-slate-950'>
      {activeMenu && (<>
        <div className='flex justify-between items-center pb-5'>
          <Link to="/" onClick={() => { }} className='items-center ml-4 flex text-xl tracking-tight gap-3 mt-8 font-extrabold text-orange-400'>
            <AiOutlineSlackSquare style={{ fontSize: '40px' }} /><span className='text-white text-2xl'>Colle</span>
          </Link>
          <button type='button' onClick={() => { }} className='text-2xl p-1 mx-2 hover:bg-light-gray mt-4 block md:hidden'>
            <AiOutlineLeftSquare />
          </button>
        </div>
        <div className='text-white'>
          <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile &&
              <div>
                <img src={profile.picture} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <button onClick={logOut}>Log out</button>
              </div>
            }
          </div>
          {links.map((item) => (
            <div key={item.title}>
              {/* <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p> */}
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.url}`}
                  key={link.name}
                  onClick={() => { }}
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
          <button
              onClick={logout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
              Log Out
          </button>
        </div>
      </>)}
    </div>
  )
}

export default Sidebar