/* eslint-disable react/prop-types */
import {  ErrorMessage } from 'formik';

const TextareaInput = ({ field,label,meta, ...props }) => {
    const borderColor = meta.error && meta.touched ? "border-red-500" : "";
    return (
        <div className="mb-4">
            <label htmlFor={props.id || props.name} className="block text-gray-700 mb-2">
                {label}
            </label>
            <textarea
                className={`w-full h-40 px-3 py-2 text-base placeholder-gray-600 rounded-lg focus:shadow-outline border ${borderColor}`}
                {...field}
                {...props}
            />
            <ErrorMessage name={field.name} component="div" className="text-red-700 text-xs mt-1" />
        </div>
    );
};

export default TextareaInput;
