import { useContext } from "react";
import { MapContext } from "../contexts/mapContext";

const useMapContext = () => useContext(MapContext);

export { useMapContext };
