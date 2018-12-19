DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id INT AUTO_INCREMENT,
  author VARCHAR(30),
  chirp VARCHAR(300),
  created DATETIME NOT NULL,
  PRIMARY KEY(id)
);