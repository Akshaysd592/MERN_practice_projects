import mongoose from 'mongoose'
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Todo } from '../models/todo.model.js';

const createTodo =  asyncHandler(async(req,res)=>{
    try {
        // algo
        // get data
        // validate is empty or not
        // using create function to make db entry
        // return response using apiResponse object
        
        const {title,description,body,owner} = req.body;
    
         console.log("data obtained is ", title);
        // if(!title || !description || !body  ){
        //     throw new apiError(400,"All fields are required");
        // }

        // if(
        //     [title.description,body,author].some((field)=> field?.trim() === "")
        //   ){
        //     throw new apiError(401,"All fields are required");

        //   }
        console.log("we are here 1")
        const tododata = await Todo.create({
            title,
            description,
            body,
            owner,
        })
        console.log("we are here 2")

        if(!tododata){
            throw new apiError(500,"Todo can not be created");
        }

         console.log("we are here 3")
        return res.status(200).json(
            new apiResponse(200,tododata,"Todo created successfully...")
        )
       
        
    } catch (error) {
        console.log("Can not create todo using createTodo.controller.js")
        throw new apiError(500,error.message|| "can not create todo")
    }
})

export  {createTodo};