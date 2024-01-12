import { Button, Stack } from '@chakra-ui/react'
import FormContainer from './FormContainer'
import InputField from '../InputField/InputField'
import { PasswordField } from '../InputField/PasswordField'
import * as Yup from 'yup'
const initialValues = {
    email: '',
    password: '',
}
const validationSchema = Yup.object(
    {
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    }
)
export default function RegisterForm() {

    return (
        <FormContainer initialValues={initialValues} onSubmit={(values) => { console.log(values) }} validationSchema={validationSchema}>
            <Stack spacing="6">
                <Stack spacing="5">
                    <InputField name="email" type="text" label="Email" id="email" />
                    <PasswordField />
                </Stack>
                
                <Button type='submit'>Sign in</Button>

            </Stack>
        </FormContainer>
    )
}
