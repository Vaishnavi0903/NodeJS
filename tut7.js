// Create new files . remove them using commandline , set path and make files at specific path


//console.log(process.argv[2]);


//--------------------------------------------------------------------------------------------------
const fs = require('fs');
const input = process.argv;
// fs.writeFileSync(input[2] , input[3]);

//On command line write : node tut7.js apple.txt 'This is a fruit'
//----------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
if(input[2] == 'add')
{
    fs.writeFileSync(input[3] , input[4]);  //create file
}
else if(input[2] == 'remove')
{
    fs.unlinkSync(input[3]);               //remove file
}
else{
    console.log("invalid input");  
}

//On command line : node index.js add orange 'this is color and fruit'
//                : node index.js remove orange     

//-------------------------------------------------------------------------------------------------

const path = require('path');
const dirPath = path.join(__dirname , 'files');   //returns path of current directory

// for(i=0;i<2;i++)
// {
//     fs.writeFileSync(dirPath+`/hello${i}.txt1` , "a simple text file")
// }

//-----------------------------------------------------------------------------------------------------

fs.readdir(dirPath , (err , file)=>
{
    // console.log(file)   //array of files
    file.forEach((item)=>
    {
         console.log(item);
    })
})
