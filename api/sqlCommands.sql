CREATE DATABASE Product;

CREATE TABLE Product(
    id INT AUTO_INCREMENT,
    name VARCHAR(80),
    description VARCHAR(400),
    seller_name VARCHAR(100),
    price INT,
    PRIMARY KEY(id)
);


SELECT * FROM Product;


INSERT INTO PRODUCT(name, description, seller_name, price) VALUES("Laptop", "Maxbook 14 m1", "Apple", 78000);
INSERT INTO PRODUCT(name, description, seller_name, price) VALUES("iPhone", "iPhone 14 pro max ultra", "Apple", 114000);

DELETE FROM PRODUCT WHERE id=6;