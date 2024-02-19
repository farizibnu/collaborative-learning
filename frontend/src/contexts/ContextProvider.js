import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const intialState = {
    chat: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ childern }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    return (
        <StateContext.Provider 
        value={{ 
            activeMenu,
            setActiveMenu,
        }}
        >
            {childern}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);