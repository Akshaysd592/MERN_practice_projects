import React from 'react'
import { MdAllInbox, MdDelete } from "react-icons/md";
import {FaEye} from "react-icons/fa"
import { MdEdit } from 'react-icons/md';
import { Navigate, useNavigate }  from 'react-router-dom';

const ShowTodo = ({todo}) => {
    // const maintitle = todo.title.split(" ").length;
    let maintit = todo.title.split(" ");

    let maintitle ;
    if(maintit.length>10){
      maintitle = `${maintit.join(" ").substring(0,25)}`+"...";
    }
    else{
      maintitle = maintit;
    }

    const navigate = useNavigate();
    
    
   
   

    // const maintitle = `${todo.title.substring(0,25)}...`
  return (
    <div className=' bg-gray-600 gap-4 m-4 p-6 rounded-md text-white font-semibold flex flex-row justify-between items-center '>
       <div>{maintitle}</div>
       
       <div className='flex '>
           <div className='p-4  hover:bg-gray-500' onClick={()=>{navigate("/deletetodo/"+`${todo._id}`)}}>
              <MdDelete/>
           </div>
           <div className='p-4 hover:bg-gray-500 ' onClick={()=>{navigate("/gettodo/"+`${todo._id}`)}}>
              <FaEye />
           </div>
           <div className='p-4 hover:bg-gray-500 ' onClick={()=>{navigate("/updatetodo/"+`${todo._id}`)}}>
              <MdEdit  />
           </div>
       </div>
    </div>
  )
}

export default ShowTodo