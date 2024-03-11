import React, { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import Cookies from 'universal-cookie';
import axios from 'axios'
const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const cookies = new Cookies();
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            cookies.set('user_token', codeResponse["access_token"], { path: '/',maxAge:3600 });
            setUser(codeResponse);
            const dumy_user = {
                "mhs_id" : -1,
                "nama": "John Doe",
                "username": "john_doe",
                "email": "john.doe@example.com",
                "password": "securepassword",
                "tanggal_lahir": new Date("1990-01-01"),
                "location": "City, Country",
                "about": "I am a student.",
                "kampus": "Example University",
                "jurusan": "Computer Science",
                "semester": 5
              };
            axios.post("http://localhost:8080/mahasiswa",dumy_user,{
                headers:{
                    Accept : "*/*",
                    Authorization : `Bearer ${codeResponse["access_token"]}`,
                    "Content-Type" : "application/json"
                }, withCredentials : true
            })
            .then((response)=>console.log("ga error",JSON.stringify(response.data))).catch((err)=>console.log("error ges",JSON.stringify(err)));
            
            navigate("/");
        },
        onError: (error) => console.log('Login Failed:', error)
      });
    useEffect(()=>{
        console.log(`user : ${JSON.stringify(user)}`);
    },[user])
    

    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={login}>Sign in with Google 🚀 </button>
        </div>
    );
};

export default LoginPage;
