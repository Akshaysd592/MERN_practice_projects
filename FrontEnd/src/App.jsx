import { useState } from 'react'
import {BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
import CreateTodo from './components/Todocomponents/CreateTodo'
import ErrorPage from './pages/ErrorPage'
import UpdateTodo from './pages/UpdateTodo'
import DeleteTodo from './pages/DeleteTodo'
import GetTodo from './pages/GetTodo'

function App() {
     
     const router = createBrowserRouter([
      {
        path:'/',
        element: <Home/>,// declare header and footer and in middler outlet component coming from react-router-dom to render childen
        errorElement:<ErrorPage/>,
        children:[
          {
            path:'createtodo',
            element:<CreateTodo/>
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
      </>
  )
}

export default App
