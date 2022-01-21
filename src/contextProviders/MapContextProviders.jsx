import React, { useState } from "react";

import { MapContext } from "../contexts/mapContext";

const MapContextProviders = ({ children }) => {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [travelTimeInformation, setTravelTimeInformation] = useState();

  return (
    <MapContext.Provider
      value={
        (origin,
        setOrigin,
        destination,
        setDestination,
        travelTimeInformation,
        setTravelTimeInformation)
      }
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProviders;
