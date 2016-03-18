var app = require("express")();
var http = require("http").Server(app);
var socket_io = require("socket.io")(http);

app.get("/", function(request, response){
	response.sendFile(__dirname + "/webpage/index.html");
});

socket_io.on("connection", function(socket){
	console.log("a user connected");
	socket.broadcast.emit('hi');
	
	socket.on("disconnect", function(disconnect){
		console.log("a user disconnected");
	});
	
	socket.on("chat message", function(message){
		console.log("message: " + message);
		socket_io.emit("chat message", message);
	});
	
	
});

http.listen(3000, function(){
	console.log("listening on *:3000");
});