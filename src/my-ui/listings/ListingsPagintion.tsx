"use client"
import { PBListings } from "@/state/pb/api/listings";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ListResult } from "pocketbase";
import ReactPaginate from "react-paginate";


interface ListingsPagintionProps {
    listings:ListResult<PBListings>
}

export function ListingsPagintion({listings}:ListingsPagintionProps){
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;
   

    interface HandlePageClickEvent{
        selected:number
    }

    const handlePageClick = ({selected}:HandlePageClickEvent) => {
        // console.log("event  ==== ",event)
        const new_page = selected+1
        router.push(
            pathname + '?' + "page" + "=" + new_page
        )
    };

return (
 <div className='w-full h-full flex items-center justify-center '>



        <ReactPaginate 
            className="flex justify-center gap-2 sticky bottom-1 p-2"
        pageCount={listings.totalPages}
        onPageChange={handlePageClick}
        nextLabel={<ChevronRight/>}
        previousLabel={<ChevronLeft/>}
     
        // pageRangeDisplayed={5}
        />
 </div>
);
}
