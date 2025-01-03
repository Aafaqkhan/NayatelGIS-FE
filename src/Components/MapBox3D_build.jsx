import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYmFzaXRyaWF6MzgxNSIsImEiOiJjbTRxcXB2aWoxNHBjMmpvdDFyYWNlNmRnIn0.-4GiskmuJLZ62VxH0cDTYw";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // Use the ref instead of ID
      zoom: 14,
      center: [71.7438, 34.1458],
      pitch: 60,
      bearing: 41,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
    });

    mapRef.current.on("style.load", () => {
      mapRef.current.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });
      mapRef.current.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
    });
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="h-screen w-full" // Tailwind classes for full screen and full width
    ></div>
  );
};

export default MapboxExample;

// import React, { useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";

// import "mapbox-gl/dist/mapbox-gl.css";

// const MapboxExample = () => {
//   const mapContainerRef = useRef();
//   const mapRef = useRef();
//   const [is3DEnabled, setIs3DEnabled] = useState(true);

//   useEffect(() => {
//     // Add your Mapbox access token
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoiYmFzaXRyaWF6MzgxNSIsImEiOiJjbTRxcXB2aWoxNHBjMmpvdDFyYWNlNmRnIn0.-4GiskmuJLZ62VxH0cDTYw";

//     // Initialize the Mapbox map
//     mapRef.current = new mapboxgl.Map({
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [-74.0066, 40.7135],
//       zoom: 15.5,
//       pitch: 45,
//       bearing: -17.6,
//       container: mapContainerRef.current,
//       antialias: true,
//     });

//     // mapRef.current = new mapboxgl.Map({
//     //   container: mapContainerRef.current,
//     //   style: "mapbox://styles/mapbox/satellite-v9",
//     //   projection: "globe",
//     //   center: [-74.0066, 40.7135],
//     //   zoom: 15,
//     // });

//     // Add 3D buildings layer
//     mapRef.current.on("style.load", () => {
//       const layers = mapRef.current.getStyle().layers;
//       const labelLayerId = layers.find(
//         (layer) => layer.type === "symbol" && layer.layout["text-field"]
//       ).id;

//       mapRef.current.addLayer(
//         {
//           id: "add-3d-buildings",
//           source: "composite",
//           "source-layer": "building",
//           filter: ["==", "extrude", "true"],
//           type: "fill-extrusion",
//           minzoom: 15,
//           paint: {
//             "fill-extrusion-color": "#aaa",
//             "fill-extrusion-height": [
//               "interpolate",
//               ["linear"],
//               ["zoom"],
//               15,
//               0,
//               15.05,
//               ["get", "height"],
//             ],
//             "fill-extrusion-base": [
//               "interpolate",
//               ["linear"],
//               ["zoom"],
//               15,
//               0,
//               15.05,
//               ["get", "min_height"],
//             ],
//             "fill-extrusion-opacity": 0.6,
//           },
//         },
//         labelLayerId
//       );
//     });

//     // mapRef.current = new mapboxgl.Map({
//     //   container: "map",
//     //   zoom: 14,
//     //   center: [-114.26608, 32.7213],
//     //   pitch: 80,
//     //   bearing: 41,
//     //   style: "mapbox://styles/mapbox/satellite-streets-v12",
//     // });

//     // mapRef.current.on("style.load", () => {
//     //   mapRef.current.addSource("mapbox-dem", {
//     //     type: "raster-dem",
//     //     url: "mapbox://mapbox.mapbox-terrain-dem-v1",
//     //     tileSize: 512,
//     //     maxzoom: 14,
//     //   });
//     //   mapRef.current.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
//     // });

//     return () => mapRef.current.remove();
//   }, []);

//   const toggle3DView = () => {
//     if (mapRef.current) {
//       const layerId = "add-3d-buildings";
//       if (is3DEnabled) {
//         mapRef.current.setLayoutProperty(layerId, "visibility", "none");
//       } else {
//         mapRef.current.setLayoutProperty(layerId, "visibility", "visible");
//       }
//       setIs3DEnabled(!is3DEnabled);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div ref={mapContainerRef} className="w-full h-full"></div>
//       <button
//         onClick={toggle3DView}
//         className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded"
//       >
//         Toggle 3D View
//       </button>
//     </div>
//   );
// };

// export default MapboxExample;
