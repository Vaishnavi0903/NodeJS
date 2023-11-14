// Refer about.html of public folder
// Root page ==> Home page ==> keep filename index.html , it will be automatically considered as root page

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname , 'public')

app.use(express.static(publicPath));

app.listen(5000);