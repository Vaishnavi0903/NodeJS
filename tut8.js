// CRUD Operation with File System

// Make - Read - Update - Rename - Delete file

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname , 'CRUD');
const filePath = `${dirPath}/apple.txt`;

// 1.Create file
//fs.writeFileSync(filePath, 'This is a simple text');       

//--------------------------------------------------------------

// 2.Read File
// fs.readFile(filePath ,'utf8' , (err , item)=>
// {
//      console.log(item);
// })

//----------------------------------------------------------------

// 3.Update file
// fs.appendFile(filePath , ' and file name is apple.txt' , (err) =>
// {
//     if(!err) console.log("File is updated");
// })

//---------------------------------------------------------------------------

// 4.Rename File
// fs.rename(filePath , `${dirPath}/fruit.txt` , (err) =>
// {
//     if(!err) console.log("Filename is renamed");
// });

//---------------------------------------------------------------------------

// 5.Delete File
fs.unlinkSync(`${dirPath}/fruit.txt`);