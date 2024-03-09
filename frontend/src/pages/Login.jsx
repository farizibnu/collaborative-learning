import React, { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
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
