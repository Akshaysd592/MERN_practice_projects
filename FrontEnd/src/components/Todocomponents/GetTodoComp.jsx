import React, { useEffect, useState } from 'react'
import { getSingleTodo } from '../../services/operations/getSingleTodo';
import { Todo } from '../../../server/src/models/todo.model';

const GetTodoComp = ({id}) => {
  // console.log("id inside component",
    // id);
    const [todo,setTodo] = useState([]);
    const [loading,setLoading] = useState(false);

  useEffect(()=>{
      setLoading(true);
      ( async function getData(){
        const todoData = await getSingleTodo({id});
        if(todoData){
          setTodo(todoData);
          setLoading(false);
        }
        else{
          console.log("Not able to get todo data ")
        }

      })();


  },[])

  return (
      

    <section className="text-gray-600 body-font ">
    <div className="container px-5 py-24 mx-auto w-24">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 ">
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Todo</h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{todo.title} </h1>
            <p className="leading-relaxed mb-3">{todo.description}</p>
            <a className="text-indigo-500 inline-flex items-center">{todo.body}
              {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg> */}
            </a>
            <div className="text-center mt-2 leading-none flex justify-center items-center absolute bottom-0 left-0  right-0 w-full py-4">
              <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{todo.owner}
              </span>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default GetTodoComp