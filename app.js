require('dotenv').config();
const express = require('express');
const app = express();
const productRoute = require('./router/products');

app.use('/api/v1/products' , productRoute);
app.use(express.json());


app.listen(3017 , () => {
    console.log("Listening at port 3017...");
})