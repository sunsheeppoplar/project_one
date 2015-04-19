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
db.run("INSERT INTO documents (title, body) VALUES (?, ?), (?, ?), (?, ?)",
	'Title 1', 'TEST LANGUAGE BODY WORDS WORDZ',
	'Title 2', 'balbhalbhlflajsdf',
	'Title 3', 'dafsdfsaf',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

db.run("INSERT INTO authors (name) VALUES (?), (?)",
	'Tester 1', 'Tester 2',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)

db.run("INSERT INTO authorships (auth_name, doc_title) VALUES (?, ?), (?, ?), (?, ?)",
	'Tester 1', 'Title 1',
	'Tester 1', 'Title 2',
	'Tester 2', 'Title 3', 
	function(err) {
		if (err) {
			console.log(err);
		}
	}
);