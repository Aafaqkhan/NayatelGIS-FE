import React, { useState, useCallback, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector, useDispatch } from "react-redux";
import profileApi from "../services/api/profileInfo";
import { deselectMenu } from "../store/menuSlice";

const MapboxMap = ({ cityName }) => {
  const dispatch = useDispatch();
  const selectedMenu = useSelector((state) => state.menu.selectedMenu);

  const [selectedBase, setSelectedBase] = useState("Base");
  const [selectedPublic1, setSelectedPublic1] = useState("");
  const [selectedPublic2, setSelectedPublic2] = useState("");
  const [layersPanelOpen, setlayersPanelOpen] = useState(false);

  const handleCrossClick = () => {
    dispatch(deselectMenu());
  };

  console.log("selectedMenu :::", selectedMenu);

  const mapboxToken =
    "pk.eyJ1IjoiYmFzaXRyaWF6MzgxNSIsImEiOiJjbTRxcXB2aWoxNHBjMmpvdDFyYWNlNmRnIn0.-4GiskmuJLZ62VxH0cDTYw";

  const getCityCoordinates = useCallback(
    async (city) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxToken}`
        );
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          const { center } = data.features[0];
          const [longitude, latitude] = center;
          setViewport((prevViewport) => ({
            ...prevViewport,
            latitude,
            longitude,
          }));
        } else {
          console.error("City not found!");
        }
      } catch (error) {
        console.error("Error fetching city coordinates:", error);
      }
    },
    [mapboxToken]
  );

  useEffect(() => {
    // Fetch coordinates when the city name changes
    if (cityName || "Karachi") {
      getCityCoordinates(cityName);
    }
  }, [cityName, getCityCoordinates]);

  const [viewport, setViewport] = useState({
    latitude: 33.6995,
    longitude: 73.0363,
    zoom: 10,
  });

  const handleMove = useCallback((newViewport) => {
    setViewport((prevViewport) => {
      if (
        prevViewport.latitude !== newViewport.latitude ||
        prevViewport.longitude !== newViewport.longitude ||
        prevViewport.zoom !== newViewport.zoom
      ) {
        return newViewport;
      }
      return prevViewport;
    });
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Location View Conatiner */}

      {/* <div className="absolute top-5 right-16  ">
        <div className="w-72 bg-white rounded-t-md shadow-md p-4 relative z-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <div className="flex items-center">
                <img
                  className="h-6 w-auto"
                  src="src/assets/icons/map_pin_blue.png"
                />
              </div>
              <h2 className="text-xl font-semibold text-[#284E93]">
                Islamabad
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-[#284E93]">
                <img
                  src="src/assets/icons/options.png"
                  alt="Options"
                  className="h-5 w-5 object-contain"
                />
              </button>
              <button className="text-[#284E93] font-bold text-lg">✕</button>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <img src="src/assets/images/isl.png" />
          </div>

          <div className="flex space-x-3 mb-2">
            <div className="h-12 w-12">
              <img className="" src="src/assets/icons/map_pin_blue.png" />
            </div>
            <p className="text-sm text-[#284E93]">
              Main Grand Trunk Rd, Defense Housing Authority, Sector F DHA Phase
              II, Islamabad, 44000
            </p>
          </div>

          <button className="justify-center w-full flex items-center space-x-5 px-3 py-[6px] bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none">
            <img
              className="h-5"
              src="src/assets/icons/google_map.png"
              alt="Google Map Icon"
            />
            <span className="text-sm text-[#284E93CC]">View on Google Map</span>
          </button>
        </div>
      </div> */}

      {/* untititled overlay container */}
      {selectedMenu && (
        <div className="absolute top-5 right-16  ">
          <div className="w-72 bg-white rounded-t-md shadow-md p-4 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#284E93]">
                {selectedMenu?.title}
              </h2>
              <div className="flex items-center gap-2">
                <button className="text-[#284E93]">
                  <img
                    src="src/assets/icons/options.png"
                    alt="Options"
                    className="h-5 w-5 object-contain"
                  />
                </button>
                <button
                  onClick={handleCrossClick}
                  className="text-[#284E93] font-bold text-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="text-[#284E93]">
                <img
                  src="src/assets/icons/drop.png"
                  alt="Options"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div className="w-full h-1 mx-4 bg-gray-200 rounded">
                <div className="h-1 bg-[#284E93] w-1/3 rounded"></div>
              </div>
              <div className="text-[#284E93]">
                <img
                  src="src/assets/icons/drop_fill.png"
                  alt="Options"
                  className="h-6 w-6 object-contain"
                />
              </div>
            </div>

            <div className="mb-2">
              <p className="text-[#284E93] font-semibold">Tile Size</p>
              <p className="text-sm text-gray-600">256 px</p>
            </div>

            <div className="mb-4">
              <p className="text-[#284E93] font-semibold">Tile Coverage</p>
              <p className="text-sm text-gray-600">256 px</p>
            </div>

            <button className="flex items-center justify-center gap-2 bg-[#284E93] text-white px-4 py-2 rounded shadow hover:bg-[#1E3A68]">
              <span className="text-lg ">
                <img className="h-5 w-auto" src="src/assets/icons/pencil.png" />
              </span>
              <span>Edit</span>
            </button>
          </div>
        </div>
      )}

      {/* side button */}
      <div className="flex flex-col absolute top-5 right-5 ">
        <div className="cursor-pointer flex items-center rounded-t-md z-10 p-2 bg-white border border-gray-200">
          <img
            className="h-3"
            src="src/assets/icons/plus.png"
            alt="plus Icon"
          />
        </div>
        <div className="cursor-pointer flex items-center z-10 p-2 bg-white border border-gray-200">
          <img
            className="h-4"
            src="src/assets/icons/minus.png"
            alt="plus Icon"
          />
        </div>
        <div className="cursor-pointer flex items-center rounded-b-md z-10 p-2 bg-white border border-gray-200">
          <img
            className="h-4"
            src="src/assets/icons/arrows.png"
            alt="plus Icon"
          />
        </div>

        <div className="mb-1 mt-1 cursor-pointer flex items-center rounded-md z-10 p-2 border border-gray-200 bg-white">
          <img
            className="h-4"
            src="src/assets/icons/building.png"
            alt="plus Icon"
          />
        </div>
        <div className="mb-1 cursor-pointer flex items-center rounded-md z-10 p-2 bg-white border border-gray-200">
          <img className="h-4" src="src/assets/icons/map.png" alt="plus Icon" />
        </div>
        <div className="mb-1 cursor-pointer flex items-center rounded-md z-10 p-2 bg-white border border-gray-200">
          <img
            className="h-4"
            src="src/assets/icons/mount.png"
            alt="plus Icon"
          />
        </div>
      </div>

      {/* layers blue panel  */}

      {layersPanelOpen && (
        <div className="bottom-40 left-5 absolute z-10 w-[230px] border border-gray-300 rounded-lg p-4 pt-3 bg-[#284E93] text-white">
          <div className="flex justify-between">
            <h3 className="text-sm mb-2">Layers</h3>
            <button
              onClick={() => setlayersPanelOpen(false)}
              className="text-white font-bold text-sm"
            >
              ✕
            </button>
          </div>

          {/* Base Group */}
          <div className="mb-3">
            <h4 className="text-sm font-semibold mb-1">Base</h4>
            <label className="flex justify-between items-center text-[14px]">
              <span className="text-[12px]">Base</span>

              <div className="flex items-center justify-center p-[1px] rounded-full border-[1px] border-white">
                <input
                  type="radio"
                  name="base"
                  value="Base"
                  checked={selectedBase === "Base"}
                  onChange={() => setSelectedBase("Base")}
                  className="form-radio appearance-none w-2 h-2 rounded-full bg-transparent checked:bg-white focus:outline-none"

                  // className="form-radio appearance-none w-2 h-2 rounded-full bg-transparent checked:bg-white focus:outline-none"
                />
              </div>
            </label>
          </div>

          <div className="h-[1px] bg-white/30 mb-2"></div>

          {/* Public Group 1 */}
          <div className="mb-3">
            <h4 className="text-sm font-semibold mb-1">Public</h4>
            {["Nap", "DC Area", "DOF"].map((option) => (
              <label
                key={option}
                className="flex items-center justify-between gap-2 mb-1 text-[12px]"
              >
                <span>{option}</span>

                <div className="flex items-center justify-center p-[1px] rounded-full border-[1px] border-white">
                  <input
                    type="radio"
                    name="public1"
                    value={option}
                    checked={selectedPublic1 === option}
                    onChange={() => setSelectedPublic1(option)}
                    className="form-radio appearance-none w-2 h-2 rounded-full bg-transparent checked:bg-white focus:outline-none"
                  />
                </div>
              </label>
            ))}
          </div>

          <div className="h-[1px] bg-white/30 mb-2"></div>

          {/* Public Group 2 */}
          <div>
            <h4 className="text-sm font-semibold mb-1">Public</h4>
            {["Nap", "DC Area", "DOF"].map((option) => (
              <label
                key={option}
                className="flex justify-between items-center gap-2 mb-1 text-[12px]"
              >
                <span>{option}</span>

                <div className="flex items-center justify-center p-[1px] rounded-full border-[1px] border-white">
                  <input
                    type="radio"
                    name="public2"
                    value={option}
                    checked={selectedPublic2 === option}
                    onChange={() => setSelectedPublic2(option)}
                    className="form-radio appearance-none w-2 h-2 rounded-full bg-transparent checked:bg-white focus:outline-none"
                  />
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* layers blue panel ends   */}

      {!layersPanelOpen && (
        <div
          onClick={() => setlayersPanelOpen(true)}
          className="cursor-pointer justify-center flex items-center space-x-3 absolute bottom-40 left-5 rounded-lg z-10 p-2 px-4 pr-6 bg-[#284E93] shadow-md"
        >
          <img
            className="h-4 filter invert brightness-0"
            src="src/assets/icons/layers.png"
            alt="Layers Icon"
          />
          <p className="text-white text-sm">Layers</p>
        </div>
      )}

      {/* Map component */}
      <Map
        {...viewport}
        style={{ width: "100%", height: "80%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={({ viewState }) => handleMove(viewState)}
        mapboxAccessToken={mapboxToken}
      >
        {/* Example Marker */}
        {/* <Marker latitude={33.6995} longitude={73.0363}>
          <div
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: 10,
              height: 10,
            }}
          />
        </Marker> */}
      </Map>
    </div>
  );
};

export default MapboxMap;
