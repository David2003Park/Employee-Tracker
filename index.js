const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./connect');
const server = require('./server');

const launchMainMenu = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Exit'
        ]
    }).then(answer => {
        server.handleUserSelection(answer.action);
    });
};

launchMainMenu();
