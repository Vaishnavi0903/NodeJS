const express = require('express');
const dbConnection = require('./mongodb');
const app = express();

app.use(express.json());         //MiddleWare which helps data to come from postman

app.get('/', async (req, res) => {
    let data = await dbConnection();               //embedding database 
    let result = await data.find().toArray();
    res.send(result);
});

app.post('/' , async (req , res) => {
      let data = await dbConnection();                // Connection with database
      let result = await data.insertOne(req.body);    // sending data into Mongodb Database
      
      //req.body will have data which we are sending from react/angular/postman
      // console.log(req.body);   // data coming from postman
      res.send(req.body);        // dta send to postman
})

//request is used when we are getting api from db to node
//response is used when we are responding from server to api 

app.listen(5000);

