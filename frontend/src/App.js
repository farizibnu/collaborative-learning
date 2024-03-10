import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from  "react-router-dom";
// import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"
import { FiSettings }  from 'react-icons/fi';
import {Sidebar, Button, Footer, Header, Navbar, Notification, UserProfile} from './components';
import {Profile, ProfileEdit, Home, TanyaJawab, Achievement, CariTeman, Quiz, Register, Login, HomeDosen, TEST} from './pages/';

import { useStateContext } from './contexts/ContextProvider';
import { gapi } from "gapi-script";

import './App.css'
import {fetchUserProfile} from './lib/userFetch'
import { GoogleLogin } from '@react-oauth/google';
import {VITE_GOOGLE_AUTH_KEY} from './lib/env';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    // Function to handle login
    const handleLogin = () => {
        // Perform authentication logic here
        // For now, let's assume login is successful
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
    };
    const initializeGapi = () => {
        gapi.client.init({
            clientId: VITE_GOOGLE_AUTH_KEY,
            scope: "",
        });
    };

    useEffect(() => {
        // Move the setUser function here
        const updateUserProfile = () => {
            try {
                const userProfile = fetchUserProfile(user);
                if (!userProfile) {
                    setIsLoggedIn(false);
                } else {
                    setUser(userProfile);
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error('Error updating user profile:', error);
            }
        };

        // Call the function
        updateUserProfile();
    }, []);
        useEffect(() =>{
        // load and init google api scripts
        gapi.load("client:auth2", initializeGapi);
    })

    return (
        <div>
            <BrowserRouter>
                {!isLoggedIn ? (
                    // Show the main app content if not logged in
                    <div className='bg-main-bg min-h-screen'>
                        <Routes>
                            <Route path='/register' element={<Register onLogin={handleLogin} />} />
                            <Route path='/login' element={<Login onLogin={handleLogin} />} />
                            <Route path='*' element={<Navigate to='/login' />} />
                        </Routes>
                    </div>
                ) : (
                    // Show the main app content if logged in
                    <div className='flex relative'>
                        <div className='w-72 fixed sidebar bg-white'>
                            <Sidebar/>
                        </div>
                        <div className='bg-main-bg min-h-screen md:ml-72 w-full'>
                            <div className='fixed md:static bg-white navbar w-full'>
                                <Navbar onLogout={handleLogout} />
                            </div>
                            <div>
                                <Routes>
                                    <Route path='/' element={<Home/>}/>
                                    <Route path='/dosen' element={<HomeDosen/>}/>
                                    <Route path='/profile' element={<Profile />} />
                                    <Route path='/profile/edit' element={<ProfileEdit/>} />
                                    <Route path='/profile/achievement' element={<Achievement/>}/>
                                    <Route path='/tanya-jawab' element={<TanyaJawab/>}/>
                                    <Route path='/cari-teman' element={<CariTeman/>}/>
                                    <Route path='/quiz' element={<Quiz/>}/>
                                    <Route path='/test' element={<TEST/>}/>
                                    {/* Add a default route to redirect to Home if no route matches */}
                                    <Route path='*' element={<Navigate to='/' />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
