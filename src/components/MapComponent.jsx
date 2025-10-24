import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import '../styles/home.css'

const MapComponent = () => {
  const center = { lat: 63.432502, lng: 10.394609 }; 

  return (
    <APIProvider apiKey={"AIzaSyANm_WcNzgmvrsV1_C2P4wnOd_bebBGkpI"}>
      <div className="map-container" 
      // style={{ width: "100%", height: "400px" }}
      >
        <Map
          defaultCenter={center}
          defaultZoom={16}
          style={{ width: "100%", height: "100%" }}
        >
          <Marker position={center} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapComponent;