// Asynchronous Basics


console.log("start execution...");

setTimeout(() =>
{
    console.log("logic execution...");
} , 2000);

console.log("end execution");


// Drawback :

let a = 20;
let b = 0;

setTimeout(()=>
{
    b = 30;
});

console.log(a+b);                 
//Bcoz of asynchronous property , value of 'b' has not updated and we get same answer as 'a'
