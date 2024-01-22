import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import {todoApi} from '../apis'
const{CREATE_TODO} = todoApi;



export const createTodo = async (todo,navigate)=>{
    console.log(CREATE_TODO);
    console.log("inside operations" ,todo);
    let todocreated;
     const toastId = toast.loading("Creating a Todo")
     try {
        // get data as a parameter 
        // make api call to create todo
        // check if success 
        // if no success then return no success
        // else return success

        if(!todo){
            throw new Error("Todo data is required..")
        }
        const {title,description,body, owner} = todo;
       console.log("step 1 here")
        const todoCreated = await apiConnector('POST',CREATE_TODO,{
            title:title,
            description:description,
            body,
            owner
        });
        todocreated = todoCreated;
        console.log(todoCreated)
        console.log("step 2 ")
        if(!todoCreated?.data?.success){
            throw new Error("Todo Can not be created")
        }

        toast.success("Todo Created successfully ")
        
    
        

        
     } catch (error) {

        console.log(
         "Todo can not be created"
        )

        toast.error("Todo can not be created...")
        
     }

     toast.dismiss(toastId);
     return todocreated;

    
}