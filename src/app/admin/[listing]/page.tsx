interface pageProps {
params:{listing:string}
}

export default function page({params}:pageProps){
return (
 <div className='w-full h-full flex items-center justify-center'>
    {params.listing}
 </div>
);
}
