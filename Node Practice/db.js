const mongoose = require('mongoose');
// Define the MongoDB connection URL
const mongoURL =  'mongodb://localhost:27017/hotels'

// Set up MongoDB connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true  
    })
    
// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;
// Define event listeners for database connection
db.on('connected', () =>{
    console.log('Connected to mongoDB server');
})
db.on('error', () =>{
    console.log('MongoDB Connection error');
})
db.on('disconnected', () =>{
    console.log('MongoDB disconnected');
})
//Export the database connection
module.exports = db; 
// export is used to export any file to any other file  