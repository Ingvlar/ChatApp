var express = require("express");
var app = express();
var http = require("http").Server(app);
var server = require("socket.io")(http);

app.use(express.static(__dirname + "/client/"));
app.use(express.static(__dirname + "/server/"));
app.get("/", function(request, response){	
	response.sendFile(__dirname + "/client/webpage/index.html");
});

/* server.on("connection", function(client){

	client.on("join", function(name){
		client.nickname = name;
		console.log(client.nickname + " joined");
		client.broadcast.emit("chat message", client.nickname + " has joined.");
		client.emit("chat message", client.nickname + " has joined.");
		
	});
	
	client.on("disconnect", function(disconnect){
		console.log(client.nickname + " disconnected");
	});
	
	client.on("chat message", function(message){
		console.log(client.nickname + ": " + message);
		client.broadcast.emit("chat message", client.nickname + ": " + message);
		client.emit("chat message", client.nickname + ": " + message);
		
	});
	
	
});
 */
http.listen(3000, function(){
	console.log("listening on *:3000");
});