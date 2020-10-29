DROP DATABASE IF EXISTS employeesDB;
CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department
(
    dept_id INT NOT NULL
    AUTO_INCREMENT,
    dept_name VARCHAR
    (30) NOT NULL,
    PRIMARY KEY
    (dept_id)
);

    CREATE TABLE roles
    (
        role_id INT NOT NULL
        AUTO_INCREMENT,
    title VARCHAR
        (30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INT NOT NULL,
    PRIMARY KEY
        (role_id)
);

        CREATE TABLE employee
        (
            emp_id INT NOT NULL
            AUTO_INCREMENT,
    first_name VARCHAR
            (30) NOT NULL,
    last_name VARCHAR
            (30) NOT NULL,
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY
            (emp_id)
);

            INSERT INTO department
                (dept_name)
            VALUES
                ("Information Technology");
            INSERT INTO department
                (dept_name)
            VALUES
                ("Marketing");
            INSERT INTO department
                (dept_name)
            VALUES
                ("Management");
            INSERT INTO department
                (dept_name)
            VALUES
                ("Human Resources");
            INSERT INTO department
                (dept_name)
            VALUES
                ("Founder");

            INSERT INTO roles
                (title, salary, dept_id)
            VALUES
                ("IT Technician", 65000, 1);
            INSERT INTO roles
                (title, salary, dept_id)
            VALUES
                ("Accounts Manager", 80000, 2);
            INSERT INTO roles
                (title, salary, dept_id)
            VALUES
                ("Relationship Manager", 75000, 3);
            INSERT INTO roles
                (title, salary, dept_id)
            VALUES
                ("HR Personnel", 50000, 4);
            INSERT INTO roles
                (title, salary, dept_id)
            VALUES
                ("CEO", 150000, 3);
            INSERT INTO roles
                (title, salary, dept_id)
            VALUES
                ("Founder", 250000, 5);