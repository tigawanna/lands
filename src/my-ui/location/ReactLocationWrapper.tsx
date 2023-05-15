"use client"
import dynamic from 'next/dynamic';

const ReactLeafletMapCard = dynamic(() => import('../location/ReactLeafletMapCard'), { ssr: false });
interface ReactLocationWrapperProps {
coords:{
    lat:number,
    lng:number}
}

export function ReactLocationWrapper({coords}:ReactLocationWrapperProps){
    const setMapLocation = (lat: number, lng: number) => {
        return
    };
return (
 <div className='w-full h-full flex items-center justify-center'>
        <ReactLeafletMapCard
            coords={coords}
            setMapLocation={setMapLocation}
            display_only={true}
        />
 </div>
);
}
