var http = require('http');
var fs = require('fs');
console.log('Server will listen at :  127.0.0.1:3000 ');
http.createServer( (req, res)=> {
	console.log("Port Number : 3000");
	// Change the MIME type to application/pdf
	res.writeHead(200, {"Content-Type": "application/csv"});
	 
	fs.readFile('index.csv', (error,data) => {
		if(error){
			res.json({'status':'error',msg:err});
		}else{			
			res.write(data);
			res.end();       
		}
	});
}).listen(3000);



// var http = require('http'); var fs = require('fs');
// http.createServer((req, res) => {

// const readStream = fs.createReadStream('./employee.csv'); res.writeHead(200, { 'Content-type': 'text/csv' }); readStream.pipe(res);
// }).listen(3000); 
