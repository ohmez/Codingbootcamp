
CREATE DATABASE wish_maker_db;
USE wish_maker_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);
INSERT INTO wishes (wish) VALUES
('get a developer job'), ('make a new app'), ('move to a beach');
