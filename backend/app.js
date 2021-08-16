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
const rating = require('./route/ratingroute')
const Ewallet = require('./route/Ewallet')
app.use(cors()); // to get data from frontend 
app.use(User_route)
app.use(Uploadcontent)
app.use(contactusroute)
app.use(rating)
app.use(Ewallet)
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
UploadContent.find({}, {}, { field: 'asc', sort: { 'postedAt': 1 } }, function (err, post) {
    data = post

}).limit(5)



io.on("connection", (socket) => {
	//console.log('new connection')
	socket.emit("me", socket.id);
	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});




module.exports = app;