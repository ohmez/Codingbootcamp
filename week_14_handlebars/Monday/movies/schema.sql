
CREATE DATABASE movie_planner_db;
USE movie_planner_db;

-- Create the table tasks.
CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);
INSERT INTO movies (movie) VALUES
('the fountain'), ('mr nobody'), ('cloud atlas');
