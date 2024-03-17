import React, { useState } from 'react';
import CardPraktisi from './cardPraktisi.jsx';
import praktisi from '../../data/dataPraktisi.js';

const Praktisi = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevClick = () => {
    const newIndex = Math.max(0, index - 1);
    setIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = Math.min(index + 1, praktisi.length - 1);
    setIndex(newIndex);
  };

  const visiblePraktisiData = praktisi.slice(index, index + 5);

  return (
    <div
      className="w-1100 overflow-hidden mx-19"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className='text-xl font-bold mb-6 text-blue-400 py-2'>Praktisi</p>
      <div className="flex relative">
        {visiblePraktisiData.map((praktisi) => (
          <CardPraktisi key={praktisi.id} praktisi={praktisi} />
        ))}
        <div className={`absolute top-28 left-0 right-3 flex justify-between items-center px-4 py-2 ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.3s ease-in-out' }}>
          <button className='bg-orange-400 opacity-65 hover:opacity-80 h-16 w-16 rounded-full text-4xl' onClick={handlePrevClick} disabled={index === 0}>{'<'}</button>
          <button className='bg-orange-400 opacity-65 hover:opacity-80 h-16 w-16 rounded-full text-4xl' onClick={handleNextClick} disabled={index >= praktisi.length - 5}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Praktisi;
