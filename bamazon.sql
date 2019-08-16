DROP DATABASE IF EXISTS task_saver_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id int NOT NULL AUTO_INCREMENT,
  product_name varchar(255) NOT NULL,
  department_name varchar(255) NOT NULL,
  price int NOT NULL,
  stock_quantity int NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO products (product_name) VALUES ('');
INSERT INTO products (product_name) VALUES ('');
INSERT INTO products (product_name) VALUES ('');