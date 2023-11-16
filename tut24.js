// Update into Database 

// Single update : updateOne();
// Multiple update : updateMany();

const dbConnection = require('./mongodb');

const updateDB = async () =>
{
    let db = await dbConnection();
    let result = await db.updateOne(
        { title : "Atomic Habits"} , {$set:{ pages : 1000 }}
    )
    
    if (result.acknowledged)
    {
        console.log("update successful");
    }
}

updateDB();