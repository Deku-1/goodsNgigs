
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
const app = express();
const port = 3000 ;
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
const server = http.createServer(app);
const io= new Server(server)
io.on("connection",(socket)=>{    
    socket.on('join_room',(data)=>{
     socket.join(data);
     console.log(`user with id ${socket.id} joined the room ${data}`)
    })
    socket.on("disconnect",()=>{
        console.log('user disconnected',socket.id)
    })
})



server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb+srv://deku_1:Adity%40123@cluster0.wmxuhle.mongodb.net/', { dbName: "courses" });