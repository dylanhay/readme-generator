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


function renderLicenseBadge(licenseText) {
    if (licenseText == 'Apache License 2.0') {
        return licenseBadgeArr[0];
    }
    if (licenseText == 'BSD 3-Clause License') {
        return licenseBadgeArr[1];
    }
    if (licenseText == 'BSD 2-Clause License') {
        return licenseBadgeArr[2];
    }
    if (licenseText == 'Eclipse Public License 1.0') {
        return licenseBadgeArr[3];
    }
    if (licenseText == 'GPL v3 License') {
        return licenseBadgeArr[4];
    }
    if (licenseText == 'GPL v2 License') {
        return licenseBadgeArr[5];
    }
    if (licenseText == 'LGPL v3 License') {
        return licenseBadgeArr[6];
    }
    if (licenseText == 'MIT License') {
        return licenseBadgeArr[7];
    }
    if (licenseText == 'Mozilla Public License 2.0') {
        return licenseBadgeArr[8];
    }
    else {
        return '';
      }
};

function renderLicenseLink(licenseText) {
    if (licenseText == 'Apache License 2.0') {
        return licenseLinkArr[0];
    }
    if (licenseText == 'BSD 3-Clause License') {
        return licenseLinkArr[1];
    }
    if (licenseText == 'BSD 2-Clause License') {
        return licenseLinkArr[2];
    }
    if (licenseText == 'Eclipse Public License 1.0') {
        return licenseLinkArr[3];
    }
    if (licenseText == 'GPL v3 License') {
        return licenseLinkArr[4];
    }
    if (licenseText == 'GPL v2 License') {
        return licenseLinkArr[5];
    }
    if (licenseText == 'LGPL v3 License') {
        return licenseLinkArr[6];
    }
    if (licenseText == 'MIT License') {
        return licenseLinkArr[7];
    }
    if (licenseText == 'Mozilla Public License 2.0') {
        return licenseLinkArr[8];
    }
    else {
        return '';
      }
};


module.exports = templateData => {

const { license, ...rest } = templateData;

return `
# ${templateData.title}

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)
    
### Description
${templateData.description}

### License
${renderLicenseBadge(license)}  
${renderLicenseLink(license)}

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

