export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = 30;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'all';

import { AddListingButton } from "@/my-ui/listings/AddListingButton";
import { ListingCard } from "@/my-ui/listings/ListingCard";
import { ListingsPagintion } from "@/my-ui/listings/ListingsPagintion";
import { ErrorOutput } from "@/my-ui/shared/wrappers/ErrorOutput";
import { getPbListings } from "@/state/pb/api/listings";
import { server_component_pb } from "@/state/pb/server_component_pb";


interface pageProps {
    params: {},
    searchParams: {page:string}
}

export default async function page({params,searchParams}:pageProps) {

// console.log("page params / search params === ",params,searchParams)
const page = searchParams?.page?parseInt(searchParams?.page):1
// console.log("page  ==== ",page)
const listings = await getPbListings({ filter:"", page, perPage:2 })
const { cookies } = await server_component_pb()
const user = cookies().get("pb_auth")?.value


    if (listings instanceof Error) {
        return <ErrorOutput error={listings} />
    }

return (
 <div className='w-full min-h-screen h-full flex flex-col items-center justify-between'>
        {(user)&&<AddListingButton />}
        <div className='w-[90%] p-2 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-2 lg:gap-4'>

            {
                listings.items.map((listing) => {
                    return <ListingCard listing={listing} key={listing.id} />
                })
            }
        </div>
    <ListingsPagintion listings={listings}/>
 </div>
);
}
