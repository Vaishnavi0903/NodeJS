
const { MongoClient } = require('mongodb');

// const MongoClient  = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function dbConnection()          // await can be used only in async function
{
    let result = await client.connect();
    let db = result.db('bookstore');
    return collection = db.collection('books');
}

module.exports = dbConnection;