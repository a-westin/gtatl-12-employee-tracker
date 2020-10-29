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
        viewAllEmp();
      } else if (res.action === "View all employees by department") {
        empByDept();
      } else if (res.action === "View all employees by manager") {
        empByMgr();
      } else if (res.action === "View all roles") {
        viewAllRoles();
      } else if (res.action === "Add an employee") {
        addEmp();
      } else if (res.action === "Remove an employee") {
        removeEmp();
      } else if (res.action === "Update an employee role") {
        updateEmpRole();
      } else if (res.action === "Update an employee manager") {
        updateEmpMgr();
      } else if (res.action === "Quit") {
        return;
      }
    })
    .catch((err) => console.log(err));
}

// Console logging whichever selection the user makes
function viewAllEmp() {
  console.log("View all employees");
}

function empByDept() {
  console.log("View all employees by department");
}

function empByMgr() {
  console.log("View all employees by manager");
}

function viewAllRoles() {
  console.log("View all roles");
}

function addEmp() {
  console.log("Add an employee");
}

function removeEmp() {
  console.log("Remove an employee");
}

function updateEmpRole() {
  console.log("Update an employee role");
}

function updateEmpMgr() {
  console.log("Update employee manager");
}

initApp();
