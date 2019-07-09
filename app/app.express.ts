import express = require("express");
import { config } from "./utils/config";

const cors = require("cors");
const  mongoose = require("mongoose");
const errorHandler = require('errorhandler')
import * as coreRoute from "./routes/coreRouter"

const app: express.Application = express();

console.log("Config env = " + config.env);
console.log("Config port = " + config.port);

const port = normalizePort(process.env.PORT || config.port || "3000");

mongoose.connect(config.get().mongoDbUrl,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    } as any);

// app.use(cors({origin: '*'}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '5mb' }));
app.use(errorHandler());

app.use("/core/api",coreRoute.router );

function normalizePort(val: any) {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
app.listen(port, () => {
    console.log("Server started at"+port);
});