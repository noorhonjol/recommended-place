/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
} from '@chakra-ui/react';
import useFetchData from '../hooks/useFetchData'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const NavLink = ({to, children }) => (
  <Link
    as={RouterNavLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200'
    }}
    to={to}
    >
    {children}
  </Link>
);

function NavBar() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {userInfo}=useContext(AuthContext);
  
  // const navigate=useNavigate()

  const api=useFetchData();
  const handleLogout=async()=>{
    await api.get('auth/logout');
    location.reload()
  }

  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
          <Box as={RouterNavLink} to='/'>Logo</Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink>
            {
              userInfo&&<NavLink to='post'>Add Post</NavLink>
            }
          </HStack>

          <HStack spacing={4}>
            {
              !userInfo?
              <>

                <Button as={RouterNavLink} colorScheme="teal" to='login'>Login</Button>
                <Button as={RouterNavLink} colorScheme="blue" to='register'>Sign Up</Button>
              </>
              :
              <>
                <Link as={RouterNavLink} to="profile">
                  {userInfo?.userName}
                </Link>
                <Button colorScheme="blue" onClick={handleLogout} >logout</Button>
              </>


            }

          </HStack>

        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink>
            
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default NavBar;
