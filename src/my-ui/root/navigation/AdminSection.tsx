"use clinet"


import { makeImageUrl } from "@/state/pb/config";
import { PBUserRecord } from "@/state/user";
import { UserCircle } from "lucide-react";
import Image from "next/image";


interface AdminSectionProps {
    user?: PBUserRecord
}

export function AdminSection({user}:AdminSectionProps){
const img_url = user?makeImageUrl("staff", user?.id , user?.avatar):null
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
