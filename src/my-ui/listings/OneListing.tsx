import { PBListings } from "@/state/pb/api/listings";
import { Phone, Mail } from "lucide-react";
import { Icons } from "../shared/wrappers/icons";
import { ReactLocationWrapper } from "../location/ReactLocationWrapper";
import { NextCarrousel } from "../shared/wrappers/NextCarrousel";
import { Collapsable } from "../shared/wrappers/Collapsable";
import { ScrollArea } from "../../../components/ui/scroll-area";





interface OneListingProps {
 listing:PBListings

}

export function OneListing({listing}:OneListingProps){

return (
    <main className="w-full h-full min-h-screen flex flex-col items-center justify-center">
        
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
        <div className="w-[90%] h-full  flex flex-col lg:flex-row  
                items-center justify-center rounded-2xl m-2 gap-5 md:gap-1">

                <NextCarrousel
                    images={listing.images as string[]}
                    record_id={listing.id}
                />

                <div className="font-serif p-5 w-[90%] mt-1 lg:w-[50%] h-full border shadow-lg rounded-lg">
                    <div className="flex items-center justify-start gap-5">
                        <h1 className="text-2xl font-bold">{listing.location}</h1>
                        <p className="font-semibold font-sans text-2xl text-purple-900">
                            {listing.price.toLocaleString("en-US")} Ksh
                        </p>
                    </div>
                    
                        {/* <Collapsable text={listing.description}/> */}
    
                    <div className="border-t p-1 m-1 ">
                        <p className="text-sm flex font-semibold">
                            Owner: {listing.expand.owner.name}
                        </p>
                        <p className="text-sm flex gap-1">
                            <Phone className="h-4 w-4" />
                            {listing.expand.owner.phone}
                        </p>
                        {listing.expand.owner.whatsapp && <p className="text-sm flex gap-1">
                            <Icons.whatsapp className="h-5 w-5" />
                            {listing.expand.owner.whatsapp}
                        </p>}
                        <p className="text-sm flex gap-1">
                            <Mail className="h-4 w-4" />
                            {listing.expand.owner.email}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[95%] p-2 ">
                <ScrollArea className="font-serif h-[40%] w-full rounded-md border-b border-t p-5">
                    <div dangerouslySetInnerHTML={{__html:listing.description}}/>
                    {/* <p>{listing.description}</p> */}
                </ScrollArea>

            </div>

            <div className="w-full min-h-[300px] flex flex-row  items-center justify-center">
                <div className="w-[100%] md:w-[70%] p-5 z-20">
                <ReactLocationWrapper coords={{ lat: listing.latitude, lng: listing.longitude}}/>
                </div>
            </div>
        </div>

    </main>
);
}




