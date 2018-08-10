CREATE DATABASE IF NOT EXISTS sequelizeburger_db;
USE sequelizeburger_db;
CREATE TABLE burgers(id INTEGER(11) PRIMARY KEY AUTO_INCREMENT, burger_name VARCHAR(100) NOT NULL, devoured BOOLEAN DEFAULT false);