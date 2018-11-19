DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

CREATE TABLE actors (
    ID int AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    coolness_points INT NOT NULL,
    attitude VARCHAR(99) NOT NULL,
    PRIMARY KEY 
    (id)
);
INSERT INTO actors
(name, coolness_points, attitude)
VALUES
('Jerry Seinfeld', 100, 'clueless'),('Elaine Benes', 999,'hot'), ('Kramer', 420,'wacky'),('George Costanza', 95,'odd');
SELECT * FROM actors;