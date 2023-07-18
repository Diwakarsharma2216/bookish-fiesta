const express=require("express")
const { connection } = require("mongoose")
const { AuthRouter } = require("./routes/Auth.routes")
const { carRouter } = require("./routes/Car.routes")
const { specificationRouter } = require("./routes/specification.routes")
require("dotenv").config()

const app=express()

app.use(express.json())

// ### userRouter ####
app.use("/users",AuthRouter)


// ### userRouter ####
app.use("/car",carRouter)

// ### specification ####
app.use("/specification",specificationRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        
        console.log(`server is runnig at ${process.env.PORT}`)
        console.log(">>>>>>>>>>>connected To The DataBase>>>>>>>>")

    } catch (error) {
        console.log(error)
    }
})