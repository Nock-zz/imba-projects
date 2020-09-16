const express = require('express');
const server = express();
const https = require('https');
const fs = require('fs');
const path = require('path');

// server will serve all files in the directory
server.use('/', express.static(path.join(__dirname, 'public')));

// server will serve ONLY the index.html file that can be viewed at http://localhost:8080
//server.get('/', function(req, res) {
//res.sendFile(path.join(__dirname, 'index.html'));

// alternative for ONLY index.html file but requires a public folder holding the index.html file just under the root holding the     express server.js file
// let public = path.join(__dirname, 'public');
// server.use('/', express.static(public));

// we will pass our 'server' to 'https' server
https.createServer({
	key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem'),
        passphrase: 'imba/express-server'
}, server).listen(8080, function () {
	    console.log('express server listening on port 8080.');
});
