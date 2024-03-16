import React, {useState, useEffect } from "react"
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { Flex, Progress } from 'antd';
import cover1 from '../../data/cover2.png'
import avatar from '../../data/avatar.jpg';
import { getDataDashboard } from "../../lib/userFetch";
const ProfileHeader = () => {
    const [mahasiswa, setMahasiswa] = useState("");
    useEffect(()=>{
        const getInfoMahasiswa = async () => {
            try {
                const response = await getDataDashboard("/mahasiswa");
                if(response){
                    setMahasiswa(response);
                }
                console.log("mahasiswa : ",JSON.stringify(response));
            } catch (error) {
            console.error('Error fetching mahasiswa data:', error);
            }
        };
        getInfoMahasiswa();
    }, []);

  return (
    <div>
        <div className='flex justify-center'>
            {/* Header Image */}
            <div className='relative flex w-full justify-center'>
                <img className='h-32 w-full object-none' src={cover1} alt="cover" />
                <div className='absolute -bottom-10'>
                    <Flex className='absolute -right-1.5 -bottom-1.5' gap="small" wrap="wrap">
                        <Progress strokeColor={"#fb923c"} type="circle" percent={40} size={109} format={() => ''}/>
                    </Flex>
                    <img className='h-24 rounded-full' src={mahasiswa.profileUrl ? mahasiswa.profileUrl : avatar} alt="Avatar" />
                </div>
            </div>
        </div>
        <div className='text-center mt-14'>
            <p className='font-bold text-xl'>{mahasiswa.nama}</p>
            <p>{mahasiswa.bio}</p>
            <div className='justify-center text-slate-500 flex gap-2 text-sm'>
                <p>@{mahasiswa.username}</p>
                <span>•</span>
                <p>Tanggal gabung</p>
                <span>•</span>
                <p>Tanggal Lahir</p>
            </div>
        </div>
        <div className='flex gap-6 justify-center mt-6 mb-6'> 
            <div className='text-center'>
                <p className='font-bold text-sm'>3521</p>
                <p className='text-slate-500 text-xs font-semibold'>Followers</p>
            </div>
            <div className='text-center'>
                <p className='font-bold text-sm'>125</p>
                <p className='text-slate-500 text-xs font-semibold'>Following</p>
            </div>
            <Link to="/profile/edit" className='bg-white hover:bg-slate-200 text-black border-2 border-slate-500 font-bold py-1 px-4 rounded-lg'>Edit Profile</Link>
        </div>
        <hr />
    </div>
  )
}

export default ProfileHeader