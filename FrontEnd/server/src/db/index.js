import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async()=>{
    try {
        const dbresponse = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log(
            "Database connected successfully with response =>  ", dbresponse.connection.host
        )
    } catch (error) {
         console.log("Database not connected" , error);
         process.exit(1);
    }
}
 

export default dbConnect;