// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title? ",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe the project: ',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the installation instructions? ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information? ',
  },
  {
    type: 'input',
    name: 'credit',
    message: 'Are there any collaborators/third-party assets/tutorials that need credit? ',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Are there any contribution guidelines? ',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the testing instructions? ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license is this project using? ',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub user name? ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email? ',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.error(error) : console.log("README Created!");
  });
};

// Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const readme = generateMarkdown(response);
      const fileName = response.title + ".md"
      writeToFile(fileName, readme);
  });
};

// Function call to initialize app
init();
