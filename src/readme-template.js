module.exports = templateData => {

// console.log(templateData);
// console.log(templateData.title);

return `
# ${templateData.title}

# Table of Contents
* [Description] (#description)
* License
* Installation Instructions
* Usage Information
* Contribution Guidelines
* Test Instructions
* Questions
    
## Description
${templateData.description}

## License


## Installation Instructions
${templateData.install}

## Usage Information
${templateData.usage}

## Contribution Guidelines
${templateData.contribution}

## Test Instructions
${templateData.test}

## Questions?
Feel free to view my GitHub profile and contact me via email for any additional questions!
${templateData.github}
${templateData.email}
    `;

};

