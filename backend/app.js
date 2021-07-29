const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // to authorise the request from user or control the user request 


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
    console.log('Listening to request on port 90');
});

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});
let interval;

io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
    

});
const getApiAndEmit = socket => {
    const response = "hello this is me";
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};


