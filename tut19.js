const express = require('express');
const app = express();

const reqFilter = (req , res , next) =>
{
    if(!req.query.age)
    {
        res.send("pls provide age")
    }
    else if(req.query.age<18)
    {
        res.send("You cannot access this page")
    }
    else{
        next();
    }
}

app.use(reqFilter);
app.get('/' , (req,res)=>
{
    res.send('Welcome to Home Page')
})
app.get('/about' , (req,res)=>
{
    res.send('Welcome to About Page');
})
app.listen(5000);




