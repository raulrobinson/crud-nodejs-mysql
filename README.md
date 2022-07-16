## BASIC API WITH NODE JS - EXPRESS - MYSQL

> Dependencies install.

- npm init -y
- npm i mysql
- npm i -D express nodemon
- npm i body-parser

## Create Database and Tables.

> Database create.
CREATE SCHEMA `node_mysql` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci ;

> Database use.
use node_mysql;

> Create customers table.
CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `city` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

> Add index to customers table.
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

> Insert register on the customers table.
INSERT INTO customers (id, name, city) VALUES (1, 'Raul', 'Barranquilla');

## Postman

> Star server
nodemon

> Get all customers.
http://localhost:3050/customers

> Get customer by Id.
http://localhost:3050/customers/{id}

> Add customer.
http://localhost:3050/add

> Update customer by Id.
http://localhost:3050/update/{id}

> Delete customer by Id.
http://localhost:3050/delete/{id}