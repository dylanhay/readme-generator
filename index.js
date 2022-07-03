const fs = require('fs');
const generateReadMe = require('./src/readme-template.js');

const profileDataArgs = process.argv.slice(2);

const [title, purpose, language, link, name] = profileDataArgs;

fs.writeFile('./README-new.md', generateReadMe(title, purpose, language, link, name), err => {
  if (err) throw new Error(err);

  console.log('README.md complete! Check out README-new.md to see the output!');
});