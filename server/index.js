const express  =  require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const app= express();

//connecting mongoose
const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser')

//databse connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('databse connected'))
.catch((err)=> console.log('databse not connected',err))

//middleware
app.use(express.json())
// app.use(cookieParser);
app.use(express.urlencoded({extended:false}))


app.use('/',require('./routes/authRoute'))
const port = 8000;
app.listen(port,()=> console.log(`server is running on port ${port}`))