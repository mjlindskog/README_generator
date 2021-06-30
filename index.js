// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message: 'What would you like to title this project?'
        },
        {
            type:'input',
            name: 'description',
            message: 'Please write a brief description of your project.'
        },
        {
            type:'input',
            name: 'installation',
            message: 'Write a brief description of any installation instructions associated with your project.'
        },
        {
            type:'input',
            name: 'usage',
            message: 'Write a brief description of your project will be used.'
        },
        {
            type:'input',
            name: 'contribution',
            message: 'How can others contribute to your project.'
        },
        {
            type:'input',
            name: 'tests',
            message: 'Please write how to test your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: ['Apache 2.0', 'MIT', 'Mozilla Public License 2.0', 'GNU GPL v3', 'BSD 2-Clause', 'Unlicense']
        },
        {
            type:'input',
            name: 'username',
            message: 'Please enter your github username.'
        },
        {
            type:'input',
            name: 'email',
            message: 'Please enter your email.'
        },
    ])
    .then((data) => {
        const filename = './generated/README.md';

        fs.writeFile(filename, writeMd(data), (err) =>
            err ? console.log(err) : console.log('README successfully generated!')
        );
    });

function writeMd(data) {
    return `# ${data.title}
  [![License](https://img.shields.io/badge/license-${data.license}-informational)](https://shields.io)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.tests}
  ## Questions:
  - Github: [${data.github}](https://github.com/${data.username})
  - Email: ${data.email}`;
}