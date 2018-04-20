
/**
 * Module dependencies.
 */
// This is my express framework
var express = require('express')
// This is to handle the http 
  , http = require('http')
 // this is to deal with path
  , path = require('path');
var bodyParser = require('body-parser');

// instantiating the express
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
// to take inputfrom the client
//app.use(express.bodyParser());

//This means your data can come from client  in the request body as html form data
app.use(bodyParser.urlencoded({extended: false}));
//to read json data from request body 
app.use(express.json());

// ProObject ---->> holding just definition
// ./ --->>> 
var ProfileDef=require('./model/Profile.js')
app.get("/profiles", function(req, resp){
	console.log("z@::@:@@)) cool");
	res.send("hey!!!!");
});

app.get("/cool", function(req, res){
	console.log("path=" + __dirname);
	// here we are forwarding
	res.sendFile();
})

app.get("/frog", function(req, res){
	frog={name:"frog", color : "green"};
})


//_dirname
app.use(express.static(path.join(__dirname, 'public')));

// creating http server on port number 3000
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log("@@@@@@@ my server is ready to handle to http request!!!!!");
});