// import { ClientSuspense, Link, useLocation } from "rakkasjs";

import { RouteLinks } from "./RouteLinks";
import Link from "next/link";
import { AdminSheet } from "./AdminSheet";
import { MobileViewSheet } from "./MobileViewSheet";
import { PBUserRecord } from "@/state/user";




interface ToolbarProps {
  user?:PBUserRecord
}

function Toolbar({user}: ToolbarProps){

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
        <RouteLinks />
        {user&&<AdminSheet/>}
 
      </nav>

    </div>
  );
};

export default Toolbar;

