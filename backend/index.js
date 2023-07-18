const express=require("express")
const { connection } = require("mongoose")
const app=express()
require("dotenv").config()
app.use(express.json())




app.listen(process.env.PORT,async()=>{
    try {
        await connection
        
        console.log(`server is runnig at ${process.env.PORT}`)
        console.log(">>>>>>>>>>>connected To The DataBase>>>>>>>>")

    } catch (error) {
        console.log(error)
    }
})