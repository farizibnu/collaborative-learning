import React from 'react'

const ProfileInfo = () => {
  return (
    <div className='bg-white p-6 m-5 w-3/5'>
        <p className='font-bold'>About</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptates sequi aperiam laborum fuga similique obcaecati, ipsam doloremque quia nam error, maxime incidunt hic vitae. Tempora aperiam consequuntur totam architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi repellat magnam quidem laborum unde ab dolores optio asperiores sequi dignissimos ad recusandae iusto deleniti officia, hic iure quia pariatur.</p>
        <div className='w-1/2 leading-loose'>
            <p className='font-bold mt-6'>General Information</p>
            <p className='flex justify-between'>Asal Kampus<div></div>Politeknik Negeri Bandung</p>
            <p className='flex justify-between'>Jurusan<div></div>Teknik Informatika</p>
            <p className='flex justify-between'>Semester<div></div>6</p>
        </div>
    </div>
  )
}

export default ProfileInfo