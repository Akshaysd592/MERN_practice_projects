import { Todo } from "../models/todo.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



const getAllTodos = asyncHandler(async(req,res)=>{
    try {
        //algo
        // find all todo using find function
        // nothing obtaind then error no todo available
        // return response

        const allTodos = await Todo.find({});

        if(!allTodos){
            throw new apiError(404,"Todos are not available")
        }

        return res.status(200).json(
            new apiResponse(200,allTodos,"All todos are obtained ")
        )
        
    } catch (error) {
        console.log("Can not get all todos");
        throw new apiError(500,"All todos can not be fetched");
    }
})

export {getAllTodos}