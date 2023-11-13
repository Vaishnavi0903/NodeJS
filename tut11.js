// How NodeJS Works?

// Keywords: Call Stack - Node API - CallBack Queue

//1.
console.log("Starting Up! ")

//2.
setTimeout(()=>
{
    console.log("2 second lack")
} , 2000)

//3.
setTimeout(()=>
{
    console.log("0 second lack")
} , 0)

//4.
console.log("Finishing Up! ")


// Output : 1-4-3-2


//-----------------------------               ---------------------------------
//|       Call Stack          |               |            Node API           | (The things that we
//|---------------------------|               |-------------------------------|  inherit from C/C++
//|                           |               |                               |  first enters Node 
//|                           |               | setTimeout (2 sec)            |  API block)
//|                           |               |                               |
//|                           |               | setTimeout (0 sec) -----      |
//|                           |               |                        |      |
//|                           |               |                        |      |
//|                           |               |                        |      |
//|setTimeout (0sec) <-------------           |                        |      |
//|                           |   |           |                        |      |
//|main() -->(This gets       |   |           |                        |      |
//| executed before setTimeout|   |           |                        |      |
//| comes in Stack)           |   |           |                        |      |
//-----------------------------   |           -------------------------|--------
//                                |                                    |
//         ------------------------                                    |  (less time for execution)
//---------|-----------------------------------------------------------|--------------
//|        |                 Call Back Queue                           |             |
//---------------------------------------------------------------------|--------------
//| setTimeout (0 sec)                                          <<------    (Till this we get the 
//|                                                                          output of 1 and 4)
//|                                                                                  |
//------------------------------------------------------------------------------------








