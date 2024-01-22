import React from 'react'
import Back from '../components/Common/Back'
import { useParams } from 'react-router-dom'
import UpdateTodoCom from '../components/Todocomponents/UpdateTodoCom';

const UpdateTodo = () => {
  const param_id = useParams();
  console.log(param_id.id);
  return (
    <>   
     <Back icon={"->"}>Go Back </Back>
     <div className='flex items-center justify-center flex-col'>  
        <UpdateTodoCom id={param_id.id} />
    </div>
    </>
   
  )
}

export default UpdateTodo