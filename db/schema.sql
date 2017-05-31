CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT(5) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	burger_time DATETIME DEFAULT now() NOT NULL,
	PRIMARY KEY (id)
);