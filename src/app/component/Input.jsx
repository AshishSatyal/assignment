import React from "react";

const Input = ({ label, type, placeholder, id, name, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className='font-semibold'>
        {label}
      </label>
      <input
        className='focus:border-gray-800 px-2 border border-black rounded-xl w-[18rem] lg:w-[22rem] h-10'
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        {...props}
      />
    </div>
  );
};

export default Input;
