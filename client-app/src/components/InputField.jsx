/* eslint-disable react/prop-types */

import { useField } from "formik";
import PasswordInput from "./inputs/PaswordInput";
import TextInput from "./inputs/TextInput";
import TextareaInput from "./inputs/TextareaInput";

const InputField = ({ type, ...props }) => {
    const [field,meta]=useField({type,...props});
    switch (type) {
        case 'password':
        return <PasswordInput {...props} field={field} meta={meta} />;
        case 'textarea':
        return <TextareaInput {...props} field={field} meta={meta} />;
        default:
        return <TextInput {...props}  field={field} meta={meta} />;
    }
};

export default InputField;
