import React, {useState, useEffect } from "react"
import axios from "axios";
import Cookies from 'js-cookie';
import { getDataDashboard } from "../../lib/fetchData";
const ProfileInfo = () => {
  const [mahasiswa, setMahasiswa] = useState("");
  const UserId = Cookies.get('userId');
  const token = Cookies.get('user_token');

  useEffect(() => {
    const getInfoMahasiswa = async () => {
        try {
            let response;
            if (token === "null") {
                response = await axios.get(`http://localhost:8080/mahasiswa/${UserId}`);
            } else {
                response = await getDataDashboard("/mahasiswa");
            }
            setMahasiswa(response.data || response); // Memperhatikan bahwa ada kasus ketika responsenya langsung object, bukan response.data
            console.log("mahasiswa : ", JSON.stringify(response));
        } catch (error) {
            console.error('Error fetching mahasiswa data:', error);
        }
    };

    getInfoMahasiswa();
  }, [token]); // Perubahan token akan memicu useEffect untuk dijalankan kembali

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