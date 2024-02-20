/*const fs = require("fs");
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
                return true;noo
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

init();*/

// Importing required modules
const fs = require("fs");
const inquirer = require("inquirer");

// Displaying initial message
console.log("************* PROFESSIONAL README GENERATOR ************");

// Function to initialize the application
function init() {
    // Asking user for input using Inquirer prompts
    inquirer.prompt([
        // Prompt for the title of the web application
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
        // Prompt for the description of the web application
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
        // Prompt for the installation instructions
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
        // Prompt for the usage instructions
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
        // Prompt for choosing a license
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
        // Prompt for contribution guidelines
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
        // Prompt for information about tests
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
        // Prompt for GitHub username
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
        // Prompt for email address
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
        // Once all questions are answered, call writeToFile function
        writeToFile('README.md', answers);
    });
}

// Function to write content to a file
function writeToFile(fileName, answers) {
    // Generating a license badge based on user's choice
    const licenseBadge = `![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)`;

    // Generating README content using user's answers
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

    // Writing generated content to a file
    fs.writeFileSync(fileName, readmeContent);
    console.log('README.md successfully created!');
}

// Calling the initialization function to start the application
init();
