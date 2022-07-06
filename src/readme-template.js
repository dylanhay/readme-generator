//array of license badges
var licenseBadgeArr = [
    "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
    "![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)",
    "![License: Eclipse 1.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)",
    "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)",
    "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)",
    "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
];

//array of license links
var licenseLinkArr = [
    "https://opensource.org/licenses/Apache-2.0",
    "https://opensource.org/licenses/BSD-3-Clause",
    "https://opensource.org/licenses/BSD-2-Clause",
    "https://opensource.org/licenses/EPL-1.0",
    "https://www.gnu.org/licenses/gpl-3.0",
    "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    "https://www.gnu.org/licenses/lgpl-3.0",
    "https://opensource.org/licenses/MIT",
    "https://opensource.org/licenses/MPL-2.0"
];

//array of license choices
var licenseChoiceArr = [
        "Apache License 2.0",
        "BSD 3-Clause License",
        "BSD 2-Clause License",
        "Eclipse Public License 1.0",
        "GPL v3 License",
        "GPL v2 License",
        "LGPL v3 License",
        "MIT License",
        "Mozilla Public License 2.0"
];

//function renders license badge
function renderLicenseBadge(licenseText) {
    for (let i=0; i<licenseChoiceArr.length; i++){
        if (licenseText[0] == licenseChoiceArr[i]) {
            return licenseBadgeArr[i];
        }
        if (licenseText.length === 0) {
            return '';
        }
    };
};

//function renders license link
function renderLicenseLink(licenseText) {
    for (let i=0; i<licenseChoiceArr.length; i++){
        if (licenseText[0] == licenseChoiceArr[i]) {
            return licenseLinkArr[i];
        }
        if (licenseText.length === 0) {
            return '';
        }
    };
};

//function renders license section (header and info)
//function returns empty section if there is no license for project
function renderLicenseSection(licenseText){
    if (licenseText.length === 0) {
        return '';
    }
    return ` 
## License  
This application is covered under the following license. Please review the link below for additional information pertaining to the license.
    `;
};

//function generates markdown for README
module.exports = templateData => {

const { license, ...rest } = templateData;

return `
# ${templateData.title}

## Description
${templateData.description}

${renderLicenseSection(license)}
${renderLicenseBadge(license)}  
${renderLicenseLink(license)}

## Table of Contents
[Installation Instructions](#installation-instructions)  
[Usage Information](#usage-information)  
[Contribution Guidelines](#contribution-guidelines)  
[Test Instructions](#test-instructions)  
[Questions](#questions)  

### Installation Instructions
${templateData.install}

### Usage Information
${templateData.usage}

### Contribution Guidelines
${templateData.contribution}

### Test Instructions
${templateData.test}

### Questions
Feel free to view my GitHub profile and contact me via email for any additional questions!  
GitHub Username: ${templateData.github}  
<a href="https://github.com/${templateData.github}">Link to GitHub Profile</a>  
Email: ${templateData.email}  
    `;

};