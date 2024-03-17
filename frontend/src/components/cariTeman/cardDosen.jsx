// cardMahasiswa.js

import React from 'react';

const CardDosen = ({ dosen }) => {
  const topikList = dosen.Topik.split(',');
  return (
    <div className="card w-64 h-150">
      <ul className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:justify-center lg:justify-start">
        <li className="my-1 px-1 w-full">
          <div className='bg-gray-50 border-1 border-gray-200 rounded-xl shadow-sm text-left p-2 w-full h-full relative flex flex-col justify-between'>
            <div className="flex flex-col items-center h-full">
              <div className="absolute top-2 left-2 bg-green-300 text-white px-2 py-1 rounded">
                <p className='text-xs'>Dosen</p>
              </div>
              <img
                className='rounded-lg w-full h-48 object-cover mb-2'
                src={dosen.Image}
                alt=""
              />
              <p className='font-bold text-m text-center'>{dosen.Nama}</p>
              <p className='text-xs text-center text-gray-500'>{dosen.PerguruanTinggi}</p>
              <p className='text-xs text-center text-gray-500'>{dosen.Kota}, {dosen.Provinsi}</p>
              <hr className="w-2/3 mx-auto border-gray-400 border-solid border-t-2 mt-2"/>
              <div className="bg-blue-500 text-white px-2 py-1 rounded mt-2 w-2/3 mx-auto">
                <p className='text-xs text-center'>{dosen.Jurusan}</p>
              </div>
              <div className= "text-white px-2 rounded mt-2 flex flex-row">
                {topikList.map((topik, index) => (
                  <div key={index} className="bg-pink-400 text-white px-2 py-1 rounded m-1">
                    <p className='text-xs'>{topik.trim()}</p>
                  </div>
                ))}
              </div>
            </div>
            <hr className="w-2/3 mx-auto border-gray-400 border-solid border-t-2 mt-2"/>
            <div className='flex py-1 font-bold'>
                <p className='text-xs ml-2 mr-16'>Bergabung</p>
                <p className='text-xs'>Likes</p>
            </div>
            <div className='flex py-1 text-gray-500'>
                <p className='text-xs ml-2 mr-10'>{dosen.Bergabung}</p>
                <p className='text-xs'>{dosen.Likes}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardDosen;
