// Upload files : MULTER Package
// Install multer package : npm i multer

const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb)           //cb = callback
        {
            cb(null, "uploads")                      
            // create new folder "uploads" where you want to upload file.
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname+"-" + Date.now() + ".jpg")
        }

    })
}).single("user_file");


app.post("/upload", upload , (req, res) => {
    res.send("File uploaded");
})

//second parameter "upload" is the function we created above act as middleware

app.listen(5000);

// In POSTMAN
// method : post 
// url : http://localhost:5000/upload
// key : user_file (Select from dropdown : File)
// Value : choose appropriate file 
// SEND
