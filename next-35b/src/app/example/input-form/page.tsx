"use client";
//user interactivity/forms
import {useState,ChangeEvent} from "react";
import { useLoginForm } from "./hooks/use-login";

export default function Page() {
    
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const handleemail=(e:ChangeEvent<HTMLInputElement>)=>{
    //     setEmail(e.target.value);
    //     //e -event,target -element,value -current value of input
    // }
    const{
        email,
        password,
        handleEmail,
        handlePassword,
        handleSubmit
    } = useLoginForm(); // destructure returned object from hook

    const form=useLoginForm(); // entire object from hook

    

    return(
        <div>
            <div>
                <label>Email:</label>
                <input type="email" value={form.email} onChange={form.handleEmail}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={form.password} onChange={form.handlePassword}/>
                
            </div>
            <button onClick={ handleSubmit}>Test</button>
        </div>
    );
}
