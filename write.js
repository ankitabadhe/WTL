

// const fs = require("fs");
// fs.writeFile("input.txt", "I am writing to file", function (err) {
//    if (err) {
// return console.error(err); 
// }
// console.log("Data written successfully");

// fs.readFile("input.txt", function (err, data) {
// if (err) {
// return console.error(err);
//  }
// console.log("Asynchronous read: " + data.toString()); 
// })
// })



// const fs = require("fs");
// fs.appendFile("input.txt", "I am appending to file", "utf8", function (err) {
// if (err) {
// return console.error(err); }
// console.log("Data appended to file successfully"); 
// fs.readFile("input.txt", function (err, data) {
// if (err) {
// return console.error(err); }
// console.log("Asynchronous read: " + data.toString()); })
// })


// const fs = require("fs");
// const buf = Buffer.alloc(1024);

// fs.open("temp.txt", "r+", function (err, data) {
// if (err) {
// return console.error(err);
// }
// console.log("File opened successfully");

// fs.read(data, buf, 0, buf.length, 0, function (err, bytes) {
//    if (err) {
// return console.error(err); 
// }
// if (bytes > 0) {
// console.log(buf.slice(0, bytes).toString());
//  }
// fs.close(data, function (err) { 
//   if (err) {
// return console.error(err); 
// }
// console.log("File closed successfully."); 
// })
// }) 
// })



// const fs = require("fs"); 
// fs.unlink("input.txt", function (err) {
//   if (err) {
//   return console.error(err); }
//   console.log("File deleted successfully"); })
  

