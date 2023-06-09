import { concatErrors } from "@/state/utils/concatErrors";

interface ErrorOutputProps {
    error: {
        name: string,
        message: string
}
}

export function ErrorOutput({error}:ErrorOutputProps){
console.log("error ",error)
return (
 <div className='w-[90%] min-h-screen h-full flex items-center justify-center m-5 px-2'>
    <p className="text-center p-4  bg-red-200 text-red-900 rounded-lg">
            {concatErrors(error.message)}
            {/* {JSON.stringify(concatErrors(error))} */}
     </p>
 </div>
);
}
