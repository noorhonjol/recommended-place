import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const ProfileEditSchema = Yup.object().shape({
    userName: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
});

const ProfileEditForm = ({ userData, onSave, onCancel }) => {

    return (
        <Formik
            initialValues={userData}
            validationSchema={ProfileEditSchema}
            onSubmit={(values, { setSubmitting }) => {
                onSave(values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <FormControl>
                        <FormLabel>User Name</FormLabel>
                        <Field as={Input} name="userName" />
                        <ErrorMessage name="userName" component="div" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Field as={Input} name="password" type="password" />
                        <ErrorMessage name="password" component="div" />
                    </FormControl>

                    <Stack direction={"row"} py="4">
                        <Button type="submit" disabled={isSubmitting}>
                            Save
                        </Button>
                        <Button onClick={onCancel}>Cancel</Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};
export default ProfileEditForm