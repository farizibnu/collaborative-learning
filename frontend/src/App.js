import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from  "react-router-dom";
import { FiSettings }  from 'react-icons/fi';
import {Sidebar, Button, Footer, Header, Navbar, Notification, UserProfile} from './components';
import {Profile, Home} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css'

const App = () => {
    const activeMenu = true;
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative'>
                    { activeMenu ? (
                        <div className='w-72 fixed sidebar bg-white'>
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className='w-0'>
                            <Sidebar/>
                        </div>
                    )}
                    <div className={
                        `bg-main-bg min-h-screen md:ml-72 w-full 
                        ${activeMenu ? ' md:ml-72 '
                        : 'bg-main-bg flex-2 w-full min-h-screen'}`
                        
                    }>
                        <div className='fixed md:static bg-white navbar w-full'>
                            <Navbar/>
                        </div>


                        <div>
                            <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/tanyajawab' element="Tanya Jawab"/>
                                <Route path='/cariteman' element="Cari Teman"/>
                                <Route path='/quiz' element="Quiz"/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App