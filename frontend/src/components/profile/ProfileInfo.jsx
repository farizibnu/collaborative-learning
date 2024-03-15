import React, {useState, useEffect } from "react"
import axios from "axios";
import Cookies from 'js-cookie';
import { getDataDashboard } from "../../lib/userFetch";
const ProfileInfo = () => {
  const [mahasiswa, setMahasiswa] = useState("");

  useEffect(()=>{
    const getInfoMahasiswa = async () => {
      try {
          const response = await getDataDashboard("/mahasiswa");
          setMahasiswa(response);
      } catch (error) {
      console.error('Error fetching mahasiswa data:', error);
      }
  };
  getInfoMahasiswa();
  }, []);

  return (
    <div className='bg-white p-6 m-5 w-3/5'>
        <p className='font-bold'>About</p>
        {mahasiswa && (
          <>
          <p>{mahasiswa.about}</p>
        <div className='w-1/2 leading-loose'>
            <p className='font-bold mt-6'>General Information</p>
            <p className='flex justify-between'>Asal Kampus<div></div>{mahasiswa.kampus}</p>
            <p className='flex justify-between'>Jurusan<div></div>{mahasiswa.jurusan}</p>
            <p className='flex justify-between'>Semester<div></div>{mahasiswa.semester}</p>
        </div>
        </>
        )}
        
    </div>
  )
}

export default ProfileInfo