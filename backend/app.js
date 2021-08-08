const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // to authorise the request from user or control the user request 
const UploadContent = require('./model/Uploadcontent');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
require('./database/db');
const User_route = require('./route/userRoute')
const Uploadcontent = require('./route/uploadContent')
const contactusroute = require('./route/contactUs')
app.use(cors()); // to get data from frontend 
app.use(User_route)
app.use(Uploadcontent)
app.use(contactusroute)
app.use(express.static('pictures'))
const port = process.env.PORT || 90;
const server = app.listen(port, function (req, res) {
    console.log(`Listening on port ${port}`);
});
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});


// finding the latest data in upload content 
var data;
UploadContent.find({}, {}, {field: 'asc', sort: { 'postedAt' : 1 } }, function(err, post) {
    data = post
    
  }).limit(5)


io.on("connection", (socket) => {
    socket.emit('me',socket.io)
});



