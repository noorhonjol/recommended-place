import { Flex} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/NavBar';
import { useContext, useEffect } from 'react';
import useFetchData from './hooks/useFetchData';
import { useQuery } from 'react-query';
import { AuthContext } from './AuthContext';

export default function MainLayout() {
    const {updateUserInfo,userInfo}=useContext(AuthContext);

    const fetchApi = useFetchData();
    
    const fetchUserData=async()=>{
        const userInfo=await fetchApi.get('auth/userinfo');
        return userInfo.data?.user?.user;
    }
    
    const { data } = useQuery('data-users', fetchUserData);

    useEffect(() => {
        if (!userInfo&&data) {
            updateUserInfo(data);
        }
    }, [data]);

    return (
        <Flex direction="column" minHeight="100vh">
            <Navbar />

            <Flex direction="column" flex="1">
                <Outlet />
            </Flex>

            <footer>
                this is the footer
            </footer>
        </Flex>
    );
}
