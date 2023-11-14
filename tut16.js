const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname , 'public')

app.get('' , (_ , res)=>{                                   // Removes .html(extensions) in URL
      res.sendFile(`${publicPath}/index.html`)
})
app.get('/about' , (_ , res)=>{
      res.sendFile(`${publicPath}/about.html`)
})
app.get('*' , (_ , res)=>{
      res.sendFile(`${publicPath}/PageNotFound.html`)       // 404 Page - Not Found (Refer PageNotFound.html)
})

app.listen(5000);