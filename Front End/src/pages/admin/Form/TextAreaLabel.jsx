import React from "react";

const TextAreaLabel = ({
  label,
  name,
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
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
        className={`w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none resize-none ${variant} ${className}`}
      ></textarea>
    </div>
  );
};

export default TextAreaLabel;
