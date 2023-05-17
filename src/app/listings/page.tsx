import { AddListingButton } from "@/my-ui/listings/AddListingButton";
import { ListingCard } from "@/my-ui/listings/ListingCard";
import { ErrorOutput } from "@/my-ui/shared/wrappers/ErrorOutput";
import { getPbListings } from "@/state/pb/api/listings";
import { server_component_pb } from "@/state/pb/server_component_pb";


interface pageProps {

}

export default async function page({}:pageProps){
const listings = await getPbListings({ filter_id: "", page: 1, perPage: 20 })
const { cookies } = await server_component_pb()
const user =cookies().get("pb_auth")?.value


    if (listings instanceof Error) {
        return <ErrorOutput error={listings} />
    }

return (
 <div className='w-full min-h-screen h-full flex items-start justify-center'>
        {(user)&&<AddListingButton />}
        <div className='w-[90%] p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 lg:gap-4'>

            {
                listings.items.map((listing) => {
                    return <ListingCard listing={listing} key={listing.id} />
                })
            }
        </div>

 </div>
);
}
