import { concatErrors } from "@/state/utils/concatErrors";

interface ErrorOutputProps {
    error: {
        name: string,
        message: string
}
}

export function ErrorOutput({error}:ErrorOutputProps){

return (
 <div className='w-[90%] h-full flex items-center justify-center m-1 px-2'>
    <p className="text-center p-1  bg-red-200 text-red-900 rounded-lg">
            {concatErrors(error)}
     </p>
 </div>
);
}
