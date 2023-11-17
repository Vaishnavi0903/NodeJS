const express = require('express');
const dbConnection = require('./mongodb');
const app = express();
const mongodb = require('mongodb')

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

app.put('/' , async (req , res) => {
       let data = await dbConnection();
       let result = data.updateOne({title: req.body.title} , {$set:req.body});
       res.send({result :"updated"})
})

//Code to update the title by passing condition of title
// url in postman will be : http://localhost:5000/title_name
// app.put('/:title' , async (req , res) => {
//        let data = await dbConnection();
//        let result = data.updateOne({title: req.params.title} , {$set:req.body});
//        res.send({result :"updated"})
// })

app.delete("/:id" , async (req , res) =>
{
    const db = await dbConnection();
    const result = await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    console.log(result);
    res.send("done");
})

//request is used when we are getting api from db to node
//response is used when we are responding from server to api 

app.listen(5000);

