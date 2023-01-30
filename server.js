// call express and dotenv
const express = require('express');
const dotenv = require('dotenv');
//call DB
const connectDB = require('./config/db');
//Route files
const books = require('./routes/books')

//load env from config
dotenv.config({path:'./config/config.env'});

//Connect DB
connectDB();

// create app from express
const app = express();

//Mount routers
app.use('/api/v1/books',books)
//ref port from config.env
const PORT = process.env.PORT || 5001;

//listen at PORT and show result
const server = app.listen(PORT, console.log('Server running in ',process.env.NODE_ENV,'mode on port',PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise)=>{
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(()=>process.exit(1))
});