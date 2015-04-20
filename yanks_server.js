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

//new document form
app.get('/documents/new', function(req, res) {
	db.all("SELECT name FROM authors", function(err, data) { if (err) {
		console.log(err)
	} else {
		var dropDownNames = data
	}
	res.render('doc_new.ejs', {dropDownNames: dropDownNames});
});
});

//create a new document
app.post('/documents', function(req, res) {
	var titleInput = req.body.title
	var bodyInput = req.body.body
	var imageInput = req.body.image
	var userInput = req.body.user
	db.run("INSERT INTO documents (title, body, image) VALUES (?, ?, ?)", titleInput, bodyInput, imageInput, function(err) {
		if (err) {
			console.log(err)
		} else {
			db.run("INSERT INTO authorships (auth_name, doc_title) VALUES (?, ?)", userInput, titleInput, function(err) {
				if (err) {
					console.log(err)
				} else {
					res.redirect('/documents')
				}
			});	
		}
	});
});

//edit document form
app.get('/document/:id/edit', function(req,res) {
	var id = req.params.id
	db.get("SELECT * FROM documents WHERE id = ?", id, function(err, data) {
		var individualDoc = data
		if (err) {
			console.log(err)
		} else {
			db.all("SELECT name FROM authors", function(err, data) {
				var dropDownNames = data
				if (err) {
					console.log(err)
				} else {
						res.render('doc_edit.ejs', {individualDoc: individualDoc, dropDownNames:dropDownNames})
				}
			});
		}
	});
});

//update a document
app.put('/document/:id', function(req, res) {
	var titleEdit = req.body.title
	var bodyEdit = req.body.body
	var imageEdit = req.body.image
	var id = req.params.id
	db.run("UPDATE documents SET title = ?, body = ?, image = ? WHERE id = ?", titleEdit, bodyEdit, imageEdit, id, function(err) { 
		if (err) {
			console.log(err)
		} else {
			res.redirect('/document/' + parseInt(id))
		}
	});
});

//delete a document
app.delete('/document/:id', function(req, res) {
	var id = req.params.id
	db.run("DELETE FROM documents WHERE id = ?", id, function(err) {
		if (err) {
			console.log(err)
		} else {
			res.redirect('/documents')
		}
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

//new author form
app.get('/authors/new', function(req, res) {
	res.render('auth_new.ejs')
});

//create a new author
app.post('/authors', function(req, res) {
	var usernameInput = req.body.username
	var emailInput = req.body.email
	db.run("INSERT INTO authors (name, email) VALUES (?, ?)", usernameInput, emailInput, function(err) {
		if (err) {
			console.log(err)
		} else {
			res.redirect('/authors')
		}
	});
});




app.listen(3000)
console.log('You\'re listening on port 3000')