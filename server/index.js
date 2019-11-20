const express = require("express");
const socketio = require('socket.io')
const http = require("http")
var cors = require('cors')


// DATA
const PORT = process.env.PORT || 5000

const router = require("./router")
const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on("connection", (socket) => {
    console.log("User jadid mowa7e!!");
    socket.on("join", ({name, room}) => {
        console.log(`${name} => ${room}`)
       // console.log(data)
    })
    
    socket.on("disconnect", () => {
        console.log("mexa 3and lah lil2asaf")
    })
})

app.use(cors())
app.use(router)

server.listen(PORT, console.log(`Listening to port ${PORT}`))