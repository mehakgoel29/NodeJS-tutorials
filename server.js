var express=require('express')
const app = express()
const db=require('./db');
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

const studentRoutes=require('./Routes/studentRoutes')
app.use('/student',studentRoutes)  //Globally middleware apply karo
const libraryRoutes=require('./Routes/libraryRoutes')
app.use('/library',libraryRoutes)

app.listen(3000)  //3000 is port number


