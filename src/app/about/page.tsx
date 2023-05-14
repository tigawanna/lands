"use client"

import ReactLeafletMapCard from "@/my-ui/location/ReactLeafletMapCard";
import { useGeoLocation } from "@/my-ui/shared/hooks/useGeoLocation";
import { useState } from "react";


export default function page({}){
   const {geoLocation,position} =useGeoLocation()
   const [location,setLocation]=useState(position)
   function setMapLocation(lat: number, lng: number) {
   console.log("setting map loaction to === ",lat,lng)
    setLocation({lat,lng})
   }
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
    About Page
    <div className="m-3 p-3 text-lg border rounded-xl">
      Latitude: {location.lat} Loagitude: {location.lng}
    </div>
    <ReactLeafletMapCard coords={location} display_only={false} setMapLocation={setMapLocation} />
 </div>
);
}

