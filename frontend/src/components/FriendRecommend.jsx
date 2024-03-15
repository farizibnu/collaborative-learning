// FriendRecommend.js

import React from 'react';

const FriendRecommend = ({ friend }) => {
  return (
      <div className="card w-full animate-slide-right">
        <ul className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:justify-center lg:justify-start">
          <li className="my-1 px-1 w-full">
            <div className='bg-gray-50 border-1 border-gray-200 rounded-xl shadow-sm text-left p-2 w-36 h-72 relative'>
              <img className='rounded-lg w-48 object-cover mb-2' src={friend.image} alt="" />
              <p className='font-bold text-sm'>{friend.name}</p>
              <p className='text-xs'>{friend.job}</p>
              <button className='w-32 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 rounded-lg font-bold text-white text-sm py-1 absolute bottom-2 left-1.5'>Add Friend</button>
            </div>
          </li>
        </ul>
    </div>

  );
};

export default FriendRecommend;