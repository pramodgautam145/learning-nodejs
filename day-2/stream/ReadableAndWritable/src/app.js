//Async
const fs = require("fs");

const readalbeStream = fs.ReadStream("input.txt");
const writableStream = fs.WriteStream("output.txt");

// let dataTobeWritten ="";

// readalbeStream.on("data",chunk=>{
//     console.log("\n\r>>>>>>>>>>>>>>>>>>>>>>>chunk >>>>>>>>>>>>>>>>>>\n\r");
//     console.log(chunk.toString());
//     dataTobeWritten+=chunk.toString();
// });

// readalbeStream.on("end",()=>{
//   writableStream.write(dataTobeWritten);
//   writableStream.end();

// })

//OR

readalbeStream.pipe(writableStream);