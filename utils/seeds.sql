DROP DATABASE IF EXISTS employeesDB;
CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department
(
    id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (dept_name) VALUES ("Information Technology");
INSERT INTO department (dept_name) VALUES ("Marketing");
INSERT INTO department (dept_name) VALUES ("Management");
INSERT INTO department (dept_name) VALUES ("Human Resources");
INSERT INTO department (dept_name) VALUES ("Founder");

INSERT INTO roles (title, salary, department_id) VALUES ("IT Technician", 65000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Accounts Manager", 80000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Relationship Manager", 75000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("HR Personnel", 50000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ("CEO", 150000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Founder", 250000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Denholm", "Reynholm", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Douglas", "Reynholm", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jen", "Barber", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Martin", "Fischer", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Patrick", "Marsh", 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Roy", "Trenneman", 6, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Maurice", "Moss", 6, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Richmond", "Avenal", 6, 3);