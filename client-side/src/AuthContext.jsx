/* eslint-disable react/prop-types */

import  { useState, createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [accessToken, setAccessToken] = useState(null);

    const [userInfo,setUserInfo]=useState(null)
        
    const updateAccessToken = (newToken) => {
        setAccessToken(newToken);
    };
    
    const updateUserInfo = (userInfo) => {
        setUserInfo(userInfo);
    };



    return (
        <AuthContext.Provider value={{ accessToken,userInfo, updateAccessToken, updateUserInfo}}>
            {children}
        </AuthContext.Provider>
    );
};
