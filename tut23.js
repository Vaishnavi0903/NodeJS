// insert data to Database

// insert single document : insertOne();
// insert multiple document : insertMany();

const dbConnection = require('./mongodb');

const addTodb = async () => {
    const db = await dbConnection();
    const result = await db.insertMany(
        [{
            title: "Atomic Habits",
            Author: "ABC",
            pages: 750
        },
        {
            title: "William",
            Author: "XYZ",
            pages: 600
        }]);
    if (result.acknowledged) {
        console.log("data inserted");
    }
}

addTodb();
