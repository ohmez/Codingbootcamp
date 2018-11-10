DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

-- 1,Bing Crosby,White Christmas,1942,39.903,23.929,5.7,2.185,0.54

CREATE TABLE Top5000 (
    position INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(100) NOT NULL,
    title VARCHAR(150) NOT NULL,
    year INT,
    total_score DECIMAL(10,3),
    us_score DECIMAL(10,3),
    uk_score DECIMAL(10,3),
    eu_score DECIMAL(10,3),
    others_score DECIMAL(10,3), 
    PRIMARY KEY(position)
);

SELECT topalbums.artist, topalbums.year, topalbums.album, top5000.title FROM topalbums
RIGHT JOIN top5000 ON topalbums.artist =top5000.artist AND topalbums.year = top5000.year;
