import dotenv from "dotenv";
dotenv.config();

export const PORT: number = 
process.env.PORT ? parseInt(process.env.PORT) : 3000;
export const MONGOOB_URI: string = 
process.env.MONGOOB_URI || 'mongodb+srv://shreeshashrestha2004_db_user:HqsSzupmWvBXdalP@cluster0.kds04gj.mongodb.net/';

//Application lvel constains,with fallbacks
//if .env variables are not set


export const JWT_SECRET:string=
    process.env.JWT_SECRET || 'default';
