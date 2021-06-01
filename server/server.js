require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express()


app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
try{
    mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},  () =>
    console.log("connected"));

}
catch (error){
    console.log("Couldn't connect ");
}



const connection = mongoose.connection;
try{
    console.log("here")
    connection.once('open', () => {
        console.log("Connection established successfully with the MongoDB Atlas ");
    });
}
catch(error){
    console.log("Error! ");
}



const workersRouter = require('./routes/workers');
const bookingsRouter = require('./routes/Bookings');
const startRouter = require('./routes/start');
const ContactRouter = require('./routes/Contact');
app.use('', workersRouter); 
app.use('', bookingsRouter); 
app.use('', startRouter); 
app.use('', ContactRouter); 



app.listen(process.env.PORT, () => { 
    console.log("The server is running ");
}
);
