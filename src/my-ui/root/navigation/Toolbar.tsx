// import { ClientSuspense, Link, useLocation } from "rakkasjs";

import { useEffect, useState } from "react";
import { RouteLinks } from "./RouteLinks";
import { Menu, X } from "lucide-react";

import Link from "next/link";
import { AdminSheet } from "./AdminSheet";
import { MobileViewSheet } from "./MobileViewSheet";




interface ToolbarProps {}

const Toolbar = ({}: ToolbarProps) => {





  return (
    <div className="w-full h-14 flex items-center justify-start p-1 font-serif sticky top-0 z-30 bg-secondary">
      <div className="w-8 ">
      <MobileViewSheet/>
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
        <AdminSheet/>
      </nav>

    </div>
  );
};

export default Toolbar;
