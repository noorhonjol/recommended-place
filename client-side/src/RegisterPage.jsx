
import AuthHeader from './Components/AuthHeader'
import { Box, Container, Stack } from '@chakra-ui/react'
import RegisterForm from './Components/Forms/RegisterForm'

export default function RegisterPage() {
    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <AuthHeader
                    headingText="Sign up for an account"
                    linkText="Already have an account?"
                    linkHref="/login" // Update this with your login page route
                />
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg.surface' }}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <RegisterForm />
                </Box>
                
            </Stack>
        </Container>
    )
}
