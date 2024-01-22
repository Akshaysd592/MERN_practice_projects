import React from 'react'
import Back from '../components/Common/Back'
import { useParams } from 'react-router-dom'
import GetTodoComp from '../components/Todocomponents/GetTodoComp';

const GetTodo = () => {
  const param_id = useParams();
  // console.log(param_id);
  // console.log(param_id.id);
  return (
    <>
    <Back icon={"->"}>Go Back </Back>
    <div className='flex items-center justify-center flex-col'>  
     <GetTodoComp id={param_id.id} />
    </div>
    </>
   
  )
}

export default GetTodo