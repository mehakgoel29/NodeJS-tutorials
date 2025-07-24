const mongoose=require('mongoose');
require('dotenv').config();

//define the url for MongoDb database server
//const mongoURL='mongodb://127.0.0.1:27017/students';
const mongoURL=process.env.MONGO_DB_URL

mongoose.connect(mongoURL);
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected',()=>{
    console.log('connected to MongoDB server')
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected')
})

db.on('error',(err)=>{
    console.log('MongoDB connection error: ',err)
})

module.exports=db;


