

import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector.js";
import { todoApi } from "../apis";

const {GET_ALL_TODO} = todoApi;


export const fetchAllTodos = async()=>{
    const toastload = toast.loading("Getting Todos");
    let result ;
    try {
      const tododata = await apiConnector('GET',GET_ALL_TODO);
      
       if(!tododata?.data?.success){
        throw new Error("Todo data can not be fetched ")
       }
       
      result =  tododata?.data?.data;
      console.log("step 3 ",result)

    } catch (error) {
         console.log("Error occured while fetching all todos.... ")
         toast.error("Error in getting all todos ")

    }

    toast.dismiss(toastload);

    return result;

}