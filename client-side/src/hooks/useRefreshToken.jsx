import  { useContext } from 'react'
import { AuthContext } from '../AuthContext'

import api from '../api';

export default function useRefreshToken() {
    
    const {updateAccessToken}=useContext(AuthContext);


    const refresh=async ()=>{

        const response=await api.post('auth/refresh');

        const {accessToken}=response.data;


        updateAccessToken(accessToken)


        return accessToken;
    }


    return refresh
}
