import React, {createContext, useState} from 'react';

const AppContext = createContext();

function ContextProvider({children}){
    const [user, setUser] = useState(null);
    const [services, setServices] = useState([])
    const [userServices, setUserServices] = useState([])
    const value={
        user,
        setUser,
        services, 
        setServices,
        userServices,
        setUserServices, 
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextProvider}
