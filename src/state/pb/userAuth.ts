import {cookies, headers} from 'next/headers'; 
export async function agnosticUserAuth(){
if(typeof window !== 'undefined'){
    console.log("client cookies")
    return document.cookie
}console.log("server cookies")
return await cookies().get('pb_auth')?.value

}
