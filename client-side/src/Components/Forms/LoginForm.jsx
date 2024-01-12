
import FormContainer from './FormContainer'
import { Button, Checkbox, HStack,  Stack } from '@chakra-ui/react'
import { PasswordField } from '../InputField/PasswordField'
import InputField from '../InputField/InputField'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { AuthContext } from '../../AuthContext'
import { useContext } from 'react'
import api from '../../api'
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'

const validationSchema=Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
})

export default function LoginForm() {

    const navigate=useNavigate();
    const {updateAccessToken,updateUserInfo}=useContext(AuthContext);
    
    const initialValues = {
        username: '',
        password: '',
    }
    const mutation = useMutation(
        async ({ values }) => {
            const response = await api.post('auth/login', values);

            return response.data;
        },
        {
            onSuccess: (data, { actions }) => {
                const { user } = jwtDecode(data.accessToken);
                
                updateUserInfo(user);

                updateAccessToken(data.accessToken);
                
                navigate('/');
                
                actions.setSubmitting(false);
            },
            onError: (error, {  actions }) => {
                
                if(error.response.status===400){
                    const errors = error.response.data.error;
                    actions.setStatus(errors)

                }
                if(error.response.status===401){
                    actions.setStatus("username or password is wrong")
                }
                actions.setSubmitting(false);

            }
        }
    );

    const handleSubmit = (values, actions) => {
        mutation.mutate({ values, actions });
    };

    return (
        <FormContainer initialValues={initialValues}  
            onSubmit={handleSubmit} 
            validationSchema={validationSchema}>

            <Stack spacing="6">
                <Stack spacing="5">
                    <InputField name="username" type="text" label="Email" id="email"/>
                    <PasswordField />
                </Stack>
                <HStack justify="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button variant="text" size="sm">
                        Forgot password?
                    </Button>
                </HStack>
                <Button type='submit' isLoading={mutation.isLoading}>Sign in</Button>
            </Stack>
        </FormContainer>
    )
}
