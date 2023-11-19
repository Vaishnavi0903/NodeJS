// Search API with Single and Multiple field

const express = require('express');
require("./config");
const books = require('./books');
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, res) => {
    console.log(req.params.key);
    let data = await books.find(
        {
            "$or": [
                { "title": { $regex: req.params.key } },
                { "Author": { $regex: req.params.key } }
            ]
        }
    );
    res.send(data);
})

app.listen(5000);
