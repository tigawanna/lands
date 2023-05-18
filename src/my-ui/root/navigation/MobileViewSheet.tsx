"use client"

import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetFooter,
} from "../../../../components/ui/sheet";
import { Menu, UserCircle } from "lucide-react";
import Link from "next/link";
import { AdminSheet } from "./AdminSheet";
import { RouteLinks } from "./RouteLinks";
import { PBUserRecord } from "@/state/user";

import { logoutUser, makeImageUrl } from "@/state/pb/config";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";


interface MobileViewSheetProps {
  user?:PBUserRecord
}

export function MobileViewSheet({user}:MobileViewSheetProps) {
const img_url = user ? makeImageUrl("staff", user?.id, user?.avatar) : null
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

        <RouteLinks mobile={true} user={user}/>
        {/* <div className="flex items-center justify-center p-2 rounded-2xl border 
        font-bold text-accent-foreground">
          {user &&<AdminSheet user={user}/>}
         </div> */}


        <SheetFooter >
{user&&<div className="h-full gap-5 flex flex-col w-full items-center justify-center">
            {img_url ?
              <Image
                alt="admin image"
                src={img_url}
                width={100} height={100}
                className="rounded-xl w-20 h-20" /> : <UserCircle className='w-20 h-20' />}
            <Button
              onClick={() => logoutUser()}
              variant="outline">logout</Button>
          </div>}

        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
