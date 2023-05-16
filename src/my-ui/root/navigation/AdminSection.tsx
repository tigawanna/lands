"use clinet"

import { makeImageUrl } from "@/state/pb/config";
import { useUserStore } from "@/state/zustand/user";
import { UserCircle } from "lucide-react";
import Image from "next/image";


interface AdminSectionProps {

}

export function AdminSection({}:AdminSectionProps){
const {user,updateUser} = useUserStore()

if(!user){
    return null
}
const img_url = makeImageUrl("staff", user?.id , user?.avatar)
return (
 <div 
    className='w-full h-full flex items-center justify-center'>
    {img_url? <Image 
    alt="admin image" 
    src={img_url} 
    width={100} height={100}
    className="rounded-full w-8 h-8"
    />:<UserCircle className='w-8 h-8'/>}

 </div>
);
}
