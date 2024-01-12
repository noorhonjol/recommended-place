/* eslint-disable react/prop-types */
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { Field } from 'formik';

export default function InputField({ name, label, placeholder }) {
return (
    <Field name={name} >
        {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel>{label}</FormLabel>
            <Input {...field} placeholder={placeholder || name} />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
        )}
    </Field>
);
}
