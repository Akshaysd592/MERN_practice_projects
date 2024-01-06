import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {Todo} from '../models/todo.model.js';
import {apiResponse} from "../utils/apiResponse.js"


const getTodo = asyncHandler(async(req,res)=>{
    try {
        // algo
        // get id from param
        // no id then return error 
        // get data by id
        // if no data then throw error
        // return success
       const {id} = req.params;

       const todoData = await Todo.findById({_id:id});

       if(!todoData){
         throw new apiError(500,"Todo can not be fetched")

       }

       return res.status(200).json(
        new apiResponse(200,todoData,"todo is fetched")
       )

        
    } catch (error) {
        console.log("Can not get todo");
        throw new apiError(500,"can not get todo")
        
    }
})

export {getTodo}