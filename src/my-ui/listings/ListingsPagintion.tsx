"use client"
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { URLSearchParams } from "url";

interface ListingsPagintionProps {

}

export function ListingsPagintion({}:ListingsPagintionProps){
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    // const createQueryString = useCallback(
    //     (name: string, value: string) => {
    //         const params = new URLSearchParams();
    //         params.set(name, value);
    //         return params.toString();
    //     },
    //     [searchParams],
    // );

return (
 <div className='w-full h-full flex items-center justify-center gap-5'>
        <p>new page</p>

        {/* using useRouter */}
        <button
            onClick={() => {
                // <pathname>?sort=asc
                router.push(pathname + '?' + "page" + "=2");
            }}
        >
            ASC
        </button>

        {/* using <Link> */}
        {/* <Link
            href={
                // <pathname>?sort=desc
                pathname + '?' + createQueryString('page', '2')
            }
        >
            DESC
        </Link> */}
 </div>
);
}
