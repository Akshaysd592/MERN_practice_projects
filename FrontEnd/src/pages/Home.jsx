import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Homepage/Header'
import Footer from '../components/Homepage/Footer'

export const Home = ()=>{
     return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
       
     )
}



