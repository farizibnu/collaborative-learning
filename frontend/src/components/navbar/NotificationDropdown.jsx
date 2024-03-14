import React from 'react';
import Notification from './Notification';

const NotificationDropdown = ({ notifications, isOpen, toggleDropdown }) => {
  return (
    <div
      className={`absolute -left-10 mt-2 w-80 h-160 overflow-y-scroll bg-white rounded-md shadow-lg origin-top-right divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none animate-${isOpen ? 'slide-up' : 'slide-down'}`}
    >
      <div className="py-1 px-3">
        <p className="p-2 text-xl font-bold">Notification</p>
        {notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;
