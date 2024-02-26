const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws) {
    console.log("New Client Connected");
    ws.send('Welcome new client');
    ws.on('error', console.error);
    ws.on('message', function message(data) {
      console.log('received: %s', data);
      ws.send("Got your message it's:",data)
    });
  });

app.get('/' ,(req,res)=> res.send("Hello World"));

server.listen(3000,()=> console.log("Listening on port 3000"));
