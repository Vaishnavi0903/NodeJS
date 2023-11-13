// Basics of nodejs functionalities : functions , importing , modules , etc

const fs = require('fs')
const app = require('./tut2')

console.log("import from app.js :" , app)
console.log("imported p :" , app.p)
console.log("imported function :" , app.r())

console.log("Hello World");

var a = 20
var b = 30
var c = 40
console.warn("a+b+c:",a+b+c)

var x = '20'
var y = 20
if (x===y)
{
    console.log("they are equal and there data-types are different")
}
else{
    if (x==y)
    {
        console.log("x and y are equal bcoz of == Symbol .No data type checking happens")
    }
}

const arr =[2,3,4,5,6,7,3]
arr.filter((item)=>
{
    console.log(item);
})
let result = arr.filter((item)=>
{
    //return item === 3;
    return item > 3;
})
console.log(result);

console.log("---> Current Directory ",__dirname);
console.log("---> File Name ",__filename);