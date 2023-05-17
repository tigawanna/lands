import { PBListings } from "@/state/pb/api/listings";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../shared/wrappers/icons";
import { Mail, Phone } from "lucide-react";
import { makeImageUrl } from "@/state/pb/config";

interface ListingCardProps {
listing:PBListings
}

export function ListingCard({listing}:ListingCardProps){

const img_url = makeImageUrl("listings",listing.id,listing.images[0] as string) as string
return (
    <Link
        href={`/listings/${listing.id}`}
        key={listing.id}
        className=" w-full flex flex-col items-start shadow-lg border hover:shadow-lg  hover:shadow-slate-300 rounded-2xl "
    >
        <div className=" h-full w-full flex items-center justify-center relative">
            {listing.status === "sold" ? (
                <div
                    className="w-full h-full absolute font-bold font-serif
                      flex items-center justify-center  text-6xl  text-slate-50 bg-slate-500 bg-opacity-30">
                    SOLD
                </div>
            ) : null}

            <Image
                // props={{ src: img_url as string, alt: listing?.location }}
                // placeholderSrc={alt_img_url}
                src={img_url}
                alt="listing"
                height={200}
                width={300}
                className="h-auto w-full object-cover  aspect-video animate-in fade-in duration-500"
            />
        </div>

        <div className=" p-3">
            <h1 className="text-2xl font-bold">{listing.location}</h1>
            <p className="text-xs line-clamp-3 font-serif  py-1">{listing.description}</p>

            <p className="text-sm rounded-lg border-t">{listing.amenities?.size}</p>
            <p className="font-semibold font-sans text-lg text-purple-900">
                {listing.price.toLocaleString("en-US")} Ksh
            </p>

            <div className="border-t p-1 m-1 ">
                <p className="text-sm flex font-semibold">
                    Owner: {listing.expand.owner.name}
                </p>
                <p className="text-sm flex gap-1">
                    <Phone className="h-4 w-4" />
                    {listing.expand.owner.phone}
                </p>
                { listing.expand.owner.whatsapp && <p className="text-sm flex gap-1">
                   <Icons.whatsapp className="h-5 w-5"/>
                    {listing.expand.owner.whatsapp}
                </p>}
                <p className="text-sm flex gap-1">
                    <Mail className="h-4 w-4" />
                    {listing.expand.owner.email}
                </p>
            </div>
        </div>
    </Link>
);
}
