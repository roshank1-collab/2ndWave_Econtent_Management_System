const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // to authorise the request from user or control the user request 

var app = express();
app.use(bodyParser.urlencoded({ extended:false}));
app.use(express.json())
require('./database/db');
const User_route= require('./route/userRoute')
app.use(cors()); // to get data from frontend 
app.use(User_route)

app.listen(90, function (req, res) {
    console.log('Listening to request on port 90');
});