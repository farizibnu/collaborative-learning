// Notification.js
import React from 'react';
import avatar from '../../data/avatar4.jpg'

const Notification = ({ notification }) => {
  return (
    <div className="items-center justify-between hover:bg-orange-50 rounded-lg p-4 mb-2">
      <div className="flex items-center">
        <img
          className="h-8 w-8 rounded-full object-cover mr-2"
          src={avatar}
          alt="Avatar"
        />
        <div className='w-full overflow-hidden'>
          <p className="max-h-6 font-semibold overflow-hidden">{notification.username}</p>
          <p className="max-h-16 text-gray-600 text-sm overflow-hidden">{notification.message}</p>
        </div>
      </div>
      <div>
        <p className="max-h-6 text-sm text-gray-500 overflow-hidden">{notification.time}</p>
      </div>
    </div>
  );
};

export default Notification;
