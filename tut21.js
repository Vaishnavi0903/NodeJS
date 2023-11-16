// Connect NOde with MongoDB

const { MongoClient } = require('mongodb');

// const MongoClient  = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017' ;
const client = new MongoClient(url);

async function getData()          // await can be used only in async function
{
    let result = await client.connect();
    let db = result.db('bookstore');
    let collection = db.collection('books');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();



// Dont use url as mongodb://localhost:27017 , as the node versions after 18 are not supporting it