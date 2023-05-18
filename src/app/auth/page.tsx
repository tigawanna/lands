import { UserSigninForm } from "@/my-ui/shared/admin/UserSigninForm";


export default function page({}){
return (
    <div className="w-full flex min-h-screen flex-col items-center justify-start p-2">
        <UserSigninForm />
    </div>
);
}
