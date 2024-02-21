// FriendRecommend.js

import React from 'react';

const FriendRecommend = ({ friend }) => {
  return (
      <div className="card w-full">
        <ul className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:justify-center lg:justify-start">
          <li className="my-1 px-1 w-full">
            <div className='bg-gray-50 border-1 border-gray-200 rounded-xl shadow-sm text-left p-2 w-52 h-88 relative'>
              <img className='rounded-lg w-48 object-cover mb-2' src={friend.image} alt="" />
              <p className='font-bold'>{friend.name}</p>
              <p className='text-sm'>{friend.job}</p>
              <button className='w-48 bg-teal-400 hover:bg-teal-500 active:bg-teal-600 rounded-lg font-bold text-white text-sm py-1 absolute bottom-2 left-1.5'>Add Friend</button>
            </div>
          </li>
        </ul>
    </div>

  );
};

export default FriendRecommend;