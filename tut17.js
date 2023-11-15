// Refer views->profile.ejs

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname , 'public')

app.set('view engine' , 'ejs');

app.get('' , (_ , res)=>{                                  
      res.sendFile(`${publicPath}/index.html`);
})


app.get('/about' , (_ , res)=>{
      res.sendFile(`${publicPath}/about.html`);
})


app.get('/profile' , (_ , res)=>{  
        const user ={
            name:"Vaishnavi Sontakke",
            email:"vaish@gmail.com",
            city:"panvel"
        }                                
        res.render('profile' , {user});
})


app.get('*' , (_ , res)=>{
    res.sendFile(`${publicPath}/PageNotFound.html`); 
})


app.listen(5000);