"use client"

import { Plus } from "lucide-react";
import Link from "next/link";

interface AddListingButtonProps {

}

export function AddListingButton({}:AddListingButtonProps){
return (
 <Link 
 href={'../admin/new'}
 className='fixed top-[10%] left-[2%] z-50 flex items-center justify-center border 
    shadow-secondary-foreground shadow-lg p-1 px-2 rounded-lg'>
    <Plus className="h-10 w-10" size={24} width={10}/>
 </Link>
);
}
