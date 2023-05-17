// import { ClientSuspense, Link, useLocation } from "rakkasjs";

import { RouteLinks } from "./RouteLinks";
import Link from "next/link";
import { AdminSheet } from "./AdminSheet";
import { MobileViewSheet } from "./MobileViewSheet";
import { PBUserRecord } from "@/state/user";
import { useEffect, useState } from "react";




interface ToolbarProps {
  user?:PBUserRecord
}

function Toolbar({user}: ToolbarProps){
  // const [show, setShoe] = useState(user && user.id)
  // useEffect(()=>{
  //   setShoe(user && user.id)
  // },[user?.id])
  // console.log("show admin url ???", show)

return (
    <div className="w-full h-14 flex items-center justify-start p-1 font-serif sticky top-0 z-30 bg-secondary">
      <div className="w-8 ">
      <MobileViewSheet user={user}/>
      </div>

      <Link
        className="w-fit  min-w-[150px] text-lg md:text-xl mx-2 
        font-bold hover:text-accent-foreground hover:no-underline"
        href="/"
      >
        Real Estates
      </Link>

      <nav className="w-full px-3 hidden md:flex items-center justify-end ">
        <RouteLinks user={user}/>
      {(user && user.id) &&<AdminSheet/>}
 
      </nav>

    </div>
  );
};

export default Toolbar;

