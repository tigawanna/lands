import Link from "next/link";
import { Close } from "@radix-ui/react-dialog"
import { Home, LucideIcon, UserCog } from "lucide-react";
import { ListIcon } from "lucide-react";
import { Info } from "lucide-react";
import { PBUserRecord } from "@/state/user";
interface RoutesProps {
  mobile?:boolean
  user?:PBUserRecord
}

export const RouteLinks = ({mobile = false,user}: RoutesProps) => {
  // console.log("user in route links  ==== ",user)
  const links =[
    {name:"home",url:"/",Icon:Home},
    {name:"listings",url:"/listings",Icon:ListIcon},
    {name:"about",url:"/about",Icon:Info}
  ]
  return (
    <nav className="w-full md:w-fit  h-full  flex flex-col md:flex-row  items-center justify-cen gap-2 px-2 ">
      {links.map((link)=>{ 
      return(
        <RouteLink key={link.name} mobile={mobile} url={link.url} Icon={link.Icon} name={link.name}/>
      )}
      
      )}
      {user &&<RouteLink mobile={mobile} url="/admin/new" Icon={UserCog} name="admin"/>}
      {/* {!user&&<div className="bg-red-500 h-5">hello</div>}
      {user&&<div className="bg-green-500 h-5">hello</div>} */}


    </nav>
  );
};


interface RouteLinkProps {
  mobile:boolean;
  url:string;
  name:string;
  Icon:LucideIcon
}

export function RouteLink({mobile,url,Icon,name}:RouteLinkProps){
  if(mobile){
    return(
      <Close asChild className="w-full flex items-center justify-center border-t p-3 ">
        <Link href={url} className="hover:text-purple-700 underline flex items-center justify-center gap-2">
          <Icon/>{name}</Link>
      </Close>
    )
  }
return (
 <div className='w-full h-full flex items-center justify-center'>
    <Link href={url} className="hover:text-purple-700 underline flex items-center justify-center gap-2">{name}</Link>
</div>
);
}
