import { Button, Stack } from '@chakra-ui/react'
import FormContainer from './FormContainer'
import InputField from '../InputField/InputField'
import * as Yup from 'yup'
import useFetchData from "../../hooks/useFetchData"
// import api from '../../api'
import { useMutation } from 'react-query'
import { Field } from 'formik'
const initialValues = {
    title: '',
    content: '',
    // imageUrl:''
    file: '',
}
const validationSchema = Yup.object(
    {
        title: Yup.string().required('Required'),
        content: Yup.string().required('Required'),
        // imageUrl:Yup.string().url().required('Required')
    }
)
export default function AddPostForm() {
    //title, content, imageUrl

    const api = useFetchData();

    const mutation = useMutation(
        async ({ values }) => {
            console.log(values)
            const response = await api.post('post/add', values,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        {
            onSuccess: (data, { actions }) => {
                actions.setSubmitting(false);
            },
            onError: (error, { actions }) => {

                if (error.response.status === 400) {
                    const errors = error.response.data.error;
                    actions.setStatus(errors)

                }
                if (error.response.status === 401) {
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
        <FormContainer initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>

            <Stack spacing="6">


                <InputField name="title" type="text" label="title" id="title" />
                <InputField name="content" type="text" label="content" id="content" />

                <Field>
                    {({ field, form }) =>(
                        <input
                            id="file"
                            name="file"
                            type="file"
                            onChange={(event) => {
                                form.setFieldValue("file",event.currentTarget.files[0]);
                            }}
                        />)
                    }
                </Field>

                <Button type='submit'>add</Button>

            </Stack>
        </FormContainer>
    )
}
