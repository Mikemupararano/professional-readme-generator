//*Import modules fs, path and inquirer for use in node.js
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

/* title of my project,Description,Table of Contents,Installation,
Usage, License, Contributing, Tests, Questions*/
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your web application?",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter a valid title";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of your web application.",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter a valid description";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "table",
        message: "List the contents of your readme.",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter a valid table of contents";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter valid installation instructions";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage instructions",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter valid usage instructions";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your web application",
        choices: ["ISC", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1"],
        validate: (answer) => {
            if (answer === "") {
                return "Please choose a license";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter the contributions.",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter valid contributions";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Does the application require any tests?",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter valid test information";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "questions",
        message: "List any questions about the application",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter valid questions";
            }
            return true;
        }
    }
];

console.log("*************PROFESSIONAL README GENERATOR************");

// function to write README file
function writeToFile(fileName, answers) {
    // README content
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
${answers.table}

## Installations
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}
`;
    // Write content to README.md file
    fs.writeFileSync(fileName, readmeContent);
    console.log('README.md successfully created!');
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
}

// function call to initialize program
init();
