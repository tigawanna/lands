

import { PageLoading } from "@/my-ui/shared/loaders/PageLoading";


interface loadingProps {

}

export default function Loading({}:loadingProps){
return (
 <div className='w-full h-screen flex items-center justify-center'>
    <PageLoading/>
 </div>
);
}
