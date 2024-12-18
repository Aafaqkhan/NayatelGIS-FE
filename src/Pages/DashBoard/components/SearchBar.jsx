import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Import the search icon from Heroicons

const SearchBar = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="relative w-full">
      {/* Label (optional) */}
      {label && (
        <label className="block font-medium text-black text-sm text-start mb-1">
          {label}
        </label>
      )}

      {/* Input with Search Icon */}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="placeholder-[#284E93CC] h-[35px] w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
        />

        {/* Search Icon */}
        <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#284E93CC]">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
