import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMenu } from "../../../store/menuSlice";

const Drawer = () => {
  const dispatch = useDispatch();

  const selectedMenu = useSelector((state) => state.menu.selectedMenu);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuClick = (item) => {
    dispatch(selectMenu(item));
  };

  const menuItems = [
    {
      id: 1,
      icon: "src/assets/icons/overlay.png",
      title: "Untitled overlay 1",
      subItems: [],
    },
    {
      id: 2,
      icon: "src/assets/icons/overlay.png",
      title: "Untitled overlay 2",
      subItems: ["Employees", "Users", "Departments, Roles and Permission"],
    },
    {
      id: 3,
      icon: "src/assets/icons/overlay.png",
      title: "Untitled overlay 3",
      subItems: ["Global", "Operator Areas"],
    },
    {
      id: 4,
      icon: "src/assets/icons/overlay.png",
      title: "Untitled overlay",
      subItems: [],
    },
    {
      id: 5,
      icon: "src/assets/icons/overlay.png",
      title: "Untitled overlay",
      subItems: [],
    },
    {
      id: 6,
      icon: "src/assets/icons/overlay.png",
      title: "Untitled overlay",
      subItems: [],
    },
    {
      id: 7,
      icon: "src/assets/icons/overlay.png",
      title: "Untitled overlay",
      subItems: [],
    },
    {
      id: 8,
      icon: "src/assets/icons/overlay.png",
      title: "Untitled overlay",
      subItems: [],
    },
  ];

  return (
    <div className="h-screen w-80 border-r border-gray-200">
      <div className="border-b border-gray-200"></div>

      {/* Icons Row */}
      <div className="flex justify-end space-x-4 py-3 mr-2">
        {/* Folder Icon */}
        <button className="flex items-center justify-center w-4 h-4">
          <img
            src="src/assets/icons/folder.png"
            alt="Folder Icon"
            className=""
          />
        </button>

        {/* Plus Icon */}
        <button className="flex items-center justify-center w-3 h-3 mt-[2px]">
          <img src="src/assets/icons/plus.png" alt="Plus Icon" className=" " />
        </button>

        {/* Options Icon */}
        <button className="flex items-center justify-center w-4 h-4">
          <img
            src="src/assets/icons/options.png"
            alt="Options Icon"
            className=" "
          />
        </button>
      </div>

      <div className="border-b border-gray-100"></div>
      <ul>
        {/* Main Menu Items */}
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`pl-1 pr-1 ml-2 mr-2 rounded-md  ${
              selectedMenu?.id === item.id ? "bg-[#284E93]" : ""
            }`}
          >
            <div
              className={`flex items-center cursor-pointer p-1 mb-1 rounded ${
                selectedMenu?.id === item.id ? "" : "hover:bg-blue-100"
              }`}
              onClick={() => handleMenuClick(item)}
              // onClick={() => toggleMenu(item.id)}
            >
              <div className="h-[15px] w-[15px] mr-3">
                <img
                  className={`h-[12px] w-[12px] ${
                    selectedMenu?.id === item.id
                      ? "filter brightness-0 invert"
                      : ""
                  }`}
                  src={item.icon}
                />
              </div>
              <span
                className={`text-[14px] ${
                  selectedMenu?.id === item.id ? "text-white" : "text-[#284E93]"
                }`}
              >
                {item.title}
              </span>

              {selectedMenu?.id === item.id && (
                <div className="flex ml-auto">
                  {/* Plus Icon */}
                  <button className="flex items-center justify-center w-4 h-4">
                    <img
                      src="src/assets/icons/eye.png"
                      alt="Plus Icon"
                      className="filter invert brightness-0"
                    />
                  </button>

                  {/* Options Icon */}
                  <button className="flex items-center justify-center w-4 h-4">
                    <img
                      src="src/assets/icons/options.png"
                      alt="Options Icon"
                      className="filter invert brightness-0"
                    />
                  </button>
                </div>
              )}

              {/* <span className="text-[#284E93] ml-auto">
                {  selectedMenu?.id === item.id ? (
                  <ChevronDownIcon
                    className={`h-5 w-5 ${
                        selectedMenu?.id === item.id ? "text-white" : "text-[#284E93]"
                    }`}
                  />
                ) : (
                  <ChevronRightIcon className="h-5 w-5 text-[#284E93]" />
                )}
              </span> */}
            </div>

            {/* Sub-Menu Items */}
            {/* {  selectedMenu?.id === item.id && (
              <ul className="ml-7 mt-2 relative">
                <div className="absolute left-[-12px] top-0 h-full border-l border-white"></div>
                {item.subItems.map((subItem, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer p-1 text-[14px] ${
                        selectedMenu?.id === item.id
                        ? "text-white"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
