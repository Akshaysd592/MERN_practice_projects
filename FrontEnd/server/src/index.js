// db function and server start
import express from 'express'
const app = express();
import todorouter from './routes/todo.routes.js'
import cors from 'cors'
import dotenv, { parse } from 'dotenv'
dotenv.config({
    path:'./env'
})

app.use(express.json( 
    {limit:"16kb"}
))

app.use(cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true
}))




app.use('/api/v1/todo',todorouter);


import dbConnect from './db/index.js'



dbConnect().then(()=>{ // database connected
        app.listen(process.env.PORT,()=>{ // server started 
            console.log(`Server started at port ${process.env.PORT}`)
        })

})
.catch(()=>{
     console.log("server can not be connected ")
})





app.get('/',(req,res)=>{
    res.send("Hello ji this is home page");
})



