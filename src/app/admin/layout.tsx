interface layoutProps {
    children: React.ReactNode
}

export default function layout({children}:layoutProps){
return (
 <section className='w-full h-full flex items-center justify-center'>
    {children}
 </section>
);
}
