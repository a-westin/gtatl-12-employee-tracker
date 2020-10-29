const inquirer = require("inquirer");

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
        "Add an employee",
        "Remove an employee",
        "Update an employee role",
        "Update an employee manager",
        "Quit",
      ],
    })
    .then((res) => {
      if (res.action === "View all employees") {
        viewAllEmployees();
      } else if (res.action === "View all employees by department") {
        employeesByDepartment();
      } else if (res.action === "View all employees by manager") {
        employeesByManager();
      } else if (res.action === "View all roles") {
        viewAllRoles();
      } else if (res.action === "Add an employee") {
        addEmployee();
      } else if (res.action === "Remove an employee") {
        removeEmployee();
      } else if (res.action === "Update an employee role") {
        updateEmployeeRole();
      } else if (res.action === "Update an employee manager") {
        updateManager();
      } else if (res.action === "Quit") {
        return;
      }
    })
    .catch((err) => console.log(err));
}

initApp();
