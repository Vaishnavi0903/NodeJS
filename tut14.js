// Render HTML and JSON
 
// Render ==> Display 

const express = require('express');
const app = express();
app.get('' , (req , res)=>{
     res.send(`
     <h1>Hello , this is Home Page</h1>
     <a href="/about"> Go to About Page </a><br>
     <a href="/help"> Go to JSON Data Page </a>
     `);
})
app.get('/about' , (req , res)=>{
     res.send(`
     <input type="text" placeholder="Username"/>
     <input type="email" placeholder="Email"/>
     <button> Click Me </button>

     `);
})
app.get('/help' , (req , res)=>{
     res.send(
       [{
            name:'anil',
            email: 'anil@text.com'
        },
       {
            name:'vaish',
            email: 'vaish@text.com'
        },
       {
            name:'sakshi',
            email: 'sakshi@text.com'
        }]
     );
})

app.get('/welcome' , (req , res)=>{
    res.send("Hello , this is Welcome Page");
})



app.listen(5000);