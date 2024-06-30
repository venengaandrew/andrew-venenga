import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
}
const Input = React.memo(({id, name, label, placeholder, error = false, errorMessage = '', ...props}: InputProps) => {
  return (
    <div className="mt-4 block">
      <label className="mb-3 block" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        className="block w-full rounded-md border-gray-400 py-3 pl-7 pr-12 focus:border-gray-500 sm:text-sm"
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
      />
      {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
    </div>
  );
});
export default Input;
