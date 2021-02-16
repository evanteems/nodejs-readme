const inquirer = require("inquirer");

const fs = require("fs");

const util = require("util");

// README template links here
const ReadMeTemplate = require("./src/ReadMeTemplate");

//Function that writes the README file
const createFile = util.promisify(fs.writeFile);

// Creating an array of Questions for the user to input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Username',
            message: 'Please enter github username: (Required)'
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: "What is the name of your project title?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please Describe your project:'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instruction and examples for usage. Included screenshots as needed:'
        },
        {
           type: 'input',
           name: 'credits',
           message: 'Please list all collaborators. If n/a leave blank:' 
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the license for your project:',
            choices: ['GNU AGPL', 'GNU LGPL', 'Mozilla', 'Apache', 'MIT', 'Boost Software', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please list your project features/ languages:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If there are any other applications, guidelines or packages that you would to add, feel free to do so. If there arent any, type "N/A":'
        },
    ])
};


// Create a function to initalize the application
async function init() {
    try {
        const data = await promptUser();
        const createContent = ReadMeTemplate(data);

        await createFile('./example/README.md', createContent);
        console.log('README.md successfully created');
    } catch(err) {
        console.log(err);
    }
};


// Function that calls the initalized application
init();