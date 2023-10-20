/* eslint-disable react/prop-types */

import { Formik, Form, ErrorMessage } from 'formik';

const FormContainer = ({initialValues,validationSchema,handleSubmit,children}) => {
    return (
        <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-neutral-700">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({isValid,isSubmitting,errors})=>(
                        <Form>
                            {children}
                            <button

                                type="submit"
                                disabled={isSubmitting&&isValid}
                                className="w-full h-10 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:bg-indigo-700"
                            >
                                Sign In
                            </button>

                            {errors.error && <div>{errors.error}</div>}
                        </Form>
                    
                    )}
            </Formik>
        </div>
    );
};

export default FormContainer;
