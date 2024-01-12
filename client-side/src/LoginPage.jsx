import {
    Box,
    Container,
    Stack
} from '@chakra-ui/react'
import LoginForm from './Components/Forms/LoginForm'
import AuthHeader from './Components/AuthHeader'

export const LoginPage = () => (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
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
                <LoginForm/>
            </Box>
        </Stack>
    </Container>
)