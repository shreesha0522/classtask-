
import bcryptjs from "bcryptjs";
import { UserRepository } from "../repository/user.repository";
import { CreateUserDto, LoginUserDto } from "../dtos/user.dtos";
import { HttpError } from "../errors/http-error";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config"; 

const userRepository = new UserRepository();

export class UserService {
    async createUser(data: CreateUserDto) {
        // Check if email already exists
        const emailCheck = await userRepository.getUserByEmail(data.email);
        if (emailCheck) {
            throw new Error("Email already in use");
        }

        // Check if username already exists
        const usernameCheck = await userRepository.getUserByUsername(data.username);
        if (usernameCheck) {
            throw new Error("Username already in use");
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(data.password, 10);

        // Create user with hashed password
        const newUser = await userRepository.createUser({
            ...data,
            password: hashedPassword
        });

        return newUser;
    }
    async loginUser(data:LoginUserDto){
            const user=await userRepository.getUserByEmail(data.email);
            if(!user){
                throw new HttpError(404,"User not found");
    
            }
            // compare password
            const validPassword =await bcryptjs.compare(data.password,user.password);
            // plaintext,hashed
            if(!validPassword){
                throw new HttpError(401,"Invalid credentials");
            }
            //generate JWT
            const playload={ //user identifier
                id:user._id,
            email:user.email,
        username:user.username,
    firstname:user.firstName,
lastname:user.lastName,
role:user.role
}
const token=jwt.sign(playload,JWT_SECRET,{expiresIn:'30d'}); //30 days
return {token,user};

        }
}