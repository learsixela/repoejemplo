-- para conectar a mysql por consola
-- mysql -u root -p 

-- mariadb[(none)]> 
-- Mostrar todas las bases de datos en mi pc para mysql
SHOW DATABASES;

-- crear una base de datos en mysql
CREATE DATABASE ayun;

-- usar la base de datos creada (USE nombre_basedatos)
USE ayun;
-- mariadb[ayun]> 

-- ELIMINAR UNA BASE DE DATOS (DANGER!!!) (ejecutar con responsabilidad!)
DROP DATABASE zzzz;

-- creacion de tablas dentro de la base de datos seleccionada
-- CREATE TABLE nombre_de_la _tabla( );

CREATE TABLE personas (
    id INT,
    nombre VARCHAR(255),
    apellido VARCHAR(255)
);

-- SABER LAS TABLAS EN UNA BASE DE DATOS
SHOW TABLES;

-- eliminar una tabla 
DROP TABLE JUGETES;

-- INSERCION DE REGISTROS
-- INSERT INTO nombre_tabla (columna1, columna2 ...)
-- VALUES (VALOR1, VALOR2);

INSERT INTO personas (id, nombre,apellido) 
VALUES (1,"Carlos", "Maldonado" );

INSERT INTO personas (id, nombre,apellido) 
VALUES (2,"Dani", "Ortega" ),
        (3,"Juan", "Alvarez");

-- PARA SABER LA ESTRUCTURA DE UNA TABLA
-- DESCRIBE nombre_tabla;
DESCRIBE personas;

-- CONSULTAS A LAS TABLAS
-- SELECT [] FROM nombre_tabla;
SELECT * FROM personas;

SELECT nombre FROM personas;
SELECT nombre, id FROM personas;-- SELECT id, nombre FROM personas;
SELECT id, apellido, nombre FROM personas;

-- FILTROS
SELECT * FROM personas
WHERE id < 3
;
SELECT * FROM personas
WHERE nombre = 'dani'
and id= 3
;

-- LIKE
-- '%%' o '%?' o '?%'

SELECT * FROM personas
WHERE nombre LIKE '%n%';

SELECT * FROM personas
WHERE nombre LIKE '%i';

SELECT * FROM personas
WHERE nombre LIKE 'C%';

