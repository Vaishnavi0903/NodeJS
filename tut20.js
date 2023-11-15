// Refer middleware.js


const express = require('express');
const app = express();

const reqFilter = require('./middleware')

const route = express.Router();

//app.use(reqFilter);

route.use(reqFilter);
app.get('/' , (req,res)=>
{
    res.send('Welcome to Home Page')
})
app.get('/users' , reqFilter , (req,res)=>
{
    res.send('Welcome to Users Page');
})
app.get('/about' ,reqFilter ,  (req,res)=>   //1st method to directly use middleware as a parameter
{
    res.send('Welcome to About Page');
}) 
route.get('/contact' ,  (req,res)=>        //2nd method to use it via route(if want middleware : route.get / don't want then app.get)
{
    res.send('Welcome to Contact Page');
})

app.use('/' , route);

app.listen(5000);
