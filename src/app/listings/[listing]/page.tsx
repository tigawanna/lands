import { ListingCard } from "@/my-ui/listings/ListingCard";
import { OneListing } from "@/my-ui/listings/OneListing";
import { ErrorOutput } from "@/my-ui/shared/wrappers/ErrorOutput";
import { getOneListing, getPbListings } from "@/state/pb/api/listings";

interface pageProps {
params:{listing:string}
}

export default async function page({params:{listing}}: pageProps) {
    console.log("listing id", listing)
    const listings = await getOneListing(listing);
    console.log("listings", listings)
    
    if (listings instanceof Error) {
        return <ErrorOutput error={listings} />
    }

    return (
        <div className='w-full min-h-screen h-full flex items-start justify-center'>
            <OneListing listing={listings}/>
        </div>
    );
}
