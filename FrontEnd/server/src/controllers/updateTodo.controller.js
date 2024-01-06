import { Todo } from "../models/todo.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const updateTodo = asyncHandler(async(req,res)=>{
    try {
        // get id 
        // check data by id
        // if data not found then return apiError
        // return success
        const {id} = req.params;
        const {title,description,body,owner} = req.body;

        const updateData = await Todo.findById({_id:id});

        if(!updateData){
            throw new apiError(500,"todo can not be updated")
        }


        updateData.title = title;
        updateData.description = description;
        updateData.body = body;
        updateData.owner = owner ;
        updateData.save();

        
     return res.status(200).json(
        new apiResponse(200,updateData,"todo updated successfully")
     )
        
    } catch (error) {
        console.log("can not update todo")
        throw new apiError(500,"can not update todo");
    }
})

export {updateTodo}