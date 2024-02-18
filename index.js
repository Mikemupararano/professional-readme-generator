const fs = require("fs");
const inquirer = require("inquirer");

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
    // Other questions remain the same...
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        validate: function(github) {
            if (github === "") {
                return "Please enter a valid GitHub username";
            }
            return true;
        }
    }
];

console.log("*************PROFESSIONAL README GENERATOR************");

function writeToFile(fileName, answers) {
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Title](#title)
- [Description](#description)
- [Table of Contents](#table)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Questions
${questions.map(question => `- **${question.message}**: ${answers[question.name]}`).join('\n')}

For any questions or concerns, please contact me at ${answers.email}.
You can also find me on GitHub: [${answers.github}](https://github.com/${answers.github})
`;
    fs.writeFileSync(fileName, readmeContent);
    console.log('README.md successfully created!');
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
}

init();
