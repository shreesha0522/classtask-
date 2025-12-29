import z from "zod";
import { UserSchema } from "../types/user.type";

export const CreateUserDto = UserSchema.pick({
    firstName:true,
    lastName:true,
    email:true,
    username:true,
    password:true
}).extend(//add new attribute to zod
    {
        confirmPassword:z.string().min(6)
    }
).refine(// extra validation for confirmPassword
    (data)=>data.password == data.confirmPassword,
{
    message:"Passwords do not match",
    path:["confirmPassword"]
})
export type CreateUserDto=z.infer<typeof CreateUserDto>;

export const LoginUserDto = z.object({
        email:z.email(),
        password:z.string().min(6)
    });
    export type LoginUserDto = z.infer<typeof LoginUserDto>;
