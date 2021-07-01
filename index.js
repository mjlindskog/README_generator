// imports inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            // Top header that will appear on README
            type:'input',
            name:'title',
            message: 'What would you like to title this project?'
        },
        {
            // user can write desrcition of project here
            type:'input',
            name: 'description',
            message: 'Please write a brief description of your project.'
        },
        {
            // installation instructions such as code snippets or downloading procedures will be written here
            type:'input',
            name: 'installation',
            message: 'Write a brief description of any installation instructions associated with your project.'
        },
        {
            // Tell users how to use the project
            type:'input',
            name: 'usage',
            message: 'Write a brief description of your project will be used.'
        },
        {
            // describe how other users can contribute
            type:'input',
            name: 'contribution',
            message: 'How can others contribute to your project.'
        },
        {
            // tests to run 
            type:'input',
            name: 'tests',
            message: 'Please write how to test your project.'
        },
        {
            // choose from a list of licenses
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: ['Apache 2.0', 'MIT', 'Mozilla Public License 2.0', 'GNU GPL v3', 'BSD 2-Clause', 'Unlicense']
        },
        {
            // if inputted correctly will later allow link to be created to Github project
            type:'input',
            name: 'username',
            message: 'Please enter your github username.'
        },
        {
            // if inputted correctly will later allow email to be sent to user
            type:'input',
            name: 'email',
            message: 'Please enter your email.'
        },
    ])
    .then((data) => {
        // redirects generated README.md to a different folder to prevent overwrite of original README.md
        const filename = './generated/README.md';

        fs.writeFile(filename, writeMd(data), (err) =>
            // error will be thrown back if unsuccessful
            err ? console.log(err) : console.log('README successfully generated!')
        );
    });

// writes markdown document following basic README format presented in acceptance criteria
function writeMd(data) {
    return `# ${data.title}
    [![License](https://img.shields.io/badge/license-${data.license}-informational)](https://shields.io)
    ## Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Questions](#questions)
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
    - Github: [${data.username}](https://github.com/${data.username})
    - Email: ${data.email}`;
}