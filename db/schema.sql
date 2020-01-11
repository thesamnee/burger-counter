DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
	id INT(4),
	burger_name VARCHAR(30),
    devoured VARCHAR(30)
);