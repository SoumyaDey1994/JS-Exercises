const http= require('http');    //import 'http' node module
const fs = require('fs');   //import 'fs' module
const path = require('path');   //import 'path' module
const url=require('url');

const hostname='localhost'; //Setup Hostname
const port=4000;    //Setup the Port Number

//Setup Restify Server
// const server= http.createServer((req, res)=>{
//     console.log("Request Header: \n"+req.headers);  //Print Incoming request header

//     res.statusCode=200;     //Set the statuscode of response to 200
//     res.setHeader('Content-Type', 'text/html');     //Set content-type as text/html
//     res.end("<html><body><h1>Hello User</h1></body></html>"); //End response body with html content
// })

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);
    var queryData = url.parse(req.url, true).query;
  
    if (req.method == 'GET') {
      var fileUrl;
      if (req.url == '/') fileUrl = '/index.html';
      else fileUrl = req.url;
  
      var filePath = path.resolve('./External_User_Document'+fileUrl);
      const fileExt = path.extname(filePath);
      if (fileExt == '.html') {
        fs.exists(filePath, (exists) => {
          if (!exists) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + 
                        ' not found</h1></body></html>');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
        });
      }
      else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + fileUrl + 
                ' not a HTML file</h1></body></html>');
      }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
    }
  })
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`); //Print mesage containing hostname 7 port number
});