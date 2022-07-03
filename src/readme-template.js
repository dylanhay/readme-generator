const generateReadMe = (title, purpose, language, link, name) => {
  return `
    # ${title}

    ## Purpose
    ${purpose}

    ## Built With
    * ${language}

    ## Link
    ${link}

    ## Contribution
    Made with ❤️ by ${name}
    `;
};

module.exports = generateReadMe;
