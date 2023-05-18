import { HeroImage } from '@/my-ui/home/HeroImage'
import { ListingCard } from '@/my-ui/listings/ListingCard'
import { ErrorOutput } from '@/my-ui/shared/wrappers/ErrorOutput'
import { getPbListings } from '@/state/pb/api/listings'



export default async function Home() {
  const listings = await getPbListings({ filter:"", page: 1, perPage: 10 })

  if (listings instanceof Error) {
    return <ErrorOutput error={listings} />
  }

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between ">
      <HeroImage/>
      <h2 className='text-2xl font-semibold p-2'>Top picks</h2>
      <div className='w-[90%] p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 lg:gap-4'>
   
        {
          listings.items.map((listing) => {
            return <ListingCard listing={listing} key={listing.id} />
          })
        }
      </div>

    </main>
  )
}
