import React,{createContext, useState, useContext} from "react";
export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    return (
        <UserContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}