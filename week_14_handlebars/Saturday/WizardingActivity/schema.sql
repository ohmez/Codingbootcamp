DROP DATABASE IF EXISTS wizzardry_db;
CREATE DATABASE wizzardry_db;
USE wizzardry_db;
CREATE TABLE schools (
    ID int AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    PRIMARY KEY 
    (id)
);
INSERT INTO schools
(name)
VALUES
('Hogwarts Whiches and Wizzards'),('BreakBills'), ('Ilvermorny'),('durmstrang Institute');
SELECT * FROM schools;