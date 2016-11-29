




/*var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var opts = {
server: {
socketOptions: {keepAlive: 1}
}
};
 
var mongoose = require ('mongose');



// Create Schema variable.
var Schema = mongoose.Schema;

// Define local connection string with MongoDB.
var connectionString = 'mongodb://localhost:27017/shopping';

// Connect to local MongoDB.
var connection = mongoose.connect(connectionString, opts);

// Use auto increment module.
autoIncrement.initialize(connection);

// Initialize app by using Express framework.
var app = express();

// Use Body Parser (Helps to process incoming requests).
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set default port 1337 or custom if defined by user externally.
app.set('port', process.env.PORT || 1337);

console.log ('Hello'); */
