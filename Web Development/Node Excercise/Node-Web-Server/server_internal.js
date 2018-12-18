var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname+'//Internal_User_Document')).listen(24644, function(){
    console.log('Server listening to http://localhost:24644');
});