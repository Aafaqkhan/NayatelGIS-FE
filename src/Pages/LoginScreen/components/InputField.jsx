import React from "react";

const InputField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1 text-black text-sm text-start">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-[40px] w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2"
      />
    </div>
  );
};

export default InputField;
