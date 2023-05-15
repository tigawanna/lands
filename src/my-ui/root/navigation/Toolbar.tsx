// import { ClientSuspense, Link, useLocation } from "rakkasjs";

import { lazy, useEffect, useState } from "react";
import { RouteLinks } from "./RouteLinks";
import { Menu, X } from "lucide-react";
import { useRouter,usePathname, } from "next/navigation";
import Link from "next/link";



interface ToolbarProps {}

const Toolbar = ({}: ToolbarProps) => {
  const location = usePathname()
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);
  // close navigation modal on navigate
  // useEffect(() => {
  //   setIsOpen(false);
  // }, [location.]);

  return (
    <div className="w-full h-full flex items-center justify-between p-1 font-serif">
      <div 
      onClick={() => setIsOpen((prev) => !prev)}
      className="md:hidden">
      {isOpen?<Menu/>:<X/>}
    </div>

      <Link
        className="w-fit  min-w-[150px] text-xl md:text-2xl mx-2 
        font-bold hover:text-purple-400 hover:no-underline"
        href="/"
      >
        Real Estates
      </Link>

      {/* <ClientSuspense fallback="">
        <ReactModalWrapper
          child={
            <nav className="w-full  flex item-center gap-1 font-serif">
              <RouteLinks />
            </nav>
          }
          closeModal={() => setIsOpen(false)}
          delay={0}
          open={isOpen}
          responsive={false}
          closebutton={false}
          styles={{
            overlay_top: "8%",
            overlay_right: "0%",
            overlay_left: "0%",
            overlay_bottom: "0%",
            content_bottom: "10%",
            content_right: "10%",
            content_left: "0%",
            content_top: "2%",
          }}
        />
      </ClientSuspense> */}
      <nav className="px-3 hidden md:flex">
        <RouteLinks />
      </nav>
    </div>
  );
};

export default Toolbar;
