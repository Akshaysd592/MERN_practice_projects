import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import {todoApi} from '../apis';
const {DELETE_TODO}  = todoApi;



export const deleteTodo = async(id)=>{
    const toastId = toast.loading("Deleting the todo ");
    console.log("inside operations ", id);

    try {
        console.log("here 1")
     const deletetodo=  await apiConnector("DELETE",DELETE_TODO+`${id}`) // need to send the id to be obtained in backend using req.params
        
     console.log("here 2")
        //  if(!deletetodo?.data?.success){
        //     throw new Error("Todo can not be deleted ..");
        //  }

        toast.success(
            "Todo Deleted Successfully "
        )
        
    } catch (error) {
        console.log("Todo can not be deleted ... inside operations ")
        toast.error("Can not delete the todo")
        
    }
    toast.dismiss(toastId);

}