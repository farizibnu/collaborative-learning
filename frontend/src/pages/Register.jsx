import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaKey } from "react-icons/fa";
import { AiOutlineSlackSquare, AiOutlineLeftSquare } from "react-icons/ai";

const Register = (onLogin) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
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
            const response = await fetch('http://localhost:8080/mahasiswa/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (response.ok) {
                alert('Registration successful!');
                navigate('/login');
            } else {
                setError(responseData.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error registering:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
        <body class='bg-orange-100 min-h-screen'>
            <div className='flex pt-5 px-10 pb-5'>
                <AiOutlineSlackSquare style={{ fontSize: '40px' }} /><h1 className='font-extrabold text-4xl'>Colle</h1>
                <Link to="/logindashboard" className="ml-auto">
                    <button className="bg-orange-400 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
                    Login
                    </button>
                </Link>
            </div>
            
            <p className='flex justify-center text-2xl font-bold my-10'>Create an Account</p>
            <div className="flex justify-center pr-20">
                <div className="md:flex">
                    <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                        <li>
                            <a href="#" className="inline-flex items-center px-4 py-3 text-white bg-orange-400 rounded-tl-xl rounded-br-xl active w-full dark:bg-blue-600" aria-current="page">
                                Student
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inline-flex items-center px-4 py-3 outline text-orange-400 bg-white rounded-tl-xl rounded-br-xl active w-full dark:bg-blue-600" aria-current="page">
                                Lecturer
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='bg-white border rounded-lg p-10'>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm">
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="mb-4">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Username*"
                            />
                        </div>
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
                                Register
                            </button>
                        </div>
                    </form>
                </div>  
            </div>
        </body>
        </>  
    );
}

export default Register