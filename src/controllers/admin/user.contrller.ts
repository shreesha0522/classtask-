import { AdminUserService } from "../../services/admin/user.service";
import{ Request,Response} from "express";
import z from "zod";
import { CreateUserDto } from "../../dtos/user.dtos";

let adminUserService = new AdminUserService();
export class AdminUserController {
    async createUser(req:Request,res:Response){
      //cann be same as AuthController.register
    }
    async getOneUsers(req:Request,res:Response){
        try {
            const userId = req.params.id; //routes/:id
            const user = await adminUserService.getOneUser(userId);
            return res.status(200).json(
                {success:true,data:user}
            );
        }catch (error:Error| any) {
            return res.status(error.statusCode ?? 500).json(
                {success:false,message:error.message ||"Internal Server Error"}
            );  
        }
    }
}