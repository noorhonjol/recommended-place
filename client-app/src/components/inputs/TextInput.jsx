/* eslint-disable react/prop-types */
import {  ErrorMessage } from 'formik';

const TextInput = ({field,meta, label, ...props }) => {
    const borderColor = meta.error && meta.touched ? "border-red-500" : "";
    return (
        <div className="mb-4">
            <label htmlFor={props.id || props.name} className="block text-gray-700 mb-2">
                {label}
            </label>
            <input
                type="text"
                className={`w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline ${borderColor}`}
                {...field}
                {...props}
            />
            <ErrorMessage name={field.name} component="div" className="text-red-700 text-xs mt-1" />
        </div>
    );
};

export default TextInput;
