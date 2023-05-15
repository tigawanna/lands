import { PBListings } from "@/state/pb/api/listings";
import { Phone, Mail } from "lucide-react";
// import ReactLeafletMapCard from "../location/ReactLeafletMapCard";
import { Icons } from "../shared/wrappers/icons";
import { makeImageUrl } from "@/state/pb/config";
import dynamic from "next/dynamic";
import { ReactLocationWrapper } from "../location/ReactLocationWrapper";


interface OneListingProps {
 listing:PBListings
}

export function OneListing({listing}:OneListingProps){

const img_url = makeImageUrl("listings", listing.id, listing.images[0] as string) as string
return (
    <main className="w-full h-full min-h-screen flex flex-col items-center justify-center">

        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <div className="w-[90%]  flex flex-col lg:flex-row  items-center justify-center rounded-2xl m-2"
            >
                {/* <GoodImageCarousel
                    imgs={getImagesUrls()}
                    height={"300px"}
                    width={"600px"}
                    props={{
                        className: "w-[80%]",
                        src: img_url as string,
                        alt: listing?.location,
                    }}
                /> */}

                <div className="font-serif p-5 w-[90%] lg:w-[40%]">
                    <div className="flex items-center justify-start gap-5">
                        <h1 className="text-2xl font-bold">{listing.location}</h1>
                        <p className="font-semibold font-sans text-2xl text-purple-900">
                            {listing.price.toLocaleString("en-US")} Ksh
                        </p>
                    </div>

                    <p
                        // className={
                        //     hideDetails ? "text-sm line-clamp-5 mt-4" : "text-sm mt-4"
                        // }
                    >
                        {listing.description}
                    </p>
                    {/* <button
                        onClick={() => setHideDetails(!hideDetails)}
                        className=" p-1"
                    >
                        <TheIcon
                            Icon={hideDetails ? GrDown : GrUp}
                            iconAction={() => {
                                setHideDetails(!hideDetails);
                            }}
                        />
                    </button> */}
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

            <div className="w-full flex flex-row  items-center justify-center">
                <div className="w-[90%] md:w-[70%] p-5 ">
                <ReactLocationWrapper coords={{ lat: listing.latitude, lng: listing.longitude}}/>
                </div>
            </div>
        </div>
    </main>
);
}
