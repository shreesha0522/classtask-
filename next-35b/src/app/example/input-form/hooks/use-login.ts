import {useState, ChangeEvent} from "react";
// hook naming convention: "use" + functionality

export const useLoginForm =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword=(e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
    }

    const handleSubmit =()=>{
       const loginData = {
        email,
        password
    };
    alert ("Login with" +email +"" +password);
    // call api later
}
return {
    email,
    password,
    handleEmail,
    handlePassword,
    handleSubmit
}
}