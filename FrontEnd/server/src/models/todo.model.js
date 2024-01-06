import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title:{
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
         type:String
    }

},
{
    timestamps:true
}
)

export const Todo =  mongoose.model("Todo", todoSchema);