import { CreateUserDto, LoginUserDto } from "../../dtos/user.dtos";
import { HttpError } from "../../errors/http-error";
import { UserRepository } from "../../repository/user.repository";
import bycrptjs from "bcryptjs";




let userRepository = new UserRepository();
export class AdminUserService {
    async createUser(data: CreateUserDto) {
        // same as src/services/user.service.ts
    }
    async getAllUsers() {
        const users = await userRepository.getAllUsers();
        //transformation or filtering logic can be added here
        return users;
    }

    
    async getOneUser(id: string) {
        const user = await userRepository.getUserById(id);
        if (!user) {
            throw new HttpError(404, "User not found");
        }
        return user;
    }   
    //continue all

}