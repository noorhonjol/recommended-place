import {
    Box,
    Container,
    Stack
} from '@chakra-ui/react'
import LoginForm from './Components/Forms/LoginForm'
import AuthHeader from './Components/AuthHeader'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

export const LoginPage = () => {
    
    const {userInfo}=useContext(AuthContext);
    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            {userInfo &&<Navigate to="/" replace={true} />}
            <Stack spacing="8">
                <AuthHeader
                    headingText="Log in to your account"
                    linkText="Don't have an account?"
                    linkHref="/register"
                />
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg.surface' }}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <LoginForm />
                </Box>
            </Stack>
        </Container>
    )
}