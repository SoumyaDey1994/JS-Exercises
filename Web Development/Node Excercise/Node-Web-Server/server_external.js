var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname+'//External_User_Document')).listen(24648, function(){
    console.log('Server listening to http://localhost:24648');
});