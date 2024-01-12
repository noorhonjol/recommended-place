/* eslint-disable react/prop-types */
import { Text } from '@chakra-ui/react';
import { Formik, Form, } from 'formik';

export default function FormContainer({ initialValues, validationSchema, onSubmit, children }) {
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit} 
        >
            {({status})=>(


                <Form>
                    {children}
                    <Text >
                        {status ? status : ''}
                    </Text>
                </Form>

            )}
            
        </Formik>
    );
}
