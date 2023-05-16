"use client"

import {
  SheetTrigger,
  SheetContent,
  Sheet,

} from "../../../../components/ui/sheet";
import {  Menu } from "lucide-react";
import Link from "next/link";
import { AdminSheet } from "./AdminSheet";
import { RouteLinks } from "./RouteLinks";


export function MobileViewSheet() {
  

  return (
    <Sheet>
      <SheetTrigger asChild>
          <Menu className="h-8 w-8 md:hidden"/>
      </SheetTrigger>
      
      <SheetContent  position="left" size="lg" className="w-[80%] flex flex-col items-center ">

        <Link
          className="w-fit  min-w-[100px] text-xl md:text-2xl mx-2 
        font-bold hover:text-purple-400 hover:no-underline"
          href="/"
        >
          Real Estates
        </Link>

          <nav className="px-3 border-t flex flex-col items-center justify-center gap-2">
            <RouteLinks />
            <AdminSheet />
          </nav>
   


        {/* <SheetFooter>
          <Button 
          onClick={()=>logoutUser()}
          variant="outline">logout</Button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
