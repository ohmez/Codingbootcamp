DROP DATABASE IF EXISTS programminglangs_db;
CREATE DATABASE programminglangs_db;
USE programminglangs_db;

CREATE TABLE languages (
    id INT(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    rating INT(10) NOT NULL,
    PRIMARY KEY(id)   
);
INSERT INTO languages (name, rating) 
values ('javascript', 10), ('css',2), ('html', 7), ('python',10);


ALTER TABLE languages
ADD COLUMN mastery VARCHAR(30) NOT NULL AFTER rating;
