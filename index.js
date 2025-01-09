import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'Add title of project' },
    { type: 'input', name: 'description', message: 'Add description of project' },
    { type: 'input', name: 'installation', message: 'Add installation instructions' },
    { type: 'input', name: 'usage', message: 'Add usage information' },
    { type: 'list', name: 'license', message: 'Under which license is your application covered?', choices: ['MIT', 'Apache 2.0', 'None'] },
    { type: 'input', name: 'contributing', message: 'Add contribution guidelines' },
    { type: 'input', name: 'tests', message: 'Add test instructions' },
    { type: 'input', name: 'github', message: 'Enter your GitHub username' },
    { type: 'input', name: 'email', message: 'Enter your email address' },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log('Error:', err) : console.log(`${fileName} has been successfully created!`)
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Generating README...");
        writeToFile("sample.md", generateMarkdown({ ...answers }));
    });
}

// Function call to initialize app
init();