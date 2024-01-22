import React, { useEffect, useState } from 'react'
import { fetchAllTodos } from '../services/operations/fetchAllTodo.js';
import Loader from '../components/Todocomponents/Loader.jsx';
import ShowTodo from '../components/Homepage/ShowTodo.jsx';
import { MdOutlineAddBox } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Content = () => {
  
    const [loading,setLoading]  = useState(false);
    const [todos,setTodos] =  useState([]);
    const navigate = useNavigate();

    // useeffect to get all todo's
    useEffect( ()=>{
    //   ;(async()=>{ setLoading(true);
    //     let data = await fetchAllTodos(); 
    //     if(data){
    //         setTodos(data);
    //     }
    //     setLoading(false)
    // })()
    const getdata = async()=>{
        setLoading(true);
        const data = await fetchAllTodos();
        if(data){
            setTodos(data);
            setLoading(false);
        }
       
    }
    getdata();
    },[])

    


  return (
    loading?(<Loader/>):(
            <>
            <div className='w-full bg-slate-600 flex justify-center hover:cursor-pointer   text-white ' onClick={()=>{navigate("/createtodo")}} >
            <div className='flex leading-none  gap-4 bg-slate-700 p-4  justify-center w-fit rounded-lg '> 
                <h1>Add Todo</h1>
                <div >
                <MdOutlineAddBox className='w-10 font-bold ' width={"40px"} height={"20px"} />
                </div>
               
            </div>
            </div>
             {
              todos?(
             todos.map((todo,id)=>(<ShowTodo todo={todo} key={id}/>))
             ):(<div className='text-blue-700 w-5 h-4 font-extralight'>Todos are not available ...</div>)
             }
            </>  
         
           
    )
  )
}

export default Content