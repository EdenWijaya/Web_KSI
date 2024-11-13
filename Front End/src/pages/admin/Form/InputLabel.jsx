import React from "react";

const InputLabel = ({
  label,
  name,
  type = "text",
  placeholder,
  variant,
  onChange,
  className,
  value = "",
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-bold text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none ${variant} ${className}`}
        autoComplete="off"
        defaultValue={value}
        required
      />
    </div>
  );
};

export default InputLabel;
