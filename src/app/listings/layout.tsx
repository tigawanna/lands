

import BreadCrumbs from "@/my-ui/root/navigation/breadcrumbs";

interface layoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'Listings',
    description: 'Full catalog of prime properties just for you',
}
export default function layout({children}:layoutProps){
return (
 <section className='w-full h-full flex flex-col items-center justify-center'>
        <div className="w-full flex items-center justify-end p-1 pr-5 font-serif sticky top-14  z-30 ">
        <BreadCrumbs />
        </div>
    {children}
 </section>
);
}
