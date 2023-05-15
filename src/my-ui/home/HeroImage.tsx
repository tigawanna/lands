import Image from "next/image";
import Link from "next/link";

interface HeroImageProps { }
export const HeroImage = ({ }: HeroImageProps) => {

    return (
        <div className="w-full h-full flex items-center justify-center relative text-white ">
            <Image
                src={'/land-big.webp'}
                alt="big land"
                width={800}
                height={400}
                priority={true}
                className={"relative object-cover md:h-[80vh] w-screen"}
            />



            <div className=" w-full h-full bg-opacity-40 z-3 absolute top-0 bottom-0 bg-slate-700 
               flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-5">
           
                <div className="w-[90%] md:w-[40%] flex flex-col items-start justify-start gap-5">
                <div className="w-full text-4xl sm:text-5xl  md:text-6xl font-bold font-serif capitalize first-letter:text-purple-400">
                {" "}<div>find</div> your Dream property with us</div>
                
                <div className=" w-full ">
                <Link href={"listings"}
                className="flex gap-2 w-fit items-center justify-center
              
                border-b-4 border-b-slate-400 text-purple-400 text-lg md:text-3xl font-bold p-2 mt-2 ">
                Browse full catalog{" "}
                </Link>
                </div>
                </div>




            </div>




        </div>
    );
};

