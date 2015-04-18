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
var db = new sqlite3.Database('./db/yanks.db')

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
			var documents = data;
			console.log(documents)
		}
		res.render('yanks_index.ejs', {documents: documents});
	});
});

//show individual document
app.get('/document/:id', function(req, res) {
	var id = req.params.id
	db.get("SELECT * FROM documents WHERE id = ?", id, function(err, data) {
		if (err) {
			console.log(err)
		} else {
			var individualDoc = data;
		}
		res.render('doc_show.ejs', {individualDoc: individualDoc});
	});
});

//new post form
app.get('/documents/new', function(req, res) {
	res.render('doc_new.ejs')
});


//show all authors
app.get('/authors', function(req, res) {
	db.all("SELECT * FROM authors", function(err, data) {
		if (err) {
			console.log(err);
		} else {
			var authors = data;
		}
		res.render('authors_index.ejs', {authors: authors});
	});
});

//show individual author
app.get('/author/:id', function(req, res) {
	var id = req.params.id
	db.get("SELECT * FROM authors WHERE id = ?", id, function(err, data) {
		if (err) {
			console.log(err)
		} else {
			var individualAuth = data;
		}
		res.render('auth_show.ejs', {individualAuth: individualAuth});
	});
});


app.listen(8888)
console.log('You\'re listening on port 8888')