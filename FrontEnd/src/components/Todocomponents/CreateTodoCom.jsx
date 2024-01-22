import React from 'react'
import {get, useForm} from 'react-hook-form';
import { createTodo } from '../../services/operations/createTodo.js';
import { useNavigate } from 'react-router-dom';



const CreateTodoCom = () => {
  const navigate = useNavigate();
    
  const {register,handleSubmit,formState:{errors}} = useForm();

  const getTodo = async (data)=>{
    
    console.log(data);
    if(data?.author?.length <0){
      data.author = "N/A";
    }
   const todoObtained =   await createTodo(data,"/");

   if(todoObtained?.data?.success){
    navigate('/');
   }
   
  }


  return (
   <form onSubmit={handleSubmit((data)=>getTodo(data))}>
  <div className="container px-5 py-24 mx-auto  bg-red-100">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Todo </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Add up whatEver you want to add</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
            <span className='text-red-600'>*</span>
            <input  type="text" id="title" name="title" {...register('title',{required:true})} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
             {errors.title && <p className='text-red-700'>Title is required...</p>}
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
            <input type="text" id="description" name="description" {...register('description')} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="body" className="leading-7 text-sm text-gray-600">Body</label>
            <span className='text-red-600'>*</span>
            <textarea  id="body" name="body" {...register('body',{required:true})} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            {
              errors.body && <p>Body is Required</p>
            }
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="owner" className="leading-7 text-sm text-gray-600">Author</label>
            <input type="text" id="owner" name="owner" {...register('owner')} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
       
      </div>
    </div>
  </div>
  </form>

  )
}

export default CreateTodoCom