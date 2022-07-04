const inquirer = require('inquirer');

const promptProject = (portfolioData) => {
    console.log(`
    ==================================================================
    Follow the instructions to generate a professional README.md file
    ==================================================================
    `);
    return inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the title of your project? (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the title of your project!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "description",
          message: "Provide a description of the project (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the project description!");
              return false;
            }
          },
        },
        {
            type: "input",
            name: "install",
            message: "Provide the installation instructions (Required)",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the installation instructions!");
                return false;
              }
            },
        },
        {
            type: "input",
            name: "usage",
            message: "Provide the usage information (Required)",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the usage information!");
                return false;
              }
            },
        },
        {
            type: "input",
            name: "contribution",
            message: "Provide the contribution guidelines (Required)",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the contribution guidelines!");
                return false;
              }
            },
        },
        {
            type: "input",
            name: "test",
            message: "Provide the test instructions",
        },
        {
          type: "checkbox",
          name: "license",
          message: "What license did you build this project with?",
          choices: [
            "ISC",
            "MIT",
            "BSD",
          ],
        },
        {
          type: "input",
          name: "github",
          message: "Enter your GitHub username (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your GitHub username!");
              return false;
            }
          },
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email (Required)",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter your email!");
                return false;
              }
            },
          },
        
      ])
  };
  
  promptProject()
    .then((portfolioData) => {
      console.log(portfolioData);
    });


// const fs = require('fs');
// const generateReadMe = require('./src/readme-template.js');

// const profileDataArgs = process.argv.slice(2);

// const [title, description, install, usage, contribution, test, github, email] = profileDataArgs;

// fs.writeFile('./README-new.md', generateReadMe(title, description, install, usage, contribution, test, github, email), err => {
//   if (err) throw new Error(err);

//   console.log('README.md complete! Check out README-new.md to see the output!');
// });