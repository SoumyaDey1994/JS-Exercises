const startupDebugger = require('debug')('app:startup');
const config = require("config");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const log = require('./middlewares/logger');
const auth = require('./middlewares/auth');
//Routers
const homeRoute = require('./routes/home');
const courseRoute = require('./routes/courses');
//Middleware function
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static('public'));
//Custome Middleware function
// app.use(log);
app.use(auth);
//Third party middlewares
app.use(cors());

if(app.get('env') === 'development'){
    app.set('*', helmet());
    app.all('*',morgan('tiny'));
    startupDebugger(`Helmet & Morgan is set`);
    startupDebugger(`Name of the app : ${config.get('name')}`);
    startupDebugger(`Sports topic is present: ${config.get('topic.Sports')}`);
}

//Routes
app.use('/', homeRoute);
app.use('/api/courses', courseRoute);

const port = process.env.PORT || 8000;
app.listen(port, ()=>startupDebugger(`Listening to port ${port}`));

