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
INSERT INTO chirps (author, chirp, created) VALUES
('johny', 'the walk to my car was so cold today', '2018-11-27 21:02');
SELECT * FROM chirps;