
import { Request, Response } from "express";
import z, { success } from "zod";
import { ca } from "zod/v4/locales";
import { UserService } from "../services/user.services";
import { CreateUserDto, LoginUserDto } from "../dtos/user.dtos";

let userService = new UserService();

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const parsedData = CreateUserDto.safeParse(req.body); //validate request body
            if (!parsedData.success) { //validation failed
                return res.status(400).json(
                   {success:false,message:z.prettifyError(parsedData.error)}
                )
            }
            const userData: CreateUserDto = parsedData.data;
            const newUser = await userService.createUser(userData);
            return res.status(201).json(
                { success: true, message:"User Create", data: newUser }
            );
        } catch (error:Error| any) { //exception hanling
            return res.status(error.statusCode ?? 500).json(
                {success:false,message:error.message ||"Internal Server Error"}
            );  
        }
    }

    async login(req:Request,res:Response){
        try {
            const parsedData=LoginUserDto.safeParse(req.body);
            if (!parsedData.success) {
                return res.status(400).json(
                    {success:false,message:z.prettifyError(parsedData.error)}
                )
            }
            const loginData:LoginUserDto=parsedData.data;
            const {token,user}=await userService.loginUser(loginData);
            return res.status(200).json(
                {success:true,message:"Login successful",data:token,user}
            );
        }catch (error:Error| any) {
            return res.status(error.statusCode ?? 500).json(
                {success:false,message:error.message ||"Internal Server Error"}
            );
        }
    }
}