"use client"
import { usePbAuthListener } from "@/state/pb/hooks/usePbAuthListener";
import { ReactProgress } from "../shared/loaders/ReactProgress";
import { Footer } from "./navigation/Footer";
import Toolbar from "./navigation/Toolbar";

interface AppWrapperProps {
children: React.ReactNode
}

export function AppWrapper({children}:AppWrapperProps){
   usePbAuthListener()
return (
 <div className='w-full h-full flex flex-col items-center justify-between'>
    <Toolbar/>
      {children}
    <Footer/>
 </div>
);
}
