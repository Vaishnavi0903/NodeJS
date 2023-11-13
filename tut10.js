// Handle Asynchronous Data : Promises
//It will wait until the entire code in the body gets executed and then only
//execute the further task related to it.

let a = 20;
let b = 0;

let waitingData = new Promise((resolve , reject)=>
{
    setTimeout(()=>{
         resolve (30);
    } , 2000);
});

waitingData.then((data)=>
{
    console.log(a+data);
})