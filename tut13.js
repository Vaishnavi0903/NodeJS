// Routingss.....

// URL : localhost : 5000?name=Vaishnavi

const express = require('express');
const app = express();
app.get('' , (req , res)=>{
     console.log("data snt by browser " , req.query)
     res.send("Hello , " + req.query.name +" this is Home Page");
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