// Refer mongodb.js 

const dbConnection = require ('./mongodb');

// Handling Promises Method-I -----------------------------------
// dbConnection().then((res) => {
//     res.find({}).toArray().then((data) => {
//         console.log(data);
//     });
// });


// Handling Promise Method-II -------------------------------------
const main = async () => {
    let data = await dbConnection();
    data = await data.find({}).toArray();
    console.log(data);
}

main();