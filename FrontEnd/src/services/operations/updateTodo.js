import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import {todoApi} from "../apis";
const {UPDATE_TODO} = todoApi;


export async function updateTodo(todo,id){
    const todoId = toast.loading("Updating Todo");
    const {title,description,body,owner} = todo;
    // console.log("inside operations ", title,owner);
    let updatetodo= [];
    try {
      // algo
      // get data 
      // make api call
     // check if success
     // return success 

     const updateTodo = await apiConnector("PUT",UPDATE_TODO+`${id}`,{
        title,
        description,
        body,
        owner
     });

     if(!updateTodo?.data?.success){
        throw new Error("Todo can not be updated")
     }
      updatetodo = updateTodo;
      toast.dismiss(todoId);
      
    } catch (error) {
        console.log("Todo can not be updated");
        toast.error("Todo can not be updated ")
    }
  
    toast.dismiss(todoId);
    return updatetodo;
 
}