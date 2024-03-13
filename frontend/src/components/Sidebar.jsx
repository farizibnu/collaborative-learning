import React, { useState, useEffect } from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { AiOutlineSlackSquare, AiOutlineLeftSquare } from "react-icons/ai";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { links } from '../data/dummy';
import Cookies from 'universal-cookie';
import {getUserInfo} from '../lib/userFetch';
const Sidebar = () => {
  const [profile, setProfile] = useState([]);
  const cookies = new Cookies();
  const navigation = useNavigate();
  const logout = () => {
    cookies.remove("user_token");
    googleLogout();
    setProfile(null);
    navigation("/login");
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
          <div>
            <h2 className='mt-24'>React Google Login</h2>
            {profile &&
              <div className='w-11/12 border-2 border-orange-400 rounded-2xl flex gap-1 items-center justify-center my-4 p-2'>
                <img className='rounded-full w-8 h-8' src={profile.picture} alt="user image" />
                <div className='text-xs'>
                  <p>{profile.name}</p>
                  <p>{profile.email}</p>
                </div>
                <br />
                <br />
              </div>
            }
          </div>
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