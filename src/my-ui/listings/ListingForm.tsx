"use client"
import { ListingForminput } from "@/state/pb/api/listings";
import { useFormHook } from "../shared/form/useFormHook";

interface ListingFormProps {
    label:string
}

export function ListingForm({label}:ListingFormProps){

const{error,handleChange,input,setError,setInput,validateInputs} = useFormHook<ListingForminput>({
initialValues:{
    amenities:null,
    description:"",
    price:20000,
    images:[],
    latitude:0,
    longitude:0,
    location:"",
    status:"available",
    owner:"",
}
 }) 
    const StatusOptions = [
        { label: "Available", value: "available" },
        { label: "Sold", value: "sold" },
    ];

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("about to save ",input)
        // mutation.mutate(input);
    };


return (
 <div className='w-full h-full flex items-center justify-center'>
        <form
            onSubmit={handleSubmit}
            className="w-[90%] md:w-[60%] h-full border-2 shadow-xl rounded-xl p-3
            flex flex-col items-center justify-center bg-white dark:bg-black dark:text-white">
            <div className="w-[95%]  text-xl font-bold text-center p-2">
                {label}
            </div>
        </form>

 </div>
);
}
