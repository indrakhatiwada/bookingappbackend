import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
dotenv.config()
const app = express()
const connect = async ()=> {

    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongo")
    } catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDb disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("MongoDb connected")
})


app.get('/',(req,res)=>{
    res.send("Hello from backend")
})

//middleware
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


app.listen(8080,()=>{
    connect();
    console.log("Connected to backend");
})