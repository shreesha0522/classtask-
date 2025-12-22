//create a "component" RegisterFormTask
//with username,email,password,confirm password 
//use RegisterFormTask in the register page
//make a custom hhok useRegiserForm to manage the form state and handlers
//carete handlesubmit function that:
//- validation, each field required , eg: if empty alert "field is required"
//-password and confirm password must match, if not alert "passwords do not match"
//-on successful validation, alert "Registered with username: [username], email: [email]"
//use the hook in the RegisterFormTask component

import RegisterForm from "@/app/(auth)/_components/register-form";


export default function RegisterPage() {
    return (
        <div>
           <RegisterForm /> 
        </div>
    );
}
