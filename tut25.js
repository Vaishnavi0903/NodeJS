// Delete into Database 

// Single delete : deleteOne();
// Multiple delete : deleteMany();

const dbConnection = require('./mongodb');

const deleteFromDB = async () => {
    let db = await dbConnection();
    let result = await db.deleteOne(
        { title: "Atomic Habits" }
    )

    if (result.acknowledged) {
        console.log("delete successful");
    }
}

deleteFromDB();