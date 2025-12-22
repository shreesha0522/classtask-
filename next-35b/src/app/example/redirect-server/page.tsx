"use client";
import { loginAction } from "./action/login"

import {startTransition, useState, useTransition} from "react";
export default function page(){
    const [username,setUsername]=useState("");
    const[isPending,startTransaction]=useTransition();
//     const handleSubmit =async () =>{
//     try{
//         await loginAction(username);

//     }catch(err:Error | any){
//         alert(err.message ?? "form error")
//     }
// }
const handleSubmit = () => {
    startTransition ( async () => {
        try{
            
            await new Promise (resolve => setTimeout(resolve,2000)); //simulate delay
            await loginAction(username);
        }catch(err:Error | any){
            alert(err.message ?? " Form error")
        }
    });
    //navigation will be pending wont block the ui
    //can use state pending to new 

}



return(
    <div className ="mx-auto max-v-ad border p-4">
        <label>Username</label>
        <input onChange = { (e) => setUsername(e.target.value)}></input>
        <div>
            <button
            disabled={isPending}
            className="p-2 bg-gray-600 diabled:bg-grey-300"
            onClick={handleSubmit} > {isPending?"Loding" : "Submit"} </button>
        </div>
    </div>
);
}

