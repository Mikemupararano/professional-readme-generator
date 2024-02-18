const fs = require("fs");
const inquirer = require("inquirer");

console.log("************* PROFESSIONAL README GENERATOR ************");

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your web application?",
            validate: (answer) => {
                if (answer.trim() === "") {
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
                if (answer.trim() === "") {
                    return "Please enter a valid description";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?",
            validate: (answer) => {
                if (answer.trim() === "") {
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
                if (answer.trim() === "") {
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
                if (answer.trim() === "") {
                    return "Please choose a license";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter the contribution guidelines.",
            validate: (answer) => {
                if (answer.trim() === "") {
                    return "Please enter valid contribution guidelines";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Does the application require any tests?",
            validate: (answer) => {
                if (answer.trim() === "") {
                    return "Please enter valid test information";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            validate: (answer) => {
                if (answer.trim() === "") {
                    return "Please enter a valid GitHub username";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            validate: (answer) => {
                if (!/\S+@\S+\.\S+/.test(answer)) {
                    return "Please enter a valid email address";
                }
                return true;
            }
        }
    ]).then((answers) => {
        writeToFile('README.md', answers);
    });
}

function writeToFile(fileName, answers) {
    const licenseBadge = `![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)`;

    const readmeContent = `
# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions or concerns, please contact me at [${answers.email}](mailto:${answers.email}).
You can also find me on GitHub: [${answers.github}](https://github.com/${answers.github})
`;

    fs.writeFileSync(fileName, readmeContent);
    console.log('README.md successfully created!');
}

init();
