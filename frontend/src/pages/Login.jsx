import React, { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import Cookies from 'universal-cookie';
import axios from 'axios';

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
            const response = await fetch('http://localhost:8080/mahasiswa/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

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
            const dummy_user = {
                "mhs_id": -1,
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
            axios.post("http://localhost:8080/mahasiswa", dummy_user, {
                headers: {
                    Accept: "*/*",
                    Authorization: `Bearer ${codeResponse["access_token"]}`,
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            .then((response) => {
                console.log("ga error", JSON.stringify(response.data));
                // Set cookie untuk userId setelah berhasil login
                cookies.set('userId', response.data.id_mhs, { path: '/', maxAge: 3600 });
                console.log(response.data.id_mhs);
                onLogin();
                navigate("/");
            })
            .catch((err) => console.log("error ges", JSON.stringify(err)));
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        console.log(`user : ${JSON.stringify(user)}`);
    }, [user])

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <p className='text-3xl mb-8 font-bold'>Login Page</p>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Log In
                    </button>
                    <Link to={'/register'}>
                        <p className='underline font-semibold text-sm'>Doesn't have an account? Register here</p>
                    </Link>
                </div>
            </form>
            <div className='pt-5'>
                    <button onClick={login}>Sign in with Google 🚀 </button> 
            </div>
        </div>
    );
};

export default LoginPage;
