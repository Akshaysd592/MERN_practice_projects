import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = ({children,navigated,onclick}) => {
    const navigate = useNavigate();
  return (
    <div className='px-4 py-2 bg-slate-600 mb-4 rounded-lg  text-white  ' onClick={(onclick?(()=>onclick()):(null))}>
       <button onClick={()=>{navigate(navigated)}} >
        {children}
       </button>
    </div>
   
  )
}

export default Button