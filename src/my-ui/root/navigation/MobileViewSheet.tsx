"use client"

import {
  SheetTrigger,
  SheetContent,
  Sheet,
} from "../../../../components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { AdminSheet } from "./AdminSheet";
import { RouteLinks } from "./RouteLinks";
import { PBUserRecord } from "@/state/user";


interface MobileViewSheetProps {
  user?:PBUserRecord
}

export function MobileViewSheet({user}:MobileViewSheetProps) {


  return (
    <Sheet>
      <SheetTrigger asChild >
          <Menu className="h-8 w-8 md:hidden"/>
      </SheetTrigger>
      
      <SheetContent  position="left" size="lg" className="w-[80%] flex flex-col items-center ">
        <Link
          className="w-fit  min-w-[100px] text-xl md:text-2xl mx-2 
        font-bold hover:text-purple-400 hover:no-underline"
          href="/">
          Real Estates
        </Link>

        <RouteLinks mobile={true}/>
        <div className="flex items-center justify-center p-2 rounded-2xl border 
        font-bold text-accent-foreground">
          {(user && user.id) &&<AdminSheet />}
         </div>


        {/* <SheetFooter>
          <Button 
          onClick={()=>logoutUser()}
          variant="outline">logout</Button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
