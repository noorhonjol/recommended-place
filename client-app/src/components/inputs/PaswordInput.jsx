/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { ErrorMessage } from 'formik';

const PasswordInput = ({ field,label,meta, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const inputType = showPassword ? 'text' : 'password';
    const borderColor = meta.error && meta.touched ? "border-red-500" : "";

    return (
        <div className="mb-4">
            <label htmlFor={props.id || props.name} className="block text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative">
                <input
                    type={inputType}
                    className={`w-full h-10 px-3 text-base placeholder-gray-600 rounded-lg focus:shadow-outline border ${borderColor}`}
                    {...field}
                    {...props}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 hover:text-gray-800 focus:text-gray-800"
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            <ErrorMessage name={field.name} component="div" className="text-red-700 text-xs mt-1" />
        </div>
    );
};

export default PasswordInput;
