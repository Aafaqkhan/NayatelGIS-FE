import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SettingsModal from "./SettingsModal";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/settingsSlice";
import { useNavigate } from "react-router-dom";

const MapHeader = ({ username, email }) => {
  console.log("useeeer emaaill in map header ::", email);
  console.log("useeeer namee in map header ::", username);

  const [activeTab, setActiveTab] = useState("View");

  const tabs = ["View", "Add", "Tools", "Help"];

  const [activeIcon, setActiveIcon] = useState(null);

  const icons = ["mask_group", "map_pin", "ruler", "sun"];

  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onProfileClick = () => {
    setIsProfileClicked(!isProfileClicked);
    dispatch(openModal());
  };

  const onLogoutClick = () => {
    setIsProfileClicked(false);
    navigate("/");
  };

  return (
    <div className="mt-3 ml-4 mr-4">
      {/* Header Section */}
      <header className="flex items-center justify-between bg-white py-1">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center">
          <img
            src="src/assets/nayatel_logo.png"
            alt="Nayatel Logo"
            className="h-5 w-auto"
          />
          <h2 className="ml-4 text-xl font-semibold underline text-[#284E93] cursor-pointer">
            Planning
          </h2>
        </div>

        {/* Right Section: Notification and User Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}

          <div className="cursor-pointer h-8 w-8 border border-gray-300 rounded-md p-2">
            <img src="src/assets/icons/bell.png" />
          </div>

          {/* User Profile */}
          <div
            // onClick={() => dispatch(openModal())}
            onClick={() => setIsProfileClicked(!isProfileClicked)}
            className="cursor-pointer flex items-center space-x-2"
          >
            <img
              src="src/assets/icons/dp.png"
              alt="User Profile"
              className="w-8 h-8"
            />
            <div>
              <p className="text-sm font-medium text-[#284E93]">
                {username || "John"}
              </p>
              <p className="text-xs text-[#284E93]">
                {email || "john@example.com"}
              </p>
            </div>
          </div>
        </div>
      </header>

      {isProfileClicked && (
        <div className="absolute right-4 top-16 z-10 w-[171px] bg-white border border-gray-300 rounded-lg">
          <div className="flex m-2 cursor-pointer" onClick={onProfileClick}>
            <img
              className="h-5 pr-2"
              src="src/assets/icons/settings.png"
              alt="Google Map Icon"
            />
            <p className="text-[#284E93]">Settings</p>
          </div>
          <div className="h-[1px] bg-gray-300"> </div>
          <div
            className="flex m-2 cursor-pointer"
            // onClick={console.log("logout clickeddd :: ")}
            onClick={onLogoutClick}
          >
            <img
              className="h-5 pr-2"
              src="src/assets/icons/logout.png"
              alt="Google Map Icon"
            />
            <p className="text-[#284E93]">Log out</p>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <nav className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-[2px] px-2 rounded-sm text-[13px] ${
              activeTab === tab
                ? "bg-[#284E93] text-white"
                : "text-gray-500 hover:text-blue-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Search Bar and Buttons Row */}
      <div className="mt-2 mb-2 flex items-center justify-between bg-gray-100 p-1 rounded-md">
        {/* Left Section: Search Bar and Icon Buttons */}
        <div className="flex items-center space-x-2">
          {/* Search Bar */}
          <SearchBar placeholder="Search..." />

          {/* Icon Buttons */}
          {icons.map((icon, index) => (
            <button
              key={index}
              onClick={() => setActiveIcon(icon)}
              className={`flex items-center justify-center w-12 h-8 rounded-lg focus:outline-none ${
                activeIcon === icon
                  ? "bg-gray-200  text-white"
                  : "bg-gray-100 text-gray-500 hover:text-blue-700"
              }`}
            >
              <img
                src={`src/assets/icons/${icon}.png`}
                alt={`${icon} Icon`}
                className={`h-5 w-5 ${
                  activeIcon === icon ? "text-white" : "text-gray-500"
                }`} // Change icon color based on active state
              />
            </button>
          ))}
        </div>

        {/* Right Section: Filters and Map Buttons */}
        <div className="flex space-x-2">
          {/* Filters Button */}

          {/* View Google Map Button */}
          <button className="flex items-center space-x-2 px-3 py-[6px] bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none">
            <img
              className="h-5"
              src="src/assets/icons/google_map.png"
              alt="Google Map Icon"
            />
            <span className="text-sm text-[#284E93CC]">Google Map</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-[6px] bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none">
            <img
              className="h-3"
              src="src/assets/icons/filter.png"
              alt="Filters Icon"
            />
            <span className="text-sm text-[#284E93CC]">Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapHeader;
