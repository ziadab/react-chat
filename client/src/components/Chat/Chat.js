import React, { Component, useEffect, useState } from 'react'
import queryString from "query-string"
import io from "socket.io-client"

const Chat = ({ location }) => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const ENDPOINT = "127.0.0.1:5000"
    

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        const socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        // console.log(socket)
        socket.emit("join", {name, room})

        
    }, ENDPOINT, location.search)

    return (
        <h1>
            Chat
        </h1>
    )
}

export default Chat
