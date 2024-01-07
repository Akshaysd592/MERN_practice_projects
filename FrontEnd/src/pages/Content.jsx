import React, { useEffect, useState } from 'react'
import { fetchAllTodos } from '../services/operations/fetchAllTodo.js';


const Content = () => {
    const [loading,setLoading]  = useState(false);
    const [todos,setTodos] =  useState([]);

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

        }
        setLoading(false);
    }
    getdata();
    },[])


  return (
    loading?(<div className="loader"></div>):(<div>
           All ok 
    </div>)
  )
}

export default Content