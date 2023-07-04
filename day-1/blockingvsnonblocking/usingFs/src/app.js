const fs = require("fs");

const dataFromfile =fs.readFileSync("input.txt",{encoding : "utf-8"});
console.log(dataFromfile);
console.log("Program ended last");


//Async
// const fs = require("fs");

// fs.readFile("input.txt",(err,data)=>{
//     if(err){
//         console.log("erroe in file reading")
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// console.log("Program ended");