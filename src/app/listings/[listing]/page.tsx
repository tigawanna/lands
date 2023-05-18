// export const dynamic = 'auto';
// export const dynamicParams = true;
// export const revalidate = 0;
// export const fetchCache = 'auto';
// export const runtime = 'nodejs';
// export const preferredRegion = 'all';


import { OneListing } from "@/my-ui/listings/OneListing";
import { ErrorOutput } from "@/my-ui/shared/wrappers/ErrorOutput";
import { getOneListing, getPbListings } from "@/state/pb/api/listings";
import { ResolvingMetadata, Metadata } from "next";

type Props = {
    params: { listing: string };
    searchParams: { 
        [key: string]: string | string[] | undefined };
};


export async function generateMetadata({ params: { listing }, searchParams }: Props): Promise<Metadata> {
    const listings = await getOneListing(listing);
    if(listings instanceof Error){
        return {
            title: `Listing `,
            
        };
    }
    return {
        title: `${listings.location} listing`,

    };
}


interface pageProps {
params:{listing:string}
}

export default async function page({params:{listing}}: pageProps) {

    const listings = await getOneListing(listing);

    
    if (listings instanceof Error) {
        return <ErrorOutput error={listings} />
    }

    return (
        <div className='w-full min-h-screen h-full flex items-start justify-center'>
            <OneListing listing={listings}/>
        </div>
    );
}
