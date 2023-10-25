// Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
// writes ReadMe file
const writeToFile = ({fileName, description, installation, usage, license, contributing, tests, username, email}) =>    
`# ${fileName} 

    ## Description 

    ${description} 

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation 

    ${installation} 

    ## Usage 

    ${usage} 

    ## License 

    This project is licensed under the ${license} license. 

    ## How to Contribute 

    ${contributing} 

    ## Tests 

    ${tests} 

    ## Questions 

    Find me on Github: ${username} 

    or email: ${email}`;
// Prompts Questions 
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'fileName',
            message: 'What is the project title?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install project?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use',
          },
          {
            type: 'list',
            name: 'license',
            message: 'Any license?',
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "Unlicense"]
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Do you want contributors?',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for your application',
          },
          {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
    ]);
};
// creates ReadMe.md file
const init = () => {
    promptUser()
     .then((answers) => writeFile('README.md', writeToFile(answers)))
     .then(() => console.log('Successfully wrote to README.md'))
     .catch((err) => console.error(err));
 };


// Function call to initialize app
init();
