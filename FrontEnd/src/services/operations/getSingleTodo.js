import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";

import {todoApi} from '../apis'
const {GET_TODO} = todoApi;




export async function getSingleTodo ({id}){
    const toastId = toast.loading("Getting todo data..")
    let result;
    // console.log("Inside services " , id);

    try {
    //    console.log("step 1");
        const response = await apiConnector('GET',GET_TODO +`${id}`);
        // console.log("step 2 ");
        if(!response?.data?.success){
            throw new Error("Todo data not found ");
        }
        // console.log("step 3 ")
        // console.log("response -> " , response);
        // assign values to result
        result = response?.data?.data;
        // console.log(result)
        // console.log("step 4 ")
        
    } catch (error) {
        console.log("Not able to get todo data ");
        toast.error("Not able to get todo")
    }
    toast.dismiss(toastId);
    console.log("result returned");
    return result;

}

