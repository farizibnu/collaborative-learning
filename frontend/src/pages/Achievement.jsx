import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AchievementList from '../components/achievement/AchievementList';
import AchievementListPolygon from '../components/achievement/AchievementListPolygon';

const Achievement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='mx-20'>
      <div className='flex w-full my-6'>
        <p className='w-9/12 text-left text-2xl font-bold'>My Achievement</p>
        <Input
          className='w-3/12 rounded-full gap-3'
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='my-8'>
        <AchievementListPolygon searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Achievement;
