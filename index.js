const inquirer = require("inquirer");

const fs = require("fs");

// README template links here
const generateMarkdown = require('./utils/generateMarkdown');

//Function that writes the README file
const Choice = require('inquirer/lib/objects/choice');

// Creating an array of Questions for the user to input
const questions = [
        {
            type: 'input',
            name: 'Username',
            message: 'Please enter github username: (Required)'
        },
        {
            type: 'input',
            name: 'title',
            message: "What is the name of your project title?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please Describe your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instruction and examples for usage. Included screenshots as needed:'
        },
        {
            type: 'list',
            name: 'licenseBadge',
            message: 'Choose the license for your project:',
            choices: ["Apache", "GNU", "MIT License"]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If there are any other applications, guidelines or packages that you would to add, feel free to do so. If there arent any, type "N/A":'
        },
        {
            type: 'input',
            name: 'tests',
            message: "Give specai; instructions for testing your project."
        },
        {
            type: 'input',
            name: 'questions',
            message: "Please enter your Github username so that others may contact you with questions regarding your project!"
        }
];

const promptUser = () => {
    return inquirer
        .prompt(questions)
        .then(answers => {
            return answers;
        })
        .catch(err => {
            console.log(err);
            console.log('Error');
        });
};


const writeFile = readmeContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readmeContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File has been successfully created! Please check the 'dist' folder for your custom README.md file!!"
            });
        });
    });
};


// Create a function to initalize the application
function init() {
    promptUser()
    .then(readmeContent => {
        writeFile(generateMarkdown(readmeContent));
    });
};


// Function that calls the initalized application
init();