/**************************************************************
*  Minecraft Dashboard Backend Server
*  Author(s): Weston Clark
*
*  Description:
*  This node server will serve as a back-end for the Minecraft
*  server front end client to be able to issue commands to
*  the OS. The primary functions include stop/start the MC server,
*  run backups, and render the dynmap
*
*  File: server.js
**************************************************************
*  Change Date      Name            Description
*  =============    ===========     ==========================
*  08/05/17         Weston Clark    Initial Creation
*
**************************************************************/

// set up needed modules
var http = require('http');
var io   = require('socket.io');
var util = require('util');
var exec = require('child_process').exec;

//include the moduels for our server functions
var command = require('./consoleCommands');

//define how arguments are used in the terminal
var puts = function(error, stdout, stderr){
    util.print(stdout);
};

//create the server and start listening on the defined port
const PORT = 8080;
var server = http.createServer();
server.listen(PORT);
console.log("Listening for a connection...");

//recieves the connection from the client and passes in a socket
io.listen(server).on('connection', function(socket){

    //log that we are connected
    console.log("The server and client are connected");
    socket.emit("connected");

    //listen for what method to call
    socket.on("stopServer",  command.stopServer());
    socket.on("startServer", command.startServer());
    socket.on("runBabkup",   command.runBabkup());
    socket.on("renderMap",   command.renderMap());
});
