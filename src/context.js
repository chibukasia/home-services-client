import React, {createContext, useState} from 'react';

const AppContext = createContext();

function ContextProvider({children}){
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([])
    const [services, setServices] = useState([])
    const [terms, setTerms] = useState([])
    const [userServices, setUserServices] = useState([])
    const [appointmentOrders, setAppointmentOrders] = useState([])
    const value={
        user,
        setUser,
        services, 
        setServices,
        userServices,
        setUserServices, 
        terms,
        setTerms,
        appointmentOrders,
        setAppointmentOrders,
        users,
        setUsers
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextProvider}
