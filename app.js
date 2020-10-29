const inquirer = require("inquirer");

function initApp() {
  inquirer.prompt({
    type: "list",
    message: "Please make a selection.",
    name: "action",
    choices: [
      "View All employee",
      "View All employee by Department",
      "View All employee by Manager",
      "View All Roles",
      "Add an employee",
      "Remove an employee",
      "Update an employee Role",
      "Update an employee Manager",
      "Quit",
    ],
  });
}

initApp();
