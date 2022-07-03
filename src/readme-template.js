const generateReadMe = (title, description, install, usage, contribution, test, github, email) => {
  return `
# ${title}

## Table of Contents
* Description
* License
* Installation Instructions
* Usage Information
* Contribution Guidelines
* Test Instructions
* Questions
    
## Description
${description}

## License


## Installation Instructions
${install}

## Usage Information
${usage}

## Contribution Guidelines
${contribution}

## Test Instructions
${test}

## Questions?
Feel free to view my GitHub profile and contact me via email for any additional questions!
${github}
${email}
    `;
};

module.exports = generateReadMe;
