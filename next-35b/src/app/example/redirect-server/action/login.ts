"use server"; // optional
import {redirect} from "next/navigation";
export async function loginAction(username:string){
    if(!username){
        throw new Error ("username is required");

    }
    if( username == "admin"){
         return redirect ("/example/input-form");
    }else{
        return redirect("/example/state");
    }
}
//classroom Task
//create a new url-path for /exaple/orders
// /example/orders/success -> "Display Success"
// /example/orders/failure -> "Display failure"
// /example/orders/unauthorized -> "display Unauthorized"
//on /example /orders
//input for "status", "price" with states
//make 2 button apply  and next
//on "apply" button
//use client side ridirect to check if price is below 0
//if below redirect to /example/unauthorized
// on "next" button
//use server  side redirect to check if status is "active ," inactive"
//if active redirect to  "/example/orders/success"
//if inactive redirect to "/exaple/orders/failure"
//if empty or not "active/inactive" -Display error message
// make use of useTransition is empty  "redirection error message"

