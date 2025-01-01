import React, { useState, useEffect } from "react";
import MapboxMap from "../../Components/MapBox";
import Drawer from "./components/Drawer";
import MapHeader from "./components/MapHeader";
import { useLocation } from "react-router-dom";
import profileApi from "../../services/api/profileInfo";

function DashBoard() {
  const location = useLocation();
  const userId = location.state?.userId || null;

  const [username, setUsername] = useState("John");
  const [email, setEmail] = useState("John@gmail.com");
  const [cityName, setCityName] = useState("Karachi");

  const getUserInfo = async () => {
    try {
      const response = await profileApi.getProfileInfo(String(userId));
      console.log("profile info res :: ", response.city.name);

      if (response !== null) {
        setUsername(response.username);
        setEmail(response.email);
        setCityName(response.city.name);
      } else {
        console.error("City data not found in API response");
      }
    } catch (error) {
      console.error("Error fetching city name from API:", error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="flex flex-col gap-x-3 w-full h-screen">
      <MapHeader username={username} email={email} />
      <div className="flex w-full">
        <Drawer />
        <MapboxMap cityName={cityName} />
      </div>
    </div>
  );
}

export default DashBoard;
