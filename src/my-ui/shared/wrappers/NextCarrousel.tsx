"use client"

import { makeImageUrl } from '@/state/pb/config';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface NextCarrouselProps {
images:string[]
record_id: string

}


export function NextCarrousel({images,record_id}:NextCarrouselProps){
return (
 <div className='w-full h-full flex items-center justify-center'>
        <Carousel
        className='md:w-[70%]  md:h-[50%] '  
        showThumbs={false} autoPlay infiniteLoop stopOnHover swipeable interval={5000}>
        {images.map((image,idx)=>{
            const image_url  = makeImageUrl("listings", record_id, image)??image
            return(
                <div key={idx}>
                    <Image
                    priority={true} 
                    height={500}
                    width={500}
                    src={image_url}
                    className='w-auto  h-full object-fill aspect-video'  
                    alt={image}/>
                    <p className="legend">{image}</p>
                </div>
            )
          })}
 

        </Carousel>
 </div>
);
}
