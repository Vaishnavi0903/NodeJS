const express = require('express');
const dbConnection = require('./mongodb');
const app = express();

app.get('/', async (req, res) => {
    let data = await dbConnection();               //embedding database 
    let result = await data.find().toArray();
    res.send(result);
});

//request is used when we are getting api from db to node
//response is used when we are responding from server to api 

app.listen(5000);
