const inquirer = require("inquirer");

function initApp() {
  inquirer.prompt({
    type: "list",
    message: "Please make a selection.",
    name: "action",
    choices: [
      "View all employees",
      "View all employees by Department",
      "View all employees by Manager",
      "View all Roles",
      "Add an employee",
      "Remove an employee",
      "Update an employee Role",
      "Update an employee Manager",
      "Quit",
    ],
  });
}

initApp();
