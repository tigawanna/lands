"use client"
import { usePbAuthListener } from "@/state/pb/hooks/usePbAuthListener";
import { Footer } from "./navigation/Footer";
import Toolbar from "./navigation/Toolbar";
import { PBUserRecord } from "@/state/user";

interface AppWrapperProps {
children: React.ReactNode
user?:PBUserRecord
}

export function AppWrapper({children,user}:AppWrapperProps){
   usePbAuthListener()
return (
 <div className='w-full h-full flex flex-col items-center justify-between'>
    <Toolbar user={user}/>
      {children}
    <Footer/>
 </div>
);
}
