//packages for this application
const inquirer = require('inquirer');
const fs = require('fs');

//link to generateReadMe function contained in file in source folder
const generateReadMe = require('./src/readme-template.js');

//prompt function
const promptProject = (readmeData) => {
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
            message: "Provide the test instructions (Required)",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the test instructions!");
                return false;
              }
            },
        },
        {
          type: "checkbox",
          name: "license",
          message: "What license did you build this project with?",
          choices: [
            "Apache License 2.0",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
            "Eclipse Public License 1.0",
            "GPL v3 License",
            "GPL v2 License",
            "LGPL v3 License",
            "MIT License",
            "Mozilla Public License 2.0"
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
  
  //prompt function call => README is generated and written
  promptProject()
    .then(readmeData => {
      const pageREADME = generateReadMe(readmeData);
      fs.writeFile('./README-new.md', pageREADME, err => {
        if (err) throw new Error(err);
  
        console.log('Page created! Check out README-new.md in this directory to see it!');
    
      });
});