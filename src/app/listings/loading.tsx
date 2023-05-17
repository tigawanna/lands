// export const dynamic = 'auto';
// export const dynamicParams = true;
// export const revalidate = 0;
// export const fetchCache = 'auto';
// export const runtime = 'nodejs';
// export const preferredRegion = 'all';

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
