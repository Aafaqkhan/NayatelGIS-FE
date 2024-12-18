import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#284E93] w-full text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      {label}
    </button>
  );
};

export default Button;
