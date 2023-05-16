"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CollapsableProps {
text:string
}

export function Collapsable({text}:CollapsableProps){
    const [hideDetails, setHideDetails] = useState(true);
    // console.log("hidden ====  ",hideDetails)
return (
 <div className='w-full h-full flex items-center justify-center'>
        <p className={hideDetails ? "text-sm line-clamp-5 mt-4 w-full animate-in slide-in-from-top" : "text-sm mt-4 w-full animate-in slide-out-from-bottom"}>
            {text}
        </p>
        {hideDetails&&<ChevronDown className="h-4 w-4" onClick={() => setHideDetails(!hideDetails)} />}
        {!hideDetails &&<ChevronUp className="h-4 w-4" onClick={() => setHideDetails(!hideDetails)} />}

 </div>
);
}
