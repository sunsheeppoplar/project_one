//app requirements

var express = require('express')
var app = express();

var ejs = require('ejs')
app.set("view_engine", 'ejs')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

var methodOverride = require('method-override')
app.use(methodOverride('_method'))

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('blog.db')

//routes

//home redirect 
app.get('/', function(req, res) {
	res.redirect('/documents')
});

//show all documents
app.get('/documents', function(req, res) {
	db.all("SELECT * FROM documents", function(err, data) {
		if (err) {
			console.log(err);
		} else {
			var doucments = data;
		}
		res.render('index.ejs', {documents: documents});
	});
});

//show all authors
app.get('/authors', function(req, res) {
	db.all("SELECT * FROM authors", function(err, data) {
		if (err) {
			console.log(err);
		} else {
			var authors = data;
		}
		res.render('index.ejs', {authors: authors});
	});
});



app.listen(8888)
console.log('You\'re listening on port 8888')