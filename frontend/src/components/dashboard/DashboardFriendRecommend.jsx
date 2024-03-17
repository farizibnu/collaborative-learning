import React, { useState } from 'react';
import FriendRecommendation from '../FriendRecommend';
import friendRecommendations from '../../data/data.js';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const DashboardFriendRecommend = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevClick = () => {
    const newIndex = Math.max(0, index - 1);
    setIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = Math.min(index + 1, friendRecommendations.length - 1);
    setIndex(newIndex);
  };

  const visibleFriendsData = friendRecommendations.slice(index, index + 5);

  return (
    <div
      className="w-full overflow-hidden mx-19"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className='text-xl font-bold mb-6'>Friend Recommendation</p>
      <div className="flex relative">
        {visibleFriendsData.map((friend) => (
          <FriendRecommendation key={friend.id} friend={friend} />
        ))}
        <div className={`absolute top-28 left-0 right-3 flex justify-between items-center px-4 py-2 ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.3s ease-in-out' }}>
          <button className='bg-orange-400 opacity-65 hover:opacity-80 h-16 w-16 rounded-full text-4xl flex justify-center items-center' onClick={handlePrevClick} disabled={index === 0}><MdKeyboardArrowLeft /></button>
          <button className='bg-orange-400 opacity-65 hover:opacity-80 h-16 w-16 rounded-full text-4xl flex justify-center items-center' onClick={handleNextClick} disabled={index >= friendRecommendations.length - 5}><MdKeyboardArrowRight /></button>
        </div>
      </div>

    </div>
  );
};

export default DashboardFriendRecommend;
