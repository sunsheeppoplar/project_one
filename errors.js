// *** Have to figure out a way to sanitize this junction table input ***
		// } else {
		// 	var lastInsertRowId = 'last_insert_rowid()'
		// 	var selectStatement = 'SELECT id FROM authors WHERE name =' + " '" + userInput + "'"
		// 	db.run("INSERT INTO authorships (auth_id, doc_id) VALUES (?, ?)", selectStatement.toString(), lastInsertRowId.toString(), function(err) {
		// 		if (err) {
		// 			console.log(err)
		// 		} else {
		// 			res.redirect('/documents')
		// 		}
		// 	});
		// }
		// doesn't run congruently 
		// } else {
		// 	db.run("INSERT INTO authorships (doc_id) VALUES (last_insert_rowid()", function(err) {
		// 		if (err) {
		// 			console.log(err)
		// 		} else { 
		// 			db.all("INSERT INTO authorships (auth_id) SELECT id FROM authors WHERE name = ?", userInput, function(err) {
		// 				if (err) {
		// 					console.log(err)
		// 				} else {
		// 					res.redirect('/documents')
		// 				}
		// 			});
		// 		}
		// 	});
		// }