const express = require("express")
const http = require('http')
const cors = require('cors')
const port = process.env.PORT || 5000;
const {Server} = require('socket.io')

const app = express()

const server = http.createServer(app)
const io = new Server(server);

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Chat server is running");
})


server.listen(port,()=>{
    console.log("Server is running on port",port)
})