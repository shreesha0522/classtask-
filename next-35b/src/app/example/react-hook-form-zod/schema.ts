import {z} from "zod";
export const loginSchema=z.object(
    {
        email:z.email({message:"Email milena"}),
        password:z.string().min(6,{message:"Password pugena"})
    }
 )

 export type LoginForm=z.infer<typeof loginSchema>;