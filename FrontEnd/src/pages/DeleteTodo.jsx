import React from 'react'
import Button from '../components/Common/Button'
import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { deleteTodo } from '../services/operations/deleteTodo'

const DeleteTodo = () => {
  const param_id = useParams(); // get parameter
  const id = param_id.id; // accessing id from if
  console.log(id);
  const navigate = useNavigate();

  const deletetodo = async()=>{
     await deleteTodo(id);
     navigate('/');
  }
  return (
    <div className='flex justify-center items-center flex-col'>
      <div>
          <h1>Do you really want to Delete this Todo? </h1>
      </div>
      <div className='flex '>
        <Button onclick={deletetodo} >
           Yes
        </Button>
        <Button navigated={-1}>
          No 
        </Button>
      </div>
    </div>
  )
}

export default DeleteTodo