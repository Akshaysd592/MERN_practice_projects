import { Todo } from "../models/todo.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



const deleteTodo = asyncHandler(async(req,res)=>{
    try {
        // algo
        // req.id from params
        // check id exist or not
        // delete todo using findbyIdanddelete
        // return response no data just message
        const {id} = req.params;
        console.log("id obtained is",id)

          await Todo.findByIdAndDelete({_id:id})
      

        return res.status(200).json(
            new apiResponse(200,"","todo deleted successfully...")
        )

        
    } catch (error) {
        console.log("Todo can not be deleted");

        throw new apiError(500,error.message || "can not delete the todo ")
        
    }
}
)


export {deleteTodo}