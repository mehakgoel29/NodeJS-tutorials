var express=require('express')
const app = express()
const db=require('./db');
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
require('dotenv').config();

const studentRoutes=require('./Routes/studentRoutes')
app.use('/student',studentRoutes)  //Globally middleware apply karo
const libraryRoutes=require('./Routes/libraryRoutes')
app.use('/library',libraryRoutes)


const PORT=process.env.PORT || 3000 ; //to access variable from .env we use process.env.variable
//it will use the port from env if present otherwise 3000
app.listen(PORT)  //3000 is port number


