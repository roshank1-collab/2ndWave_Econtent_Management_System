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

var data;
UploadContent.find({}, {}, {field: 'asc', sort: { 'postedAt' : 1 } }, function(err, post) {
    data = post
    console.log(post[0]._id)
  }).limit(5)

let interval;
io.on("connection", (socket) => {
    console.log("New client connected "+ socket.id);
    if (interval) {
        clearInterval(interval);
    }
    getApiAndEmit(socket);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
    socket.on("hello",(data)=>{
        console.log(data.id)
        console.log(data)

    } )
});

const getApiAndEmit = socket => {
    // Emitting a new message. Will be consumed by the client
    const response = "hello i am calling you";
    socket.emit("FromAPI", data);
};

