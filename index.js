const express = require('express');
const WebSocket = require('ws');


//Middlewares
var app = express();
app.use("/",express.static(__dirname + "/public"));
const wss = new WebSocket.Server({ port : 8000 });
 
wss.on('connection', function connection(ws) {

    ws.on("message",(data)=>{
        console.log(`Yes we are ready to connect ! Lets gooo!`);
        // ws.send("Connection Established !");

        if(data === "Hello")
        ws.send("Heyy from server !");
    })

    
    console.log("Connection established from server !");
});
 


app.listen(8080,()=>console.log("Server is running !"));