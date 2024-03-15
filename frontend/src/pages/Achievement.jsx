import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AchievementList from '../components/achievement/AchievementList';
import AchievementListPolygon from '../components/achievement/AchievementListPolygon';

const Achievement = () => {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='mx-20'>
      <div className='flex w-full'>
        <p className='w-9/12 text-left text-2xl font-bold'>My Achievement</p>
        {/* Input for search */}
        <Input
          className='w-3/12 rounded-full gap-3'
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
          // Update search query state on change
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='my-8'>
        {/* Pass search query state to AchievementList */}
        {/* <AchievementList /> */}
        <AchievementListPolygon searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Achievement;
