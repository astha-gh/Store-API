require('dotenv').config();
const express = require('express');
const app = express();
const productRoute = require('./router/products');
const {connectDB} = require('./dB/connect');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/non-found');

app.use('/api/v1/products' , productRoute);
app.use(express.json());

app.use(errorHandler);
app.use(notFound);


const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("Connected with DB");
        app.listen(3017 , () => {
            console.log("Listening at port 3017...");
        })
    }
    catch(err){
        console.log(err);
    }
}

start();
