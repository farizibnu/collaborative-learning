import React, {useState, useEffect } from "react"
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Input, Progress, Dropdown, Space } from 'antd';
import NotificationDropdown from "./navbar/NotificationDropdown";

// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
// import { Chat, Notification, UserProfile } from '.';
// import { useStateContext } from '../contexts/ContextProvider';

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
  // const [isVisible, setIsVisible] = useState(false);
  // const notifButtonRef = useRef(null);
  const [mahasiswa, setMahasiswa] = useState("");
  const UserId = Cookies.get('userId');
  const [showDropdown, setShowDropdown] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const getInfoMahasiswa = async () => {
      try {
      const response = await axios.get(`http://localhost:8080/mahasiswa/${UserId}`);
      setMahasiswa(response.data);
      } catch (error) {
      console.error('Error fetching mahasiswa data:', error);
      }
  };

  useEffect(()=>{
      getInfoMahasiswa();
  }, []);

  const notifications = [
    {
      avatar: 'url_to_avatar',
      username: 'John DoeDoe Doe Doe Doe DOe DOeooo DOeooo',
      message: 'Liked your post',
      time: '2 minutes ago',
    },
    {
      avatar: 'url_to_avatar',
      username: 'Jane Smith',
      message: 'Commented on your photo comment comemtne cmomementmcoemm cmoeme cmoem',
      time: '1 hour ago',
    },
    {
      avatar: 'url_to_avatar',
      username: 'Jane Smith',
      message: 'Commented on your photo',
      time: '1 hour ago aho sahdo aho ahao haoha hoah aho ',
    },
    {
      avatar: 'url_to_avatar',
      username: 'John DoeDoe Doe Doe Doe DOe DOeooo DOeooo',
      message: 'Liked your post',
      time: '2 minutes ago',
    },
    {
      avatar: 'url_to_avatar',
      username: 'Jane Smith',
      message: 'Commented on your photo comment comemtne cmomementmcoemm cmoeme cmoem',
      time: '1 hour ago',
    },
    {
      avatar: 'url_to_avatar',
      username: 'Jane Smith',
      message: 'Commented on your photo',
      time: '1 hour ago aho sahdo aho ahao haoha hoah aho ',
    },
    // Add more notifications as needed
  ];

  return (
    <div className="flex justify-between items-center p-2 md:ml-6 md:mr-6 relative">
        <div className='ml-8 gap-4 flex'>
          {/* <p className='font-bold'>Monday</p>
          <p className='text-sm font-semibold'>24 February 2024</p> */}
          <Link to="/dosen"><button className="p-3 bg-orange-400 text-md font-bold text-white rounded-2xl">To Dosen</button></Link>
          <Link to="/"><button className="p-3 bg-orange-400 text-md font-bold text-white rounded-2xl">To Mahasiswa</button></Link>
        </div>
      {/* <NavButton title="Menu" icon={<AiOutlineMenu />} /> */}
      <div className="flex rounded-xl h-9">
        {/* <Input className='rounded-full gap-3' size="small" placeholder="Search"  prefix={<SearchOutlined />} /> */}
        {/* <div className='m-4 rounded-md bg-white '>
          <form action="/search" method="get" className='border-red-700 m-2'>
                <input type="text" name="q" placeholder="Search" />
                <input type="submit" value="Search" />
          </form> */}
        </div>
        {/* <NavButton title="Chat" dotColor="#03C9D7" icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" icon={<RiNotification3Line />} /> */}
        {/* <TooltipComponent content="Profile" position="BottomCenter"> */}
          <div className='flex gap-2 items-center justify-center'>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <Space>
                  <BellOutlined style={{ fontSize: '22px', color: '#374151' }} />
                </Space>
              </button>
              <NotificationDropdown
                notifications={notifications}
                isOpen={showDropdown}
                toggleDropdown={toggleDropdown}
              />
            </div>
                {/* <KnockFeedProvider
                  apiKey={process.env.KNOCK_PUBLIC_API_KEY}
                  feedId={process.env.KNOCK_FEED_ID}
                  userId={currentUser.id}
                >
                  <>
                    <NotificationIconButton
                      ref={notifButtonRef}
                      onClick={(e) => setIsVisible(!isVisible)}
                    />
                    <NotificationFeedPopover
                      buttonRef={notifButtonRef}
                      isVisible={isVisible}
                      onClose={() => setIsVisible(false)}
                    />
                  </>
                </KnockFeedProvider> */}
            <Link
              to="/profile"
              className="flex items-center gap-2 cursor-pointer p-1 px-3 hover:bg-light-gray rounded-lg"
              // onClick={() => handleClick('userProfile')}
            >
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
                alt="user-profile"
              />
              <div className='w-40'>
                <p>
                  <span className="text-gray-400 text-14">Hi,</span>{' '}
                  <span className="text-gray-400 font-bold ml-1 text-14">
                    {mahasiswa.nama}
                  </span>
                </p>
                <div className='flex w-full'>
                  {/* <MdKeyboardArrowDown className="text-gray-400 text-14 items-center" /> */}
                  <p className='w-1/2 font-semibold'>Level 1</p>
                  <Progress className='w-1/2' percent={30} strokeColor={"#fb923c"} showInfo={false} size="small" strokeWidth={7} />
                </div>
              </div>
            </Link>
          </div>
        {/* </TooltipComponent> */}

        {/* {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)} */}
      </div>
  );
};

export default Navbar;