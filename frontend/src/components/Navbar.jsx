import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Progress } from 'antd';

// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

// const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
//   // <TooltipComponent content={title} position="BottomCenter">
//     <button
//       type="button"
//       onClick={() => customFunc()}
//       style={{ color }}
//       className="relative text-xl rounded-full p-3 hover:bg-light-gray"
//     >
//       <span
//         style={{ background: dotColor }}
//         className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
//       />
//       {icon}
//     </button>
//   {/* </TooltipComponent> */}
// );

const Navbar = () => {

  return (
    <div className="flex justify-between items-center p-2 md:ml-6 md:mr-6 relative">
        <div>
          <p>Welcome, nama</p>
          <p>Have a good day!</p>
        </div>
      {/* <NavButton title="Menu" icon={<AiOutlineMenu />} /> */}
      <div className="flex rounded-xl h-9">
        <Input className='rounded-full gap-3' size="small" placeholder="Search"  prefix={<SearchOutlined />} />
        {/* <div className='m-4 rounded-md bg-white '>
          <form action="/search" method="get" className='border-red-700 m-2'>
                <input type="text" name="q" placeholder="Search" />
                <input type="submit" value="Search" />
          </form> */}
        </div>
        {/* <NavButton title="Chat" dotColor="#03C9D7" icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" icon={<RiNotification3Line />} /> */}
        {/* <TooltipComponent content="Profile" position="BottomCenter"> */}
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            // onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <div>
              <p>
                <span className="text-gray-400 text-14">Hi,</span>{' '}
                <span className="text-gray-400 font-bold ml-1 text-14">
                  Michael
                </span>
              </p>
              <div className='flex'>
                {/* <MdKeyboardArrowDown className="text-gray-400 text-14 items-center" /> */}
                <p>Level 0</p>
              </div>
              <Progress percent={30} strokeColor={"#FFFF00"} showInfo={false} size="small" />
            </div>
          </div>
        {/* </TooltipComponent> */}

        {/* {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)} */}
      </div>
  );
};

export default Navbar;