const express = require("express")
const http = require('http')
const cors = require('cors')
const port = process.env.PORT || 5000;
const socketIO = require('socket.io')

const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)
const io = socketIO(server);

io.on("connection",(socket)=>{
    console.log('New connection added')
    // socket.on("joined",({user})=>{
    //     console.log(`${user} has joined`)
    // })
})



app.get('/', (req,res)=>{
    res.send("Chat server is running");
})


server.listen(port,()=>{
    console.log("Server is running on port",port)
})