// OS Module : Used When you want to know about your operating system
//           : When u have to write code for different OS

const os = require('os');

console.log(os.arch());        //return x64 for 64-bit 

console.log(os.freemem());  // returns in bytes
console.log(os.freemem()/(1024*1024));  // returns in MB 
console.log(os.freemem()/(1024*1024*1024));  // returns in GB

console.log(os.totalmem()/(1024*1024*1024));  // returns in GB

console.log(os.hostname());  

console.log(os.platform());  

console.log(os.userInfo());  