// Creating a Server

const http = require('http');
// In nodeJs HTTP-Module handles request and response of server

//------------------------------------------------------------------------
// function dataContro (req,res)                                         |
// {                                                                     |
//     res.write("<h1>Hello, This is Vaishnavi Sontakke</h1>");          |
//     res.end();                                                        |
// }                                                                     |
// http.createServer(dataControl).listen(4500);                          |
//------------------------------------------------------------------------


// Same above task is performed just using ARROW Function.
http.createServer((req , res)=>{
    res.write("<h1>Hello, This is Vaishnavi Sontakke</h1>");
    res.end();
}).listen(4500);
// 4500 : port at which it is going to run


