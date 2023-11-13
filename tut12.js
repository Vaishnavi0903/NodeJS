// Introduction to ExpressJS

const express = require('express');
const app = express();
app.get('' , (req , res)=>{
     res.send("Hello , this is Home Page");
})
app.get('/about' , (req , res)=>{
     res.send("Hello , this is About Page");
})
app.get('/help' , (req , res)=>{
     res.send("Hello , this is Help Page");
})

app.get('/welcome' , (req , res)=>{
    res.send("Hello , this is Welcome Page");
})



app.listen(5000);