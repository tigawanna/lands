import { PageLoading } from "@/my-ui/shared/loaders/PageLoading";
import { ReactProgress } from "@/my-ui/shared/loaders/ReactProgress";

export default function page({}){

return (
 <div className='min-h-screen w-full h-full flex flex-col items-center justify-center'>
    About Page

    <PageLoading />
 </div>
);
}

