import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaKey } from "react-icons/fa";

const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your login logic, like sending the form data to the server
        console.log(formData);
        // Assuming login is successful, call the onLogin function passed as props
        onLogin();
        navigate('/');
    };

    return (
        <>
        <body class='bg-orange-100 min-h-screen'>
            <div className='flex pt-5 px-10 pb-5'>
                <h1 className='font-bold text-4xl'>Colle.</h1>
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
                        <div className="mt-8 mb-6">
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
                        <div className="mb-12">
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
                    </form>
                </div>  
            </div>
        </body>
        </>
    );
};

export default LoginPage;
