"use client"
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { useRef, useState } from "react";
import { icon } from "leaflet"
import "leaflet/dist/leaflet.css";


interface ReactLeafletMapCardProps {
  coords: { lat: number; lng: number };
  display_only: boolean;
  setMapLocation:(lat: number, lng: number) => void;
}

interface LatLngExp {
  lat: number;
  lng: number;
}

const ReactLeafletMapCard = ({coords,display_only,setMapLocation}: ReactLeafletMapCardProps) => {
  const initialLocation= useRef(coords)

  // const { position } = useGeoLocation();
  // const [pos, setPos] = useState(() => coords ?? position);

  const [zoom, SetZoom] = useState(15);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center select-none">
      <MapContainer
      style={{ width: "90%", height: "500px" }}
        center={coords}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <Popup>Popup in FeatureGroup</Popup> */}
        <button
          type="button"
          className="leaflet-top leaflet-right text-white
                bg-purple-900 p-2 m-2 z-50 rounded-lg hover:bg-slate-700"
          onClick={() => setMapLocation(initialLocation.current.lat, initialLocation.current.lng)}
        >
          Recenter Map
        </button>

        <MapChild
          draggable={!display_only}
          position={coords}
          setMapLocation={setMapLocation}
        />
      </MapContainer>
    </div>
  );
};
export default ReactLeafletMapCard;


interface MapChildProps {
  draggable: boolean;
  position: LatLngExp;
  setMapLocation:((lat: number, lng: number) => void) | undefined;
}

const ICON = icon({
  iconUrl: "/house.svg",
  shadowUrl: "/marker-shadow.png",
  iconSize: [42, 42],
})

function MapChild({ draggable, position, setMapLocation }: MapChildProps) {
  // console.log("draggable ",draggable)
  // const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click(e) { 
      map.locate()
      // console.log("click event  ==== ",e.latlng)
      if(e.latlng){
        setMapLocation&&setMapLocation(e.latlng?.lat, e.latlng?.lng);
      }
    // setMapLocation
    },
    // zoomend(e) {
    //   if (e.target._latlng) {
    //     setMapLocation && setMapLocation(e.target._latlng.lat, e.target._latlng.lng);
    //   }
    // },
    locationfound(e) {
      // setPosition(e.latlng)
      if(e.latlng){
        setMapLocation && setMapLocation(e.latlng?.lat, e.latlng?.lng);
      }

      map.flyTo(position, map.getZoom());
    },
    dragend(e) {
      // console.log("dragged event  === ",e.target._latlng)
      if(e.target._latlng){ 
        setMapLocation && setMapLocation(e.target?._latlng?.lat, e.target?._latlng?.lng);
      }
  
    },

  });
  // console.log("position  === ",position)
  return position === null ? null : (
    <Marker  icon={ICON} position={position} draggable={draggable}>
      {/* <Popup>alatitude: {position.lng}, longitude: {position.lat}</Popup> */}
    </Marker>


  );
}
