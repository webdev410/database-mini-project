DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;
CREATE TABLE movies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
  DESCRIBE movies;
CREATE TABLE reviews (
  id INT AUTO_INCREMENT,
  movie_id INT NOT NULL,
  review TEXT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
);
  DESCRIBE reviews;

INSERT INTO movies (id, name)
VALUES (1, "Silence of the Lambs"),
  (2, "Happy Gilmore"),
  (3, "Training Day"),
  (4, "Ace Ventura Pet Detective"),
  (5, "Braveheart");
INSERT INTO reviews (movie_id, review)
VALUES (1, "This is my review."),
  (2, "This is my second review."), (3, "This is my third review."), (4, "This is my fourth review."), (5, "This is my fifth review.");
