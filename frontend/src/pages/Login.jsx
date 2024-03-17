import React, { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { loginMahasiswa, setTokenToOther } from '../lib/fetchData';
import { VITE_BACKEND_CTB_URL } from '../lib/env';
import { FaKey } from "react-icons/fa";
import { AiOutlineSlackSquare, AiOutlineLeftSquare } from "react-icons/ai";

const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const cookies = new Cookies();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginMahasiswa(formData);
            console.log(JSON.stringify(response));
            if (response.ok) {
                // Jika login berhasil, lanjutkan ke halaman beranda
                const responseData = await response.json();
                cookies.set('userId', responseData.userId, { path: '/', maxAge: 3600 });
                console.log(responseData);
                onLogin();
                navigate('/');
            } else {
                const responseData = await response.json();
                setError(responseData.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            cookies.set('user_token', codeResponse["access_token"], { path: '/', maxAge: 3600 });
            setUser(codeResponse);
            loginMahasiswa(formData);
            setTokenToOther(codeResponse["access_token"]);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        console.log(`user : ${JSON.stringify(user)}`);
    }, [user])

    return (
        <>
        <body class='bg-orange-100 min-h-screen'>
            <div className='flex pt-5 px-10 pb-5'>
                <AiOutlineSlackSquare style={{ fontSize: '40px' }} /><h1 className='font-extrabold text-4xl'>Colle</h1>
                <Link to="/registerdashboard" className="ml-auto">
                    <button className="bg-orange-400 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
                    Register
                    </button>
                </Link>
            </div>
            
            <p className='flex justify-center text-2xl font-bold my-10'>Login to Account</p>
            <div className="flex justify-center">
                <div className='bg-white border rounded-lg p-10'>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm">
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Email*"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password*"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center">
                                <FaKey className="mr-2 text-yellow-500" />
                                <p className='text-xs'>8 character minimum*</p>
                            </div>
                            <div className="flex items-center">
                                <FaKey className="mr-2 text-yellow-500" />
                                <p className='text-xs'>One lowercase character*</p>
                            </div>
                            <div className="flex items-center">
                                <FaKey className="mr-2 text-yellow-500" />
                                <p className='text-xs'>One uppercase character*</p>
                            </div>
                            <div className="flex items-center">
                                <FaKey className="mr-2 text-yellow-500" />
                                <p className='text-xs'>One number*</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="outline bg-white hover:bg-orange-300 text-orange-300 hover:text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                            >
                                Log In
                            </button>
                        </div>
                        <hr className='my-6 border-1 border-orange-300' />
                        <div className='border-2 border-orange-300 rounded-xl p-3 text-center text-orange-300 font-bold hover:bg-orange-300 hover:text-white '>
                            <button onClick={login}>Sign in with Google 🚀 </button> 
                        </div>
                    </form>
                </div>  
            </div>
        </body>
        </>
    );
};

export default LoginPage;
