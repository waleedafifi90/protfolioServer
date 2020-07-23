const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log("this is port",PORT);
});

server.use(express.static('./public'));

server.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

server.get('/test',(request,response)=>{
    response.send('you are doing great');
});
