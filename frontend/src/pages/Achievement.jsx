import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AchievementList from '../components/achievement/AchievementList';

const Achievement = () => {
  return (
    <div className='mx-20'>
        <div className='flex w-full'>
            <p className='w-9/12 text-left text-2xl font-bold'>My Achievement</p>
            <Input className='w-3/12 rounded-full gap-3' size="large" placeholder="Search"  prefix={<SearchOutlined />} />
        </div>
        <div className='my-8'>
            <AchievementList/>
        </div>
    </div>
  )
}

export default Achievement