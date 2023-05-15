"use client"

import { useRouter, usePathname, } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface breadcrumbsProps {}

const BreadCrumbs = ({}: breadcrumbsProps) => {
  const location = usePathname();
  const locations = location.split("/")

  const getNewPathname = (parts: string[], index: number) => {
    // const new_arr = parts.slice(0, index)
    let new_path = "";
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        new_path += parts[i];
      } else {
        new_path += parts[i] + "/";
      }
    }
    return new_path;
  };

  function should_add_chevron(parts: string[], index: number) {
    // const new_arr = parts.slice(0, index)
    if(index === 0 || parts.length < 2 || index === parts.length - 1){
      return false
    }else{
      return true
    }
  }
// console.log("locations  ==== ",locations)
  return (
    <nav className="w-fit h-full flex items-center justify-center border rounded px-2 ">
      {
        locations.map((item,idx)=>{
          const crumb_link  =getNewPathname(locations, idx)
          return <Link 
          className="flex"
          style={{color:crumb_link===location?"purple":""}}
          key={idx} href={crumb_link}>{item}
          {should_add_chevron(locations, idx) && <ChevronRight />}
          </Link>
        })
      }

    </nav>
  );
};

export default BreadCrumbs;
