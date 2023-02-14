CREATE DATABASE IF NOT EXISTS react_native_tasksdb;

USE react_native_tasksdb;

CREATE TABLE IF NOT EXISTS tasks(id INT NOT NULL AUTO_INCREMENT, title VARCHAR(100) NOT NULL, description TEXT, PRIMARY KEY (id));

INSERT INTO tasks (title, description) VALUES ('task 1', 'description 1'), ('task 2', 'description 2');