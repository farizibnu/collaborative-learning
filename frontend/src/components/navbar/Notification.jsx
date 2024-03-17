import React from 'react';
import avatar from '../../data/avatar4.jpg'

const Notification = ({ notification }) => {
  return (
    <div className="items-center justify-between hover:bg-orange-50 rounded-lg p-4 mb-2">
      <div className="flex items-center">
        {notification.type != 'quizResult' && (
        <img
          className="h-8 w-8 rounded-full object-cover mr-2"
          src={avatar}
          alt="Avatar"
        />
        )}
        <div className='w-full overflow-hidden'>
          <p className="max-h-6 font-bold overflow-hidden">{notification.username}</p>
          <p className="max-h-16 text-gray-600 text-sm overflow-hidden">{notification.message}</p>
        </div>
      </div>
      <div>
        {notification.type === 'friendRequest' && (
          <div className="mt-2 flex justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded">Accept</button>
            <a href={notification.link} className="ml-2 text-orange-500 hover:underline">View Profile</a>
          </div>
        )}
        {notification.type === 'questionAnswered' && (
          <a href={notification.link} className="mt-2 text-orange-500 hover:underline justify-end le">View Answer</a>
        )}
        {notification.type === 'quizResult' && (
          <a href={notification.link} className="mt-2 text-orange-500 hover:underline">View Result</a>
        )}
        {notification.type === 'newMessage' && (
          <a href={notification.link} className="mt-2 text-orange-500 hover:underline">View Message</a>
        )}
        <p className="max-h-6 text-sm font-semibold text-gray-500 overflow-hidden flex justify-end">{notification.time}</p>
      </div>
    </div>
  );
};

export default Notification;