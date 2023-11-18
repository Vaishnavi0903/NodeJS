// Refer config.js and books.js

const express = require('express');
require('./config');
const books = require('./books');

const app = express();

app.use(express.json());

app.post("/create" , async (req,res)=>{
    let data = new books(req.body);
    const result = await data.save();
    console.log(result);
    res.send(result);
})

app.get("/list" ,  async (req , res) => {
    let data = await books.find()               // It doesnot require Schemas
    res.send(data);
})

app.delete("/delete/:_id" ,  async (req , res) => {
    let data = await books.deleteOne(req.params);
    res.send("done");
})

app.put("/update/:_id") ,  async (req , res) => {
    let data = await books.updateOne(
        req.params , {$set :  req.body }      //req.params are by themselves object
    );
    res.send("done");
}



app.listen(5000);