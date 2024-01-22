import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Back = ({children,icon}) => {
    const navigate = useNavigate();
  return (
    <button className={`p-4 bg-gray-700 text-white rounded-md`}  onClick={()=>{navigate(-1)}}>
        {children}  {icon}
    </button>
  )
}

export default Back