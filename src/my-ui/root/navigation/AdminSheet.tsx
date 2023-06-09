
import { Button } from "../../../../components/ui/button";

import {
  SheetTrigger,
  SheetContent,
  SheetFooter,
  Sheet,
} from "../../../../components/ui/sheet";
import { logoutUser, makeImageUrl } from "@/state/pb/config";
import Image from "next/image";
import { Mail, UserCircle } from "lucide-react";
import { PBUserRecord } from "@/state/user";


interface AdminSheetProps {
  user?: PBUserRecord
}
export function AdminSheet({user}:AdminSheetProps) {

const img_url = user?makeImageUrl("staff", user?.id, user?.avatar):null
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="">
                  {img_url ? 
                  <Image
                      alt="admin image"
                      src={img_url}
                      width={100} height={100}
                      className="rounded-full w-8 h-8"/> : <UserCircle className='w-8 h-8' />}
        </Button>
      </SheetTrigger>
      
      <SheetContent position="right" size="sm" className="w-[70%] md:w-[30%] flex flex-col items-center ">
        {/* <SheetHeader>
          <SheetTitle>profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader> */}
        
        <div className="w-full flex flex-col items-center justify-center gap-2">
            {img_url ? <Image alt="admin image"
            src={img_url} width={100} height={100}
            className="rounded-full w-20 h-20 aspect-square" /> : <UserCircle className='w-20 h-20' />}
            <h3 className="flex gap-2"><Mail/>{user?.username}</h3> 
            <h3>{user?.email}</h3> 
        </div>

        <SheetFooter>
          {user&&<Button 
          onClick={()=>logoutUser()}
          variant="outline">logout</Button>}        
          
    </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
