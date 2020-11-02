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
INSERT INTO department (dept_name) VALUES ("CEO");
INSERT INTO department (dept_name) VALUES ("Founder");

INSERT INTO roles (title, salary, department_id) VALUES ("IT Technician", 65000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Accounts Manager", 80000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Relationship Manager", 75000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("HR Personnel", 50000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ("CEO", 150000, 5);
INSERT INTO roles (title, salary, department_id) VALUES ("Founder", 250000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Denholm", "Reynholm", 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Douglas", "Reynholm", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jen", "Barber", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Martin", "Fischer", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Patrick", "Marsh", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Roy", "Trenneman", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Maurice", "Moss", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Richmond", "Avenal", 1, 3);