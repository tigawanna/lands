import { InstagramIcon, Mail } from "lucide-react";
import { FacebookIcon,TwitterIcon } from "lucide-react";


interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="w-full h-full flex items-center justify-center p-2 gap-5">
    <FacebookIcon/>
    <TwitterIcon/>
    <InstagramIcon/>
    
    <Mail/> 
    </footer>
  );
};
