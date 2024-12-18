import React from "react";
import MapboxMap from "../../Components/MapBox";
import Drawer from "./components/Drawer";
import MapHeader from "./components/MapHeader";

function DashBoard() {
  return (
    // <h1>DashBoard</h1>
    <div className="flex flex-col gap-x-3 w-full h-screen">
      <MapHeader />
      <div className="flex w-full">
        <Drawer />
        <MapboxMap />
      </div>
    </div>
  );
}

export default DashBoard;
