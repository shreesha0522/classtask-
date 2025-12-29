import mongoose from "mongoose";
import {MONGOOB_URI} from "../config"

export async function connectDatabase(){
    try{
        await mongoose.connect(MONGOOB_URI);
        console.log("Connected to MONGODB");
    }catch(error){
        console.error("Database Error",error);
        process.exit(1); //Exit process with failure
    }
}

