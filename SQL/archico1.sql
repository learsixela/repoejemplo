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







