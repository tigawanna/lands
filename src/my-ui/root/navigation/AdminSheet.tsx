import { useUserStore } from "@/state/zustand/user";
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

export function AdminSheet() {
    const { user, updateUser } = useUserStore()
    if (!user) {
        return null
    }
    const img_url = makeImageUrl("staff", user?.id, user?.avatar)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent">
                  {img_url ? 
                  <Image
                      alt="admin image"
                      src={img_url}
                      width={100} height={100}
                      className="rounded-full w-8 h-8"/> : <UserCircle className='w-8 h-8' />}
        </Button>
      </SheetTrigger>
      
      <SheetContent position="right" size="sm" className="w-[30%] flex flex-col items-center ">
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
            <h3 className="flex gap-2"><Mail/>{user.username}</h3> 
            <h3>{user.email}</h3> 
        </div>

        <SheetFooter>
          <Button 
          onClick={()=>logoutUser()}
          variant="outline">logout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
