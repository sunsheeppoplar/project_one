// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('blog.db');
// db.run("INSERT INTO posts (title, text, image) VALUES (?, ?, ?)",
// 	'Tester', 'TEST!@#$%^&*()_', 'http://bestclipartblog.com/clipart-pics/-test-clipart-1.jpg',
// 	function(err) {
// 		if (err) {
// 			console.log(err);
// 		}
// 	}
// )

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO documents (title, body) VALUES (?, ?)",
	'Title 1', 'TEST LANGUAGE BODY WORDS WORDZ',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO documents (title, body) VALUES (?, ?)",
	'Title 2', 'TEST LANGUAGE BODY WORDS WORDZ',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO documents (title, body) VALUES (?, ?)",
	'Title 3', 'TEST LANGUAGE BODY WORDS WORDZ',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO documents (title, body) VALUES (?, ?)",
	'Title 2', 'TWO TEST LANGUAGE BODY WORDS WORDZ TWO',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO authors (name) VALUES (?)",
	'Tester 1', 
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO authors (name) VALUES (?)",
	'Tester 2', 
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO authorships (auth_id, doc_id) VALUES (?, ?)",
	'1', '1',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO authorships (auth_id, doc_id) VALUES (?, ?)",
	'1', '2',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('yanks.db');
db.run("INSERT INTO authorships (auth_id, doc_id) VALUES (?, ?)",
	'2', '3',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)