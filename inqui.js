const fs = require("fs");
const path = require('path');
//Import inquirer to my file
//import(inquirer);
const inquirer = require('inquirer')
/*Each question object should consist of at least three keys:

name - how you refer to the question (and the answer given) later on
type - what type of question is this? (input, multiple choice, numerical etc)
message - the question you’re asking the user*/
//npm install --save inquirer@^8.0.0
const questions = inquirer.prompt([{
    name: 'title',
    type: 'input',
    message: 'What is your readme title?',
    /*It’s important to note that the default
     option for ‘type’ is ‘input’ and therefore 
     isn’t actually necessary in this scenario.*/
    /*The answer is given back to us as an object
     where the key is the ‘name’ property of the question, 
     and the answer is its value. You can access the answer
      using .then() with a callback function inside.*/
},
    {
    name: 'description',
    type: 'input',
    message: 'What is the description of your readme?',
    },
])
    .then((answer) => {
        if (!answer.description) {
            console.log("That was not a description, please type a description of your web application.");
        }
        else {
            console, log(`Description: ${answer.title}`);
        }
        
})
