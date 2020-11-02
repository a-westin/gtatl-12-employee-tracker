// App requirements
const inquirer = require("inquirer");
const mysql = require("mysql");

// Establishing connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "newday1!",
  database: "employeesDB",
});

connection.connect(function (err) {
  if (err) throw err;
console.log("  888888ba                             dP                dP");            
console.log("   88    `8b                            88                88");            
console.log("  a88aaaa8P' .d8888b. dP    dP 88d888b. 88d888b. .d8888b. 88 88d8b.d8b."); 
console.log("   88   `8b. 88ooood8 88    88 88'  `88 88'  `88 88'  `88 88 88'`88'`88"); 
console.log("   88     88 88.  ... 88.  .88 88    88 88    88 88.  .88 88 88  88  88"); 
console.log("   dP     dP `88888P' `8888P88 dP    dP dP    dP `88888P' dP dP  dP  dP"); 
console.log("                           .88");                                          
console.log("                       d8888P");                                           
console.log("  dP                dP                     dP            oo");                   
console.log("  88                88                     88");                                 
console.log("  88 88d888b. .d888b88 dP    dP .d8888b. d8888P 88d888b. dP .d8888b. .d8888b."); 
console.log("  88 88'  `88 88'  `88 88    88 Y8ooooo.   88   88'  `88 88 88ooood8 Y8ooooo."); 
console.log("  88 88    88 88.  .88 88.  .88       88   88   88       88 88.  ...       88"); 
console.log("  dP dP    dP `88888P8 `88888P' `88888P'   dP   dP       dP `88888P' `88888P'"); 

 // ask initial question once connection is established
  initApp();
});

// Function to initialize the app
function initApp() {
  inquirer
    .prompt({
      type: "list",
      message: "Please make a selection.",
      name: "action",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by manager",
        "View all roles",
        "View all departments",
        "Add an employee",
        "Remove an employee",
        "Add a department",
        "Remove a department",
        "Edit a department",
        "Add an employee role",
        "Remove an employee role",
        "Update an employee role",
        "Quit",
      ],
    })
    .then((res) => {
      if (res.action === "View all employees") {
        viewAllEmp();
      } else if (res.action === "View all employees by department") {
        empByDept();
      } else if (res.action === "View all employees by manager") {
        empByMgr();
      } else if (res.action === "View all roles") {
        viewAllRoles();
      } else if (res.action === "View all departments") {
        viewAllDept();
      } else if (res.action === "Add an employee") {
        addEmp();
      } else if (res.action === "Remove an employee") {
        removeEmp();
      } else if (res.action === "Add a department") {
        addDept();
      } else if (res.action === "Remove a department") {
        removeDept();
      } else if (res.action === "Edit a department") {
        editDept();
      } else if (res.action === "Add an employee role") {
        addEmpRole();
      } else if (res.action === "Remove an employee role") {
        removeEmpRole();
      } else if (res.action === "Update an employee role") {
        updateEmpRole();
      } else if (res.action === "Quit") { 
        connection.end();
      }
    })
    .catch((err) => console.log(err));
}

// Function to display all employees
function viewAllEmp() {
  console.log("View all employees");
  connection.query(
    `SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.dept_name, concat(manager.first_name," ", manager.last_name) AS "manager"
    FROM employee 
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    LEFT JOIN roles ON employee.role_id = roles.id 
    LEFT JOIN department ON roles.department_id = department.id`,
    function (err, res) {
      if (err) throw err;
      console.log("\nEmployee listing\n--------------------------------------");
      console.table(res);
      initApp();
    }
  );
}

// Function to display all employees by department
function empByDept() {
  console.log("View all employees by department");
  connection.query(
    `SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.dept_name, concat(manager.first_name," ", manager.last_name) AS "manager"
    FROM employee
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    LEFT JOIN roles ON employee.role_id = roles.id 
    LEFT JOIN department ON roles.department_id = department.id
    ORDER BY department.dept_name`,
    function (err, res) {
      if (err) throw err;
      console.log(
        "\nEmployees by department\n--------------------------------------"
      );
      console.table(res);
      initApp();
    }
  );
}

// Function to display all employees by manager
function empByMgr() {
  console.log("View all employees by manager");
  connection.query(
    `SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.dept_name, concat(manager.first_name," ", manager.last_name) AS "manager"
    FROM employee 
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id 
    LEFT JOIN roles ON employee.role_id = roles.id 
    LEFT JOIN department ON roles.department_id = department.id
    ORDER BY manager`,
    function (err, res) {
      if (err) throw err;
      console.log(
        "\nEmployees by manager\n--------------------------------------"
      );
      console.table(res);
      initApp();
    }
  );
}

// Function to view all roles
function viewAllRoles() {
  connection.query(
    `SELECT roles.id, roles.title, roles.salary, department.dept_name 
    FROM roles
    LEFT JOIN department ON roles.department_id = department.id`,
    (err, data) => {
      if (err) throw err;
      console.log("\nRoles listing\n--------------------------------------");
      console.table(data);
      initApp();
    }
  );
}

// Function to view all departments
function viewAllDept() {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;
    console.log("\nDepartment Listing\n--------------------------------------");
    console.table(data);
    initApp();
  });
}