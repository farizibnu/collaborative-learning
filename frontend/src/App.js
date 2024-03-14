import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate,useNavigate} from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import { Sidebar, Button, Footer, Header, Navbar, Notification, UserProfile } from './components';
import { Profile, ProfileEdit, Home, TanyaJawab, Achievement, CariTeman, Quiz, Login, Register, HomeDosen, Landing, Landing} from './pages/';
import './App.css'
import {getUserInfo} from './lib/userFetch';
import Cookies from 'universal-cookie';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Add this line for navigation
    const cookies = new Cookies();
    // Function to handle login
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
    };
    useEffect(() => {
        // Move the setUser function here
        const updateUserProfile = async () => {
            try {
                const userProfile = await getUserInfo();
                if (!userProfile) {
                    setIsLoggedIn(false);
                    cookies.remove("user_token");

                } else {
                    setUser(userProfile);
                    setIsLoggedIn(true);
                    navigate('/');
                }
            } catch (error) {
                console.error('Error updating user profile:', error);
            }
        };
        // Call the function
        updateUserProfile();
    }, []);
    //   useEffect(() =>{
    //     // load and init google api scripts
    //     gapi.load("client:auth2", initializeGapi);
    //   },[])
    return (
        <div>
            
                {!isLoggedIn ? (
                    // Show the main app content if not logged in
                    <div className='bg-main-bg min-h-screen'>
                        <Routes>
                            <Route path='/landing' element={<Landing />} />
                            <Route path='/register' element={<Register onLogin={handleLogin} />} />
                            <Route path='/login' element={<Login onLogin={handleLogin} />} />
                            <Route path='*' element={<Navigate to='/landing' />} />
                            <Route path='/landing' element={<Landing/>} />
                        </Routes>
                    </div>
                ) : (
                    // Show the main app content if logged in
                    <div className='flex relative'>
                        <div className='w-72 fixed sidebar bg-white'>
                            <Sidebar />
                        </div>
                        <div className='bg-main-bg min-h-screen md:ml-72 w-full'>
                            <div className='fixed md:static bg-white navbar w-full'>
                                <Navbar onLogout={handleLogout} />
                            </div>
                            <div>
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                    <Route path='/dosen' element={<HomeDosen />} />
                                    <Route path='/profile' element={<Profile />} />
                                    <Route path='/profile/edit' element={<ProfileEdit />} />
                                    <Route path='/profile/achievement' element={<Achievement />} />
                                    <Route path='/tanya-jawab' element={<TanyaJawab />} />
                                    <Route path='/cari-teman' element={<CariTeman />} />
                                    <Route path='/quiz' element={<Quiz />} />
                                    {/* Add a default route to redirect to Home if no route matches */}
                                    <Route path='*' element={<Navigate to='/' />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                )}
            
        </div>
    );
}

export default App;
