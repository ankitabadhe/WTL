

// const fs = require("fs"); 
// fs.readFile("temp.txt", function(err, data) {
//   if (err) {
//   return console.error(err); }
//   console.log("Asynchronous approach: " + data.toString()); })


//   const fs = require("fs");
//   const data = fs.readFileSync("temp.txt");
//  console.log("Synchronous approach: " + data.toString());



// const fs = require("fs"); 
// fs.open("temp.txt", function (err, data) {
//   if (err) {
//   return console.error(err); }
//   console.log("File opened successfully"); })
  


// const fs = require("fs");
// const buf = Buffer.alloc(1024);

// fs.open("temp.txt", function (err, data) {
// if (err) {
// return console.error(err); }

// fs.read(data, buf, 0, buf.length, 0, function (err, bytes) { if (err) {
// return console.error(err); }
// if (bytes > 0) {
// console.log(buf.slice(0, bytes).toString()); }
// }) })


  
