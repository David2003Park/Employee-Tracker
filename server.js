const db = require('./connect');
const inquirer = require('inquirer');

const handleUserSelection = (action) => {
    switch (action) {
        case 'View All Departments':
            viewDepartments();
            break;
        case 'View All Roles':
            viewRoles();
            break;
        case 'View All Employees':
            viewEmployees();
            break;
        case 'Add a Department':
            addDepartment();
            break;
        case 'Add a Role':
            addRole();
            break;
        case 'Add an Employee':
            addEmployee();
            break;
        case 'Update an Employee Role':
            updateEmployeeRole();
            break;
        case 'Exit':
            db.end();
            console.log('Exiting application...');
            break;
        default:
            console.log('Invalid selection');
    }
};

// Define the functions like `viewDepartments`, `addEmployee`, etc., here

module.exports = { handleUserSelection };
