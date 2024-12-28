import React from "react";
import MapboxMap from "../../Components/MapBox";
import Drawer from "./components/Drawer";
import MapHeader from "./components/MapHeader";
import { useLocation } from "react-router-dom";

function DashBoard() {
  const location = useLocation();
  const userId = location.state?.userId || null;
  return (
    <div className="flex flex-col gap-x-3 w-full h-screen">
      <MapHeader />
      <div className="flex w-full">
        <Drawer />
        <MapboxMap userId={userId} />
      </div>
    </div>
  );
}

export default DashBoard;
