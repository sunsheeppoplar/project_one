DROP TABLE IF EXISTS documents;
CREATE TABLE documents (
	id INTEGER PRIMARY KEY,
	title TEXT, body TEXT, image TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS revisions;
CREATE TABLE revisions (
	id INTEGER PRIMARY KEY,
	title TEXT, body TEXT, doc_id INTEGER,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS subscribers;
CREATE TABLE subscribers (
	id INTEGER PRIMARY KEY,
	name TEXT, 
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS authors;
CREATE TABLE authors (
	id INTEGER PRIMARY KEY,
	name TEXT, 
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS subscriptions;
CREATE TABLE subscriptions (
	id INTEGER PRIMARY KEY,
	sub_id INTEGER, doc_id INTEGER,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS authorships;
CREATE TABLE authorships (
	id INTEGER PRIMARY KEY,
	auth_id INTEGER, doc_id INTEGER,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER timestamp_update BEFORE UPDATE ON documents BEGIN UPDATE documents SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;

CREATE TRIGGER timestamp_update BEFORE UPDATE ON revisions BEGIN UPDATE revisions SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;

CREATE TRIGGER timestamp_update BEFORE UPDATE ON subscribers BEGIN UPDATE subscribers SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;

CREATE TRIGGER timestamp_update BEFORE UPDATE ON authors BEGIN UPDATE authors SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;

CREATE TRIGGER timestamp_update BEFORE UPDATE ON subscriptions BEGIN UPDATE subscriptions SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;	

CREATE TRIGGER timestamp_update BEFORE UPDATE ON authorships BEGIN UPDATE authorships SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;

END;

