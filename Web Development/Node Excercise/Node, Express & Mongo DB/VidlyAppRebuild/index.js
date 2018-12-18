const cors = require("cors");
const debug = require("debug")("app:startup");
const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");
const homeRouter = require("./routes/home");
const genreRouter = require("./routes/genres");
// Express App
const app = express();
//Express Middleware function
app.use(bodyParser.json());
app.use(cors());
// Default Route Get Request
app.use('/', homeRouter);
app.use('/api/genres', genreRouter);
//Configure the port number
const port = process.env.PORT || 7878;
app.listen(port, ()=>debug(`Web Server listening to port ${port}`));