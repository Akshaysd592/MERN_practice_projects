import { useState } from 'react'
import {BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'

import ErrorPage from './pages/ErrorPage'
import UpdateTodo from './pages/UpdateTodo'
import DeleteTodo from './pages/DeleteTodo'
import GetTodo from './pages/GetTodo'
import Content from './pages/Content'
import {Toaster} from 'react-hot-toast'
import VideoPlayer from './pages/VideoPlayer'
import CreateTodo from './pages/CreateTodo'

function App() {
     
     const router = createBrowserRouter([
      {
        path:'/',
        element: <Home/>,// declare header and footer and in middler outlet component coming from react-router-dom to render childen
        errorElement:<ErrorPage/>,
        children:[
          {
              path:"",
              element:<Content/>
          },
          {
            path:"createtodo",
            element:<CreateTodo/>
          },
          {
            path:'create-todo',
            element:<VideoPlayer/>
          },  
          {
            path:"updatetodo/:id",
            element:<UpdateTodo/>

          },
          {
            path:"deletetodo/:id",
            element:<DeleteTodo/>
          },
          {
            path:"gettodo/:id",
            element:<GetTodo/>
          }
        ]
      }
     ])

  return (
      <>
       <RouterProvider router={router}/>
       <Toaster/>
      </>
  )
}

export default App
