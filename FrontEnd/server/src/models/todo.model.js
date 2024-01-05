import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
        index:true
    },
    description:{
        type:String,
        required:true
    },
    body:{
        type:String,
    },
    owner:{
        type:String,
        required:true
    }

})

export const Todo =  mongoose.model("User", todoSchema);