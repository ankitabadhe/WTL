//   var mysql = require('mysql');
//   var con = mysql.createConnection({
//    host: "localhost",
//     user: "root",
//     password: ""
//  });
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });



//   var mysql = require('mysql');
//   var con = mysql.createConnection({
//    host: "localhost",
//     user: "root",
//     password: ""
//  });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
//   con.query("CREATE DATABASE mca_db", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });



// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mca_db"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

// })

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company UAV', 'Highway 39')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("2 record inserted");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company UAE', 'Highway 45')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("3 record inserted");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company UA', 'Highway 49')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("4 record inserted");
  // });

  //  var sql = "INSERT INTO customers (name, address) VALUES ('Company AI', 'Highway 40')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("5 record inserted");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("6 record inserted");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company UAV', 'Highway 39')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("7 record inserted");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company UAE', 'Highway 45')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("8 record inserted");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company UA', 'Highway 49')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("9 record inserted");
  // });

  //  var sql = "INSERT INTO customers (name, address) VALUES ('Company AI', 'Highway 40')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("10 record inserted");
  // });

  // con.query("SELECT * FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });


  // var sql = "DELETE FROM customers WHERE address = 'Highway 40'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  // });

  // var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Highway 40'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

  // var sql = "DROP TABLE customers";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table deleted");
  // });






// const mysql = require("mysql");

// const con = mysql.createConnection({ host: "localhost", user: "root", password: "",database: "mca_db"});

// con.connect(function (err) { if (err) throw err;
// console.log("Connected to DB");

// const sql = "CREATE TABLE STUDENT (ROLLNO INT, NAME VARCHAR(255))";

// con.query(sql, function (err, result) { if (err) throw err; console.log(result);
// console.log("Student Table created"); });
// }); 




// const mysql = require("mysql");

// const con = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "mca_db" });

// con.connect(function (err) { if (err) throw err;
// console.log("Connected to DB");

// const sql = "ALTER TABLE STUDENT ADD ADDRESS VARCHAR(255);"; con.query(sql, function (err, result) {
// if (err) throw err; console.log(result);
// console.log("Student Table altered. Address column added."); });
// }); 



// const mysql = require("mysql");
// const con = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "mca_db" });
// con.connect(function (err) { if (err) throw err;
// console.log("Connected to DB");
// const sql = "INSERT INTO STUDENT VALUES ?"; const values = [
// [1, "Dhoni", "Chennai"],
// [2, "Sachin", "Mumbai"],
// [3, "Virat Kholi", "Bangalore"], 
// [4, "Krish Gayle", "Bangalore"], 
// [5, "Bravo", "Chennai"],
// [6, "Jadeja", "Chennai"],
// [7, "Suresh Raina", "Chennai"],
// [8, "Rahul", "Punjab"],
// [9, "Rohit Sharma", "Mumbai"], 
// [10, "Malinga", "Kolkata"],
// ]
// con.query(sql, [values], function (err, result) { if (err) throw err;
// console.log(result);
// console.log("Number of records inserted: " + result.affectedRows); });
// });


// const mysql = require("mysql");
// const con = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "mca_db" });
// con.connect(function (err) { if (err) throw err;
// console.log("Connected to DB");
// const sql = "UPDATE STUDENT SET ADDRESS='MUMBAI' WHERE ROLLNO=10;";
// con.query(sql, function (err, result) { if (err) throw err; console.log(result);
// console.log(result.affectedRows + " record(s) updated"); });
// }); 


// const mysql = require("mysql");
// const con = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "mca_db" });
// con.connect(function (err) { if (err) throw err;
// console.log("Connected to DB");
// const sql = "DELETE FROM STUDENT WHERE ROLLNO=10"; con.query(sql, function (err, result) {
// if (err) throw err; console.log(result);
// console.log(result.affectedRows + " record(s) deleted"); });
// })


// const mysql = require("mysql");
// const con = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "mca_db" });
// con.connect(function (err) { if (err) throw err;
// console.log("Connected to DB");
// const sql = "SELECT * FROM STUDENT;"; con.query(sql, function (err, result) {
// if (err) throw err; Object.keys(result).forEach(key => {
// const row = result[key]
// console.log(`Rollno: ${row.ROLLNO},Name: ${row.NAME}, Address: ${row.ADDRESS}`);
// }) });
// }); 



