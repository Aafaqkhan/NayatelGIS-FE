import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/settingsSlice";

const SettingsModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.settings.isModalOpen);

  const { profileInfo } = useSelector((state) => state.profile);

  // if (!isModalOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center
      ${isModalOpen ? "bg-gray-800 bg-opacity-50" : "hidden"}`}
    >
      <div className="bg-white w-[800px] rounded-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-2xl font-semibold text-[#284E93]">Settings</h2>
          <button
            onClick={() => dispatch(closeModal())}
            // onClick={() => setIsOpen(false)}
            className="text-[#284E93] text-lg"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 gap-4 mt-3">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-[#284E93]">Name</label>
            <input
              readOnly
              type="text"
              value={profileInfo?.username || ""}
              className="text-[#284E93] font-medium rounded-lg mt-1 block w-full border border-gray-300 focus:ring-[#284E93] focus:border-[#284E93] focus:outline-none  pl-3 p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#284E93]">Email</label>
            <input
              readOnly
              type="email"
              value={profileInfo?.email || ""}
              className="mt-1 block w-full text-[#284E93] font-medium rounded-lg border border-gray-300 focus:ring-[#284E93] focus:border-[#284E93] focus:outline-none pl-3 p-2"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm font-medium text-[#284E93]">
              Phone Number
            </label>
            <input
              readOnly
              type="text"
              value="Executive"
              className=" mt-1 block w-full text-[#284E93] font-medium rounded-lg border border-gray-300 focus:ring-[#284E93] focus:border-[#284E93] focus:outline-none pl-3 p-2"
            />
          </div>

          {/* Department */}
          <div>
            <label className="text-sm font-medium text-[#284E93]">
              Department
            </label>
            <input
              readOnly
              type="text"
              value="Customer Care"
              className="mt-1 block w-full text-[#284E93] font-medium rounded-lg border border-gray-300 focus:ring-[#284E93] focus:border-[#284E93] focus:outline-none pl-3 p-2"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="text-sm font-medium text-[#284E93]">
              Designation
            </label>
            <input
              readOnly
              type="text"
              value={profileInfo?.designation || ""}
              className="mt-1 block w-full text-[#284E93] font-medium rounded-lg border border-gray-300 focus:ring-[#284E93] focus:border-[#284E93] focus:outline-none pl-3 p-2"
            />
          </div>

          {/* Sub-Section */}
          <div>
            <label className="text-sm font-medium text-[#284E93]">
              Sub-Section
            </label>
            <input
              readOnly
              type="text"
              value="I-8 Team"
              className="mt-1 block w-full text-[#284E93] font-medium rounded-lg border border-gray-300 focus:ring-[#284E93] focus:border-[#284E93] focus:outline-none pl-3 p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
