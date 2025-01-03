import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { useDispatch } from "react-redux";
import { setCityName } from "../../../store/mapSlice";

const SearchBar = ({
  label,
  value: propValue = "", // Default value if not provided
  onChange = () => {}, // No-op function as default
  placeholder,
}) => {
  const dispatch = useDispatch();
  const accessToken =
    "pk.eyJ1IjoiYmFzaXRyaWF6MzgxNSIsImEiOiJjbTRxcXB2aWoxNHBjMmpvdDFyYWNlNmRnIn0.-4GiskmuJLZ62VxH0cDTYw";

  const [localValue, setLocalValue] = useState(propValue);
  const [suggestions, setSuggestions] = useState([]);
  const geocodingClient = mbxGeocoding({ accessToken });

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setLocalValue(inputValue); // Update the local value
    onChange(e); // Trigger the parent onChange if provided

    if (inputValue.length > 2) {
      try {
        const response = await geocodingClient
          .forwardGeocode({
            query: inputValue,
            autocomplete: true,
            limit: 5,
            bbox: [60.8722, 23.6345, 77.8375, 37.0841], // Bounding box for Pakistan
            proximity: [69.3451, 30.3753], // Center of Pakistan
          })
          .send();

        setSuggestions(response.body.features);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const selectedValue = suggestion.place_name;
    setLocalValue(selectedValue); // Update the local value
    onChange({ target: { value: selectedValue } }); // Mock event for the parent
    setSuggestions([]);

    console.log("Selected address 1122:", selectedValue);
    dispatch(setCityName(selectedValue));
  };

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
          type="text"
          value={localValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="placeholder-[#284E93CC] h-[35px] w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
        />

        {/* Search Icon */}
        <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#284E93CC]">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </span>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.place_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
